import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "./types";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
interface SignUpCardProps {
    setState(state:SignInFlow):void
}

export const SignUpCard = ({setState}:SignUpCardProps) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name,setName]=useState("");
    const {signIn}=useAuthActions();

    const handleProvider=(value:"google"|"github")=>{
        signIn(value);};
        const onPasswordSignUp=(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            if(password!=confirmPassword){
                setError("Passwords Don't Match")
                return
            }
             signIn("password",{name,email,password,flow:"signUp"}).catch(()=>setError("Invalid Credentials"));
        }
  return <Card className="w-full h-full p-8">
        <CardHeader className="px-0 pt-0">
            <CardTitle>
                
            Sign Up To Continue
            </CardTitle>
        </CardHeader>
        <CardDescription>
            Use Your Email or another Service to continue
        </CardDescription>
        <CardContent className="space-y-5 px-0 pb-0">     
            <form className="space-y-2.5" onSubmit={onPasswordSignUp}>
                <Input disabled={false}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                type="name"
                placeholder="Name"
                required
                />
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
                <Input disabled={false}
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                type="password"
                placeholder="Confirm Password"
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
            <p className="text-sm text-muted-foreground mt-2" onClick={()=>setState("signIn")}>
              Already have an account?{" "} <span className="text-sky-700 hover:underline  cursor-pointer">Sign In</span>
            </p>

        </CardContent>
    </Card>;
  };
  