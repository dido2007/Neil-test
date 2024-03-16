import { getProviders, signIn } from "next-auth/react";
import { getAuthSession } from "@/lib/auth";
import { ProviderLogin } from "@/components/auth/ProviderLogin";
import { LoginForm } from "@/components/auth/LoginForm";

export default async function SignIn() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <LoginForm />
      </div>
    </>
  );
}
{/* <ProviderLogin providers={providers} /> */}

