import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const UserCurrentUser=()=>{
    const data=useQuery(api.users.current);
    console.log(data)
    const isLoading=data===undefined
    return {data,isLoading}
}; 