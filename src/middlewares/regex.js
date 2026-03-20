const lastNameRegex = new RegExp(
  /^[A-ZÀ-Ý]([A-ZÀ-Ý]|\'[A-ZÀ-Ý]+|\-[A-ZÀ-Ý]+|\ [A-ZÀ-Ý]+)*$/,
  "m",
);
const firstNameRegex = new RegExp(
  /^[A-ZÀ-Ý]([a-zà-ÿ]|\-[A-ZÀ-Ý][a-zà-ÿ]+|\ [A-ZÀ-Ý][a-zà-ÿ]+)*$/,
  "m",
);
const mailRegex = new RegExp(
  /^([a-z0-9_])(([a-z0-9_\-]*)|(\.(?!\.)))*@([a-z0-9])(([a-z0-9])|(\-[a-z0-9]+)|(\.(?!\.)[a-z0-9]+))*(\.([a-z0-9])(([a-z0-9])|(\-[a-z0-9]+))*)+$/,
  "m",
);
const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/,
  "m",
);

export function checkLastName(args) {
  if (!lastNameRegex[Symbol.match](args.data.lastName)) {
    throw new Error("Le nom de famille n'est pas valide.");
  }
  return args;
}

export function checkFirstName(args) {
  if (!firstNameRegex[Symbol.match](args.data.firstName)) {
    throw new Error("Le prénom n'est pas valide.");
  }
  return args;
}

export function checkMail(args) {
  if (!mailRegex[Symbol.match](args.data.mail)) {
    throw new Error("Le mail n'est pas valide.");
  }
  return args;
}

export function checkPassword(args) {
  if (!passwordRegex[Symbol.match](args.data.password)) {
    throw new Error(
      "Le mot de passe n'est pas valide (au moins 12 caractères avec majuscule(s), minuscule(s) et chiffre(s).",
    );
  }
  return args;
}