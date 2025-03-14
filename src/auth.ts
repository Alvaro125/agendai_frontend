import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(8) })
          .safeParse(credentials);
          
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          try {
            const res = await fetch("http://localhost:4000/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                senha: password,
                email,
              }),
            });

            if (!res.ok) {
              return null;
            }

            const user = await res.json();
            if (user.access_token) return user;
          } catch (error) {
            console.error('Authentication error:', error);
            return null;
          }
        }

        return null;
      },
    }),
  ],
});