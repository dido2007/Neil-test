import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export const PricingCard = () => {
    const name = "FREE";
    const description = "Best option for big sellers";
    const price = "99.99 DT";
  return (
    <section >
    <h3 className=" mt-9 text-3xl font-bold text-center">Pricing</h3>
    <br/>
    <div className="mx-8 space-y-8 lg:grid lg:grid-cols-2  sm:gap-6 xl:gap-10 lg:space-y-0">
      


      <Card>
        <div className="text-center">
          <CardHeader>
            <CardTitle>STARTER</CardTitle>
            <CardDescription>
            Best option for starters
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent>
          <div className="flex justify-center">
            <span className="mb-3 text-3xl font-extrabold text-primary-500">
              1.00 DT
            </span>
            <span className="text-2xl font-bold text-primary-500">/mo</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>Setup 1 shop</span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>
                Team size: <span className="font-semibold">1 developer</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>
                Premium support: <span className="font-semibold">6 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>
                Free updates: <span className="font-semibold">6 months</span>
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className='flex justify-center'>
            <Button variant='default' size='lg'>
                Get started
            </Button>

        </CardFooter>
      </Card>


      <Card>
        <div className="text-center">
          <CardHeader>
            <CardTitle>SCALE</CardTitle>
            <CardDescription>
              {" "}
              {description ?? "Best option for big sellers"}{" "}
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent>
          <div className="flex justify-center mb-3">
            <span className="text-3xl font-extrabold text-primary-500">
              350 DT
            </span>
            <span className="text-2xl font-bold text-primary-500">/mo</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>
                Team size: <span className="font-semibold">1 developer</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>
                Premium support: <span className="font-semibold">6 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
             < Check className="w-5 h-5 text-green-500" />
              <span>
                Free updates: <span className="font-semibold">6 months</span>
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className='flex justify-center'>
            <Button variant='default' size='lg'>
                Get started
            </Button>

        </CardFooter>
        
      </Card>
      
    </div>
    <br/>

    
    </section>
  );
};
