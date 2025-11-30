'use client'

import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/button";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import Bentogrid from "./Bentogrid";
import Stats from "./Stats";
import Faq from "./Faq";


export default function HeroSection() {

    return (
        <>
        <div className="flex flex-col items-center justify-center pt-25 sm:pt-35">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-neutral-800 hover:dark:bg-neutral-900 hover:bg-gray-50 bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
            >
                <BackitLogo />
                <span>Ideas deserve funding</span>
            </HoverBorderGradient>
            <div className="text-black dark:text-white text-center max-w-md md:max-w-2xl flex flex-col gap-5">
                <h1 className="font-normal sm:font-medium -tracking-normal text-lg sm:text-4xl md:text-6xl pt-10 leading-tight opacity-85 dark:opacity-100">Every project funded, one click away.</h1>
                <p className="font-light leading-relaxed px-12 sm:px-0 text-xs sm:text-base">
                    From concept to cash in minutes. Launch your ideas, connect with backers. <br className="hidden md:block" /> The simplest way to fund what matters.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-10 sm:pt-15">
                <Button variant='default' asChild>
                    <Link href="/product" className="cursor-default px-8!">List your project <IoArrowForward /> </Link>
                </Button>
                <div className="flex flex-col gap-2 text-black dark:text-white">
                    <AnimatedTooltipPreview />
                    <div>Trusted by 100+ devs</div>
                </div>
            </div>
            <div className='pt-12 sm:pt-18 w-full'>
                <Image src="/background.svg" alt="hero-image" className="h-5 sm:h-7 md:h-9 object-cover w-full" width={10} height={10}/>
                <Image src="/background.svg" alt="hero-image" className="rotate-180 h-5 sm:h-7 md:h-9 object-cover w-full" width={10} height={10}/>
            </div>
        </div>
        <Bentogrid />
        <Stats />
        <Faq />
        <div className='pt-12 sm:pt-18 w-full'>
            <Image src="/background.svg" alt="hero-image" className="h-5 sm:h-7 md:h-9 object-cover w-full" width={10} height={10}/>
            <Image src="/background.svg" alt="hero-image" className="rotate-180 h-5 sm:h-7 md:h-9 object-cover w-full" width={10} height={10}/>
        </div>
        </>
    )
}



const BackitLogo = () => {
    return (
        <Image 
            src="/home.png"
            alt="Back It Logo"
            width={100}
            height={100}
            className="object-cover h-4 w-4"
        />
    );
};