'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


function Back() {
    const router = useRouter();

  return (
    <div className='w-fit'>
        <div 
            className='flex rounded-3xl text-black dark:text-white bg-neutral-200 hover:bg-neutral-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 ml-8 mt-8 px-3 pt-1 pb-1.5' 
            onClick={() => router.back()}
        >
            <ArrowLeft />
            <div className="px-1.5 font-normal">Back</div>
        </div>
    </div>
  )
}

export default Back