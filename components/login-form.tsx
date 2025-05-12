"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [matric, setmatric] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ matric, password });

    // Create a new FormData object
    const formData = new FormData();
    formData.append("username", matric);
    formData.append("password", password);

    await axios
      .post(
        "https://fa0e-197-211-59-103.ngrok-free.app/auth/student-login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((d) => {
        console.log(d)
          
            alert(d.data.message)
          
        })
      .catch((ee) => {
        if(!ee.response.data.detail?.isPaid)
          {
            console.log(ee.response.data.detail)
            alert(ee.response.data.detail.message)
          }
        
        console.log('4' ,ee)});
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleLogin}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your matric number below to login to your portal
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="matric">Matric No</Label>
          <Input
            id="matric"
            type="text"
            placeholder="m@example.com"
            required
            value={matric}
            onChange={(e) => setmatric(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Have&apos;t paid for an Hostel?{" "}
        <a href="#" className="underline underline-offset-4">
          Secure an hostel
        </a>
      </div>
    </form>
  );
}
