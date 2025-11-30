import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/Theme-toggle";
import { Input } from "@/components/ui/input"
import { FaGithub } from "react-icons/fa";
import { IconArrowUpRight } from "@tabler/icons-react";
import { MdCopyright } from "react-icons/md";


export default function Footer() {

    return (
        <footer className="pt-10 sm:pt-15">
            <div className="flex flex-col xl:flex-row lg:px-40 w-full justify-between items-center xl:items-start pb-15 lg:pb-10">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto xl:mx-0">
                    <h1 className="font-normal text-2xl md:text-3xl tracking-wide dark:text-white text-black opacity-95">Stay connected</h1>
                    <p className="font-light dark:text-white text-black opacity-75 pt-2 pb-8 max-w-sm">Subscribe to our newsletter for the latest updates, resources, and exclusive offers.</p>
                </div>
                <div className="flex items-center gap-3 mx-auto xl:mx-0">
                    <Input type="email" placeholder="Your email address" className="h-11 px-5 sm:px-10 md:h-12 w-fit md:w-xs lg:w-sm" />
                    <Button variant='default' size='lg'>Subscribe</Button>
                </div>
            </div>

            <div className="py-10 border-y border-white/10 items-start flex px-20 justify-between z-50 max-md:p-6 max-md:gap-5 max-md:flex-col">
                <div className="flex gap-11 sm:gap-25 md:gap-40 lg:gap-60 mx-auto w-fit">
                    <div>
                        <p className="text-black dark:text-white opacity-95 font-normal text-lg md:text-xl tracking-wide pb-5">Page</p>
                        <div className="flex flex-col text-black dark:text-white gap-4">
                            <Link
                                href={"/"}
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Home
                            </Link>
                            <Link
                                href={"/signup"}
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Register
                            </Link>
                            <Link
                                href={"/signin"}
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Dashboard
                            </Link>
                        </div>
                    </div>
                    
                    <div>
                        <p className="text-black dark:text-white opacity-95 font-normal text-lg md:text-xl tracking-wide pb-5">Legal</p>
                        <div className="flex flex-col text-black dark:text-white gap-4">
                            <Link
                                href={"/privacypolicy"}
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href={"/terms&condition"}
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className="text-black dark:text-white opacity-95 font-normal text-lg md:text-xl tracking-wide pb-5">Connect</p>
                        <div className="flex flex-col text-black dark:text-white gap-4">
                            <Link
                                href={"https://github.com/ashishxjhaa"}
                                target="_blank"
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Github
                            </Link>
                            <Link
                                href={"https://x.com/ashishxjha"}
                                target="_blank"
                                className="text-sm md:text-md opacity-55 hover:opacity-100 transition-opacity"
                            >
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8 flex justify-between lg:max-w-4xl px-4 sm:px-10 mx-auto">
                <p className="dark:text-white text-black opacity-80 hidden sm:flex items-center gap-2">
                    <MdCopyright />
                    <span className="tracking-wide text-xs md:text-sm">{new Date().getFullYear()} BackIt Private Limited - All rights reserved.</span>
                </p>
                <Link 
                    href="https://github.com/ashishxjhaa/BackIt" 
                    target="_blank" 
                    className="opacity-65 flex items-center gap-2 mx-4 relative group transition-opacity hover:opacity-100"
                >
                    <span className="flex items-center font-semibold gap-2 dark:text-white text-black transition-transform duration-500 ease-in-out group-hover:-translate-x-2">
                        <FaGithub />
                        <div className="text-black dark:text-white tracking-wide whitespace-nowrap">Star me on GitHub</div>
                    </span>
                    <IconArrowUpRight size={48} strokeWidth={1.25} className="absolute h-[22px] -right-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-black dark:text-white" />
                </Link> 

                <ThemeToggle />
            </div>
        </footer>
    )
}
