import NextAuth, { User } from "next-auth";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("Credentials:", credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log("Missing email/password");
          return null;
        }

        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email.toString()))
          .limit(1);

        console.log("User:", user);

        if (user.length === 0) {
          console.log("User not found");
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password.toString(),
          user[0].password
        );

        console.log("Password valid:", isPasswordValid);

        if (!isPasswordValid) {
          console.log("Wrong password");
          return null;
        }

        console.log("Login success");

        return {
          id: user[0].id.toString(),
          email: user[0].email,
          name: user[0].fullName,
        };
      }
    }),
  ],
});
