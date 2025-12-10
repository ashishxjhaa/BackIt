import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import Component from "./comp-51";
import { Button } from "./ui/button";


export default function SignUp() {
    return (
        <div className="bg-[#F6F6EF] dark:bg-neutral-800 min-h-screen w-full overflow-x-hidden">

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center px-8 sm:px-0 w-full max-w-md pt-10 sm:pt-12 gap-5 mb-10">
                    <Image src="/home.png" alt="BackIt" width={56} height={56} />

                    <div className="border border-neutral-300 dark:border-neutral-500 rounded-lg text-black dark:text-white w-full">
                        <div className="bg-neutral-300/25 dark:bg-neutral-700 pl-7 py-6 border-b border-neutral-300 dark:border-neutral-500 rounded-lg">
                            <h1 className="text-2xl font-serif tracking-wide opacity-85 dark:opacity-95">Create account</h1>
                            <p className="text-sm font-light opacity-70 dark:opacity-85 tracking-wide">
                                Already have an account?
                                <Link href='/signin' className="pl-1 underline font-medium opacity-90 dark:opacity-95">Login.</Link>
                            </p>
                        </div>

                        <form className="p-7 space-y-4">
                            <div className="flex flex-col gap-1.5">Full name <Input type='text' /></div>
                            <div className="flex flex-col gap-1.5">Email <Input type='email' /></div>
                            <div className="flex flex-col gap-1.5">Password <Component/></div>
                            
                            <Button type='submit' className="w-full">SIGN UP</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
