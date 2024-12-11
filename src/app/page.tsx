"use client";

import { UserButton } from "@/features/auth/components/user-button";
import { UseGetWorkspaces } from "../features/workspaces/api/use-get-workspaces";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-worskpace-modal";

// import { useAuthActions } from "@convex-dev/auth/react";

// import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
  // return <AuthScreen/>;
  const { data, isLoading } = UseGetWorkspaces();
  const workspaceId = useMemo(() => data?.[0]?._id, [data]);
  const [open,setOpen]=useCreateWorkspaceModal()
  useEffect(() => {
    if(isLoading) return
    if (workspaceId) {
      console.log("Redirect to workspace");
    }else if(!open){
      setOpen(true)
    } else {
      console.log("Open Creation Modal");
    }
  }, [workspaceId, isLoading,open,setOpen]);
  return (
    <div>
      Logged In
      <UserButton />
    </div>
  );
}
