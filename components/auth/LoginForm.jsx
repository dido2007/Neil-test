"use client";
import { loginCreditentialsAction } from "@/actions/auth/login";
import { useState } from "react";
import { Icons } from "../icons";
import { signIn } from "next-auth/react";
import { ProviderLogin } from "./ProviderLogin";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginCreditentialsAction(email, password);
  };
  return (
    <div className="max-w-md mx-auto p-4 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Connexion
        </button>
      </form>
      <div className="mt-6 space-y-4">
        <div>
          <Button
            onClick={async () =>
              await signIn("github", {
                callbackUrl: callbackUrl || "http://localhost:3000",
              })
            }
            className=" relative  flex space-x-2 items-center justify-start px-4 w-full "
            type="submit"
            variant='default'
          >
            <Icons.gitHub className="w-5 h-5" />
            <span className=" text-sm">
              Github
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
