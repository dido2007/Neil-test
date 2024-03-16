import React from "react";
import FeatureCard from "@/components/cards/FeatureCard";
import { Separator } from "@/components/ui/separator";
import { Video } from "@/components/ui/video";
import { Suspense } from "react";

function FeatureSection() {
  const fetaures = [
    {
      iconType: "card",
      title: "Customizable card",
      description:
        "Custom your own card for your exact incomes and expenses needs.",
    },
    {
      iconType: "coin",
      title: "No payment fee",
      description:
        "Transfer your payment all over the world with no payment fee.",
    },
    {
      iconType: "wallet",
      title: "All in one place",
      description:
        "The right place to keep your credit and debit cards, boarding passes & more.  ",
    },
  ];
  return (
    <>
      <div className="mt-10 flex justify-center flex-col md:flex-row">
        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
      </div>
      <br />
      <Separator
        color="#ffffff33"
        className="h-2 border-b border-b-[#ffffff33]"
      />
    </>
  );
}

export default FeatureSection;
