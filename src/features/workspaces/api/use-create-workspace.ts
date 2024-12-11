import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback, useMemo, useState } from "react";
import {  Id } from "../../../../convex/_generated/dataModel";
type RequestType={name:string};
type ResponseType=Id<"workspaces"> | null

type Options={
    onSuccess?:(data:ResponseType)=>void,
    onError?:(error:Error)=>void,
    onSettled?:()=>void,
    throwError?:boolean
}

export const useCreateWorkspace=()=>{
    const [data,setData]=useState<ResponseType|undefined>(null)
    const [error,setError]=useState<Error|undefined>(undefined)
    const [state,setState]=useState<"success"|"error"|"settled"|"pending"|null>(null)
    const isPending=useMemo(()=>state==="pending",[state])
    const isSuccess=useMemo(()=>state==="success",[state])
    const isError=useMemo(()=>state==="error",[state])
    const isSettled=useMemo(()=>state==="settled",[state])
    // const [isPending,setIsPending]=useState(false)
    // const [isSuccess,setIsSuccess]=useState(false)
    // const [isError,setIsError]=useState(false)
    // const [isSettled,setIsSettled]=useState(false)

    const mutation=useMutation(api.workspaces.create);
    const mutate=useCallback(async(values:RequestType,options?:Options)=>{
        try {
            setData(null)
            setError(undefined)
            setState("pending")
            
            const response=await mutation(values)
            options?.onSuccess?.(response as ResponseType) 
            return response
        } catch (error){
            options?.onError?.(error as Error) 
            if(options?.throwError) {
                throw error
            }
        }finally{
            setState("settled")

            options?.onSettled?.()
        }
    },[mutation])
    return {
        mutate,
        data,
        error,
        isPending,
        isSuccess,
        isError,
        isSettled
        
    }

    
}