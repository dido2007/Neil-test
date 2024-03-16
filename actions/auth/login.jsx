"use server";
import prisma from "@/lib/prisma";


export const loginCreditentialsAction = async (email, password) => {
    const user = await prisma.user.findUnique({
        where: {
        email,
        },
    });
    
    if (!user) {
        return {"success": false, "f": "User not found"}
    }
     
    return {"success":true};
}