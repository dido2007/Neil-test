import MainLayoutCard from "@/components/cards/MainLayoutCard";
import React from "react";

function Header() {
  return (
    <div className="text-5xl">
      H&H SaaS
      <br />

       Electronique Mall
    </div>
  );
}

function HeroSection() {
  return (
    < MainLayoutCard
      // title={Header}
      // description="Mall electronique commandez et recevez chez vous de chez vos magasins preferez."
      // rightSideImageUrl="/images/wallet.gif"
    />
  );
}

export default HeroSection;