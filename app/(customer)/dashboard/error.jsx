"use client"; // Error components must be Client Components

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import Link from "next/link";

export default function Error({ error, reset }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("sasa", error);
    setIsDialogOpen(true);
  }, [error]);


  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      {isDialogOpen && (
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Oops ! </AlertDialogTitle>
              <AlertDialogDescription>
                La page est sois inexistante ou vous n'avez pas les droits pour
                y accéder.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Link href="/">
                <AlertDialogCancel>Go Home</AlertDialogCancel>
              </Link>
              <AlertDialogAction>
                <LoginButton />
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
