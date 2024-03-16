import { LoggedinDropdown } from "@/components/layout/Navbar/LoggedinDropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAuthSession } from "@/lib/auth";
import { LoginBtnAction } from "./LoginBtnAction";

export const LoginNav = async () => {
  const session = await getAuthSession();

  if (session) {
    return (
      <LoggedinDropdown>
        <Avatar className='size-9' >
          <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
          {session.user.image ? (
            <AvatarImage src={session.user.image} alt={session.user.name} />
          ) : null}
        </Avatar>
      </LoggedinDropdown>
    );
  }
    return (
      <>
          <LoginBtnAction />
      </>
    )
};
