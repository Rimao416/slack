"use client";
import { UseGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorksPaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const {data}=UseGetWorkspace({id:workspaceId})
  return (
    <div>
      ID:{JSON.stringify(data)}
    </div>
  );
};
export default WorksPaceIdPage;
