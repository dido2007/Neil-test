"use server";

import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import axios from "axios";



export const upgradePlan = async (plan) => {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.redirect("/auth/signin");
  }

  const ENTREPRISE_PLAN = {
    amount: 120000,
    description: "Plan entreprise",
    first_name: session.user.name,
    last_name: "USER",
    phoneNumber: session.user.phoneNumber,
    email: session.user.email,
    successUrl: "http://localhost:3000/success",
    failUrl: "http://localhost:3000/fail",
  };

  if (plan === "ENTREPRISE") {
    const response = await axios.post("http://localhost:3001/api/payment/start-payment", ENTREPRISE_PLAN);

      if (response.data.success) {
        return NextResponse.redirect(response.data.data.payUrl);
      }
  } else {
    return NextResponse.redirect("/auth/signin");
  }
};
