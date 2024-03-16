'use client'
import {  signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

export const ProviderLogin = ({ providers }) => { 
    return (
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button className="btn" onClick={async () => await signIn(provider.id)}>
              Sign in with {provider.name}
              <Icons.gitHub className="w-5 h-5" />
            </button>
          </div>
        ))}
      </>
    );
  };
  