"use server";
import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const joinWaitlist = async ({ email, name }) => {
  const session = await getAuthSession();
  let userData;

  if (session) {
    userData = {
      email: email,
      name: session.user.name || 'Utilisateur Authentifié', // Ou tout autre marqueur par défaut
    };
  } else {
    userData = {
      name: name,
      email: email,
    };
  }

  const user = await prisma.waitList.create({
    data: userData,
  });

  return { success: true, message: "You have been added to the waitlist."};
};
