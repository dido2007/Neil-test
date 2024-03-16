"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function CardStackDemo() {
  return (
    <>
      <Separator
        color="#ffffff33"
        className="h-2 border-b border-b-[#ffffff33]"
      />
      <br/>

        <h3 className=" text-3xl font-bold text-center">Testimonials</h3>
        
        <div className="flex justify-stretch">
        <div className="h-[30rem] flex items-center justify-center w-full">
          <CardStack items={CARDS} />
        </div>
        
        </div>
    </>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 3,
    name: "Sophie Turner",
    designation: "Digital Marketing Lead",
    content: (
      <p>
        ChatFleet a totalement révolutionné notre gestion de service client. <Highlight>Une communication fluide et rapide</Highlight> a toujours été un défi, mais maintenant, c’est un jeu d'enfant. Incroyablement impressionnée !
      </p>
    ),
  },
  {
    id: 4,
    name: "Arjun Patel",
    designation: "E-commerce Specialist",
    content: (
      <p>
        L'automatisation des messages de ChatFleet nous a aidés à <Highlight>tripler notre taux de réponse</Highlight>. Les tags intelligents et l'organisation des messages sont tout simplement géniaux. Un must pour tous les e-commerçants !
      </p>
    ),
  },
  {
    id: 5,
    name: "Mia Wong",
    designation: "Customer Success Manager",
    content: (
      <p>
        Grâce à ChatFleet, nous avons dit adieu aux heures perdues à trier manuellement les messages. <Highlight>Le tri et les réponses automatiques</Highlight> ont considérablement amélioré notre efficacité. Nos clients n'ont jamais été aussi satisfaits !
      </p>
    ),
  },
];

