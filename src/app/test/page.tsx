"use client"

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";


const Page = () => {
    const tasks=useQuery(api.tasks.get);
    console.log(tasks)
  return <div>Test Page</div>;
};

export default Page;
