import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { UserCog, Store } from "lucide-react";

import { Button } from "../../ui/button";
import { LogoutButton } from "@/components/auth/LogoutButton";
import Link from "next/link";

export const LoggedinDropdown = (props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger> {props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/dashboard/profile">
          <DropdownMenuItem>
            <Button variant="ghost">
              Profile <UserCog className="size-5 ml-9" />
            </Button>
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/boutiques">
          <DropdownMenuItem>
            <Button variant="ghost">Boutiques <Store className="size-5 ml-3" /></Button>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
