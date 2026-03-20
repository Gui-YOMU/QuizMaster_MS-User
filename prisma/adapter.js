import { PrismaMariaDb } from "@prisma/adapter-mariadb";

export const adapter = new PrismaMariaDb(
  {
    connectionLimit: 5,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER,
  },
  { schema: 'quizmaster_db_user' }
)