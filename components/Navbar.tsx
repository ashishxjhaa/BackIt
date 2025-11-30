import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { Megaphone } from 'lucide-react';
import { LuCircleFadingPlus } from "react-icons/lu";
import { Button } from "./ui/button";


export default function Navbar() {

    return (
        <div className="w-full h-fit fixed top-0 right-0 border-b dark:border-gray-600 bg-white/10 dark:bg-black/10 backdrop-blur-sm dark:backdrop-blur-md z-50">
            <div className="flex justify-between items-center py-2.5 sm:py-4 px-5 sm:px-10">
                <Link href='/' className="flex items-center gap-2">
                    <Image 
                        src="/BackIt.png"
                        alt="Back It Logo"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                    <div className="text-black opacity-90 dark:text-white text-xl font-medium tracking-wide cursor-default">
                        Back.It
                    </div>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-black dark:text-white font-light cursor-default">
                    <Link href='/' className="flex items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer">
                        <GoHome size={20} />
                        <span>Home</span>
                    </Link>
                    <Link href='/pricing' className="flex items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer">
                        <Megaphone size={19} className="rotate-y-180" />
                        <span>Pricing</span>
                    </Link>
                    <Link href='/myproduct' className="flex items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer">
                        <LuCircleFadingPlus size={19} />
                        <span>Add your product</span>
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant='outline' asChild>
                        <Link href="/signin" className="font-light! cursor-default">Log in</Link>
                    </Button>
                    <Button variant='default' asChild>
                        <Link href="/signup" className="cursor-default">Register</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}