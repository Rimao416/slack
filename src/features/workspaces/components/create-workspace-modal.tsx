"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useCreateWorkspaceModal } from "../store/use-create-worskpace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useState } from "react";
import {toast} from "sonner"

export const CreateWorkspaceModal = () => {
  const router = useRouter();
  const[name,setName]=useState("")
  const [open, setOpen] = useCreateWorkspaceModal();
  const handleClose = () => setOpen(false);
  const { mutate,isPending } = useCreateWorkspace(); // Assume mutate is a function returned by the hook

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({name},{
      onSuccess(id) {
        toast.success("Workspace created successfully")
        router.push(`/workspaces/${id}`);
      },
      onError() {
        handleClose();
      },
      onSettled: () => {},

    })
    // try {
    //   const data = mutate(
    //     {
    //       name: "WorksPace 1",
    //     },
    //     {
    //       onSuccess(data) {
    //         router.push(`/workspaces/${data}`);
    //       },
    //       onError() {
    //         handleClose();
    //       },
    //       onSettled: () => {},
    //     }
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription>
            Create a workspace to start collaborating with your team
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text"
          required
          autoFocus
          placeholder="Workspace Name" />
          <Button>Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
