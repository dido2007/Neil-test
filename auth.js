// auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Ajustez le chemin d'accès en fonction de votre structure
import authConfig from "@/auth.config";

const githubId = "2953f957eefea8a3a1e3";
const githubSecret = "b36346ab03a5259582647e4b11805f9aeac03967";


if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID or GITHUB_SECRET is not set");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  
} = NextAuth({
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user && user) {
        session.user.id = user.id;
        session.user.phoneNumber = user.phoneNumber;
        session.user.status = user.status;
      }
      return session;
    },
    

  },
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  // session: { strategy: "jwt" },
  ...authConfig,
});
