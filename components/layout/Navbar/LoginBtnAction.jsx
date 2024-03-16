'use client'

import { signIn } from 'next-auth/react'
import { Button } from "@/components/ui/button";

export const LoginBtnAction = () => {
    return (
        <>
            <Button
                variant="default"
                onClick={ async () => {
                    await signIn('github');
                }
                }
            >
                Login
            </Button>
        </>
      )
}
