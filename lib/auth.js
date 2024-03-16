import { auth } from "@/auth";
import prisma from '@/lib/prisma'

export const getAuthSession = async  () => {
    const session = await auth();
    return session;
}

export const isUserAuthenticated = async () => {
    const session = await getAuthSession();
    if (!session) {
        throw new Error("User is not authenticated");
    }
    return session ;
}

export const getUserId = () => {
    const session = getAuthSession();
    return session?.user.id;
}

export const userPhoneNumber = async () => {
    const session = await getAuthSession(); 
    if (!session) return null;
    return session?.user?.phoneNumber; 
};

export const addPhoneNumber = async (phoneNumber) => {
    const session = await getAuthSession();
    if (session) {
        const userId = session.user.id;
        const user = await prisma.user.update({
            where: { id: userId },
            data: { phoneNumber: phoneNumber },
        });
        return {"user": user, "ok": true};
    } else {
        return null;
    }
}

export const isPremiumUser = async () => {
    const session = await getAuthSession();
    if (!session) return null;
    return session?.user?.status === "PREMIUM";
}

