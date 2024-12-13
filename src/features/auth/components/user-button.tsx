"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Loader, LogOut } from "lucide-react";
import { UserCurrentUser } from "../api/use-current-user";
export const UserButton = () => {
  const { data, isLoading } = UserCurrentUser();
  if (isLoading) {
    return <Loader className="size-4 animate-spin text-muted-foreground" />;
  }
  if (!data) {
    return null;
  }
  const { image, name, email } = data;
  const AvatarFallName = name ? name.charAt(0) : "C";
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-sky-500 text-white">{AvatarFallName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem onClick={() => {}}>
          <LogOut className="size-4 mr-2" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
