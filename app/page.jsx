import { LoginButton } from "@/components/auth/LoginButton";
import { User } from "@/components/auth/User";
import { PricingCard } from "@/components/cards/PricingCard";
import FeatureSection from "@/components/layout/FeatureSection/FeatureSection";
import HeroSection from "@/components/layout/HeroSection/Herosection";
import LogoGroupSection from "@/components/layout/LogoGroup/LogoGroup";
import { CardStackDemo } from "@/components/layout/Testimonials/TestimonialsComp";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  console.log(session);

  if (session) {
    return (
      <div className="">
        <User />
      </div>
    );
  }
  return (
    <div className="md:mx-12 ">
      {" "}
      <HeroSection />
      <LogoGroupSection />
      <FeatureSection />
      <PricingCard />
      <CardStackDemo />
    </div>
  );
}
