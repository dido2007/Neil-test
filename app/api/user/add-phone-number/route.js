import prisma from "@/lib/prisma";
import { addPhoneNumber, getAuthSession } from "@/lib/auth";


export async function POST(request) {
  const { phoneNumber } = await request.json();
  const session = await getAuthSession();

  if (!session) {
    return Response.json("Unauthorized no session");
  }

  const res = await addPhoneNumber(phoneNumber);

if (res.ok) {
    return Response.json({
      ok: true,
      destiation: "/success",
    });
}

  if (!res) {
    return Response.json("Unauthorized");
  }
}
