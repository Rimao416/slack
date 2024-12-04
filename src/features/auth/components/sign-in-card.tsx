import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "./types";
import { useState } from "react";
interface SignInCardProps {
    setState:(state:SignInFlow)=>void
}
export const SignInCard = ({setState}:SignInCardProps) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  return <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
            <CardTitle>
                
            Login To Continue
            </CardTitle>
        </CardHeader>
        <CardDescription>
            Use Your Email or another Service to continue
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">     
            <form action="" className="space-y-2.5">
                <Input disabled={false}
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                placeholder="Email"
                required
                />
                <Input disabled={false}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                placeholder="Password"
                required
                />
                <Button type="submit" className="w-full" size={"lg"} disabled>
                    Continue
                </Button>
            </form>
            <Separator />
            <div className="flex flex-col gap-y-2.5">
                <Button disabled onClick={() => {}} variant={"outline"} size={"lg"} className="w-full relative">
                    
                    <FcGoogle className="size-5 absolute left-4 top-1/2 -translate-y-1/2" />    
                    Continue with Google
                </Button>
                <Button disabled onClick={() => {}} variant={"outline"} size={"lg"} className="w-full relative">
                    
                    <FaGithub className="size-5 absolute left-4 top-1/2 -translate-y-1/2" />    
                    Continue with Github
                </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2" onClick={()=>setState("signUp")}>
                Don&apos;t have an account?{" "} <span className="text-sky-700 hover:underline  cursor-pointer">Sign Up</span>
            </p>

        </CardContent>
    </Card>;
};
