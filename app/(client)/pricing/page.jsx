"use client";
import { upgradePlan } from "@/actions/upgrade";
import { PricingCard } from "@/components/cards/PricingCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PricingPage = () => {
  const handleSubmit = async (plan) => {
    upgradePlan(plan);
  };
  return (
   
    <PricingCard />

  );
};

export default PricingPage;