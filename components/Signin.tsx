'use client'

import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import Component from "./comp-23";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner"


export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Enter full details");
      return;
    }

    setLoading(true);
    try {
      await toast.promise(
        axios.post("/api/signin", formData, { withCredentials: true, }),
        {
          loading: "Signing in...",
          success: () => {
            router.push('/listings');
            return "Signin successful  🎉";
          },
          error: "Signin failed!",
        }
      );
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="bg-[#F6F6EF] dark:bg-neutral-800 min-h-screen w-full overflow-x-hidden">

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-8 sm:px-0 w-full max-w-md pt-10 sm:pt-12 gap-5 mb-10">
          <Image src="/home.png" alt="BackIt" width={56} height={56} />

          <div className="border border-neutral-300 dark:border-neutral-500 rounded-lg text-black dark:text-white w-full">
            <div className="bg-neutral-300/25 dark:bg-neutral-700 pl-7 py-6 border-b border-neutral-300 dark:border-neutral-500 rounded-lg">
              <h1 className="text-2xl font-serif tracking-wide opacity-85 dark:opacity-95">Login</h1>
              <p className="text-sm font-light opacity-70 dark:opacity-85 tracking-wide">
                Don't have an account?
                <Link href='/signup' className="pl-1 underline font-medium opacity-90 dark:opacity-95">Sign up</Link>
              </p>
            </div>

            <form className="p-7 space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">Email <Input type='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@email.com" /></div>
              <div className="flex flex-col gap-1.5">Password <Component value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} /></div>
                            
              <Button type='submit' disabled={loading} className="w-full disabled:opacity-65">{loading ? <Spinner className="w-4 h-4" /> : 'LOGIN'}</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

  