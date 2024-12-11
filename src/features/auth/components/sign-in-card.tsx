import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "./types";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { TriangleAlert } from "lucide-react";
interface SignInCardProps {
    setState:(state:SignInFlow)=>void
}
export const SignInCard = ({setState}:SignInCardProps) => {
    const {signIn}=useAuthActions();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error,setError]=useState("");
    const onPasswordSignIn=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        signIn("password",{email,password,flow:"signIn"}).catch(()=>setError("Invalid Credentials"));
    };
    const handleProvider=(value:"google"|"github")=>{
        signIn(value);};
  return <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
            <CardTitle>
                
            Login To Continue
            </CardTitle>
        </CardHeader>
        <CardDescription>
            Use Your Email or another Service to continue
        </CardDescription>
        {!!error && <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive mb-6">
        <TriangleAlert className="size-4"/>
        <p>{error}</p>
        </div>}
        <CardContent className="space-y-5 px-0 pb-0">     
            <form onSubmit={onPasswordSignIn} className="space-y-2.5">
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
                <Button type="submit" className="w-full" size={"lg"}>
                    Continue
                </Button>
            </form>
            <Separator />
            <div className="flex flex-col gap-y-2.5">
                <Button  onClick={() => {handleProvider("google")}} variant={"outline"} size={"lg"} className="w-full 
                relative"
                >
                    
                    <FcGoogle className="size-5 absolute left-4 top-1/2 -translate-y-1/2" />    
                    Continue with Google
                </Button>
                <Button onClick={() => {handleProvider("github")}} variant={"outline"} size={"lg"} className="w-full relative">
                    
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
