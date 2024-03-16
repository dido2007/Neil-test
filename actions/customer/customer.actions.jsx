"use server";
// Initalisation of the customer actions

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export const getCustomer = async () => {
  const session = await auth();

  if (!session) {
    throw new Error("You need to be logged in ");
  }

  if (session?.user?.status !== "PREMIUM") {
    throw new Error("You need to be a premium user to access this page");
  }

  const userWithOrdersAndBoutiques = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      orders: true, // Vous pourriez vouloir limiter les champs récupérés
      boutiques: true, // Idem
    },
  });

  if (userWithOrdersAndBoutiques) {
    session.user.ordersCount = userWithOrdersAndBoutiques.orders.length;
    session.user.boutiques = userWithOrdersAndBoutiques.boutiques.map(
      (boutique) => boutique.name
    );
  }



  return session;
};


export const createMenu = async (menu) => {
  const session = await getCustomer();
};
