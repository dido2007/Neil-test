import { PhoneNumberForm } from "@/components/auth/phoneNumberForm";
import { userPhoneNumber } from "@/lib/auth";
import Link from "next/link";


export default async function UpdatePhoneNumberComponent() {
  const phoneNumber = await userPhoneNumber();

  if (!phoneNumber) {
    return (
     < PhoneNumberForm />
    );
  }
    return (
      <>
      <h1 className="text-xl text-blue-700">Phone number already existing</h1>
      <Link href="/">
      <boutton className='btn btn-secondary'> Go to home </boutton>
      </Link>
      </>
    );
}
