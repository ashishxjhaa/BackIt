'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "./ui/Theme-toggle";


function Back() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center px-8 pt-8">
      <div className='w-fit'>
        <div 
          className='flex rounded-3xl text-black dark:text-white bg-neutral-200 hover:bg-neutral-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 px-3 pt-1 pb-1.5' 
          onClick={() => router.back()}
        >
          <ArrowLeft />
          <div className="px-1.5 font-normal">Back</div>
        </div>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Back