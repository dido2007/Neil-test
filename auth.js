// auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Ajustez le chemin d'accès en fonction de votre structure
import authConfig from "@/auth.config";

const githubId = "bb655092a16ce5d1c2a4";
const githubSecret = "9e80a56d52881bf643565688c9818aba0dc63351";


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
