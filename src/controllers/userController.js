import { PrismaClient } from "../../generated/prisma/client.js";
import { adapter } from "../../prisma/adapter.js";
import bcrypt from "bcrypt";
import { generateToken } from "../middlewares/generateToken.js";
import { hashPasswordExtension } from "../../prisma/extensions/hashPasswordExtension.js";

const prisma = new PrismaClient({ adapter }).$extends(hashPasswordExtension);

export async function createUser(req, res) {
  const { lastName, firstName, surname, mail, password, confirmPassword } =
    req.body;
  try {
    if (password === confirmPassword) {
      await prisma.user.create({
        data: {
          lastName: lastName,
          firstName: firstName,
          surname: surname !== "" ? surname : null,
          mail: mail,
          password: password,
        },
      });
      res.json({ success: "Votre compte a été créé avec succès." });
    } else {
      throw new Error("Les mots de passe ne correspondent pas.");
    }
  } catch (error) {
    console.error(error);
    res.json({ error: "La création du compte a échoué." });
  }
}

export async function login(req, res) {
  const { mail, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        mail: mail,
      },
    });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = generateToken({ id: user.id, role: user.role, time: Date() })
        res.json({ success: "Connexion effectuée avec succès.", token: token });
      } else {
        throw new Error("Le mot de passe est incorrect.");
      }
    } else {
      throw new Error("L'utilisateur n'existe pas.");
    }
  } catch (error) {
    console.error(error);
    res.json({ error: "La connexion a échoué." });
  }
}