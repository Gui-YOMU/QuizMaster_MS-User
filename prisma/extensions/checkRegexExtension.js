import { Prisma } from "../../generated/prisma/client.js";
import { checkFirstName, checkLastName, checkMail, checkPassword } from "../../src/middlewares/regex.js";

export const checkRegexExtension = Prisma.defineExtension({
  name: "checkRegex",
  query: {
    user: {
      create: ({ args, query }) => {
        checkLastName(args);
        checkFirstName(args);
        checkMail(args);
        checkPassword(args);
        return query(args);
      },
      //   update: ({ args, query }) => {
      //     if (args.lastName) {
      //       checkLastName(args);
      //     }
      //     if (args.firstName) {
      //       checkFirstName(args);
      //     }
      //     if (args.mail) {
      //       checkMail(args);
      //     }
      //     if (args.password) {
      //       checkPassword(args);
      //     }
      //     return query(args);
      //   },
    },
  },
});
