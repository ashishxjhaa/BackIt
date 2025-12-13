'use client'

import Image from 'next/image'
import { CommandDialogDemo } from './Command'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'


const ListingNavbar = () => {
  const [openProfile, setOpenProfile] = useState(false)

  const router = useRouter()

  const handleLogout = async () => {
    await axios.get('/api/logout')
    router.push('/')
    toast.success('Logged out')
  };

  return (
    <div className="fixed w-full z-50 p-4 bg-[#F6F6EF]/70 dark:bg-neutral-800/40 backdrop-blur-md border-b border-gray-600">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Image src='/BackIt.svg' alt="project-funding" width={45} height={45} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />

        <div className="relative">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className=" placeholder-black dark:placeholder-white focus:outline-none w-fit px-3 py-1.5 pr-18 border border-gray-600 rounded-md text-black dark:text-white text-sm tracking-wide"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <CommandDialogDemo />
          </div>
        </div>

        <div className="relative">
          <div onClick={() => setOpenProfile(true)} className="group flex items-center gap-2 sm:gap-4 max-w-full sm:max-w-none overflow-hidden hover:bg-[#FEB57F] cursor-pointer rounded-4xl px-2 py-1.5">
            <div className="w-10 h-10 bg-gray-600 flex items-center justify-center font-bold text-xl rounded-full shrink-0 hover:text-white">A</div>
            <div className="hidden md:block text-white font-medium group-hover:text-black">
              Ashish Jha
              <div className="text-slate-300 font-normal text-sm group-hover:text-black tracking-wide truncate">ashishxyzjha@gmail.com</div>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down group-hover:text-black"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          {openProfile && (
            <div className="absolute top-full right-0 mt-2 w-80 max-h-[80vh] max-w-[90vw] overflow-auto z-50">
              {/* First Part */}
              <div className="bg-[#D69B6F] flex flex-col gap-3 p-4 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="relative flex shrink-0 overflow-hidden rounded-full size-12 ring-1 ring-black/10">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-600 text-white text-2xl font-bold">
                      A
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-medium text-base truncate text-black tracking-wide">Ashish Jha</p>
                    </div>
                    <p className="text-xs text-black/80 truncate tracking-wide">ashishxyzjha@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-fit px-3 py-[0.95] rounded-md bg-[#4E3834]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                  <div className="text-white tracking-wider">verified</div>
                </div>
              </div>

              {/* Second Part */}
              <div className="bg-[#3A2F35] p-2 space-y-1 w-full rounded-b-lg border border-t-0 border-gray-600">
                <div onClick={() => router.push("/profile")} className="flex items-center text-slate-200 gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-[#FEB57F] hover:text-black text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                  <span className="tracking-wide">Profile</span>
                </div>
                
                <div onClick={() => router.push("/saved")} className="flex items-center text-slate-200 gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-[#FEB57F] hover:text-black text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus-icon lucide-bookmark-plus"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/><line x1="12" x2="12" y1="7" y2="13"/><line x1="15" x2="9" y1="10" y2="10"/></svg>
                  <span className="tracking-wide">Saved Project</span>
                </div>

                <div className="border-t border-gray-600">
                  <div onClick={handleLogout} className="flex items-center gap-2 cursor-pointer px-3 py-2 mt-1 rounded-md hover:bg-[#492B31] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out text-slate-200"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                    <span className="text-[#E75C60] tracking-wide">Log out</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingNavbar
