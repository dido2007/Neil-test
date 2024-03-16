import { getCustomer } from "@/actions/customer/customer.actions";
import { LogoutButton } from "./LogoutButton";
import { getAuthSession, isPremiumUser, userPhoneNumber } from "@/lib/auth";

export const User = async () => {
  const session = await getAuthSession();
  console.log(session);
  return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">      <div className="card w-96 bg-white shadow-xl">
        <div className="flex justify-start">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={session.user.image ?? ""} />
            </div>
          </div>
          <div>
            <p> {session.user.status ?? ""}</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{session.user.name ?? ""}</h2>
          <p> {session.user.email} </p>
          <span className="text-sm text-sky-500"> {session.user.id} </span>
          <div className="card-actions justify-end">
            <LogoutButton />
          </div>
        </div>
      </div>
      </div>
  );
};
