"use client";
import { useState } from "react";
import { joinWaitlist } from "@/actions/waitlist/waitlist.actions";
import { toast } from "sonner";

export const WaitlistData = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Fonction pour vérifier si l'email est valide
  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async () => {
    if (!email.trim() || !name.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!isEmailValid(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await joinWaitlist({ email, name });
      toast.success("You have been added to the waitlist.");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-center gap-5">
        <input
          type="text"
          placeholder="Your Email"
          className="text-center rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 "
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Your Name"
          className="text-center rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 h-10 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <button
        className="rounded-lg bg-blue-800 text-white h-10 w-full relative z-10 mt-4"
        onClick={handleSubmit}
      >
        Join Waitlist
      </button>
    </>
  );
};
