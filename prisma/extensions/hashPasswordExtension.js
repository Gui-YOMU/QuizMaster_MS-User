import { Prisma } from "../../generated/prisma/client.js";
import bcrypt from "bcrypt";
import escape from "escape-html";

export const hashPasswordExtension = Prisma.defineExtension({
  name: "hashPassword",
  query: {
    user: {
      create: async ({ args, query }) => {
        try {
          const hashedPassword = await bcrypt.hash(
            escape(args.data.password),
            10,
          );
          args.data.password = hashedPassword;
          return query(args);
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
    //   update: async ({ args, query }) => {
    //     if (args.data.password) {
    //       try {
    //         const hashedPassword = await bcrypt.hash(
    //           escape(args.data.password),
    //           10,
    //         );
    //         args.data.password = hashedPassword;
    //         return query(args);
    //       } catch (error) {
    //         console.error(error);
    //         throw error;
    //       }
    //     }
    //   },
    },
  },
});