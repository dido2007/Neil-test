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
      <div className="flex justify-center items-center gap-4">
        <h3 className=" text-3xl font-bold text-center">Testimonials   </h3>
        <img src='/images/google_icon.png' alt='google icon' className='h-16 w-16' />
      </div>
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
        ChatFleet has completely revolutionized our customer service management. <Highlight>Seamless and swift communication</Highlight> has always been a challenge, but now it's a breeze. Incredibly impressed!
      </p>
    ),
  },
  {
    id: 4,
    name: "Arjun Patel",
    designation: "E-commerce Specialist",
    content: (
      <p>
        ChatFleet's message automation has helped us <Highlight>triple our response rate</Highlight>. The smart tagging and message organization are simply brilliant. A must-have for all e-commerce players!
      </p>
    ),
  },
  {
    id: 5,
    name: "Mia Wong",
    designation: "Customer Success Manager",
    content: (
      <p>
        Thanks to ChatFleet, we've said goodbye to hours wasted manually sorting through messages. <Highlight>Sorting and auto-responses</Highlight> have significantly improved our efficiency. Our customers have never been happier!
      </p>
    ),
  },
];


