"use client";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";
export const Modals = () => {
    const [monted,setMounted]=useState(false)
    useEffect(()=>setMounted(true),[])
    if(!monted) return null
  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
