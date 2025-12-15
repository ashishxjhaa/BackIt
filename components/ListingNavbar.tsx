'use client'

import Image from 'next/image'
import { CommandDialogDemo } from './Command'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import { Bookmark, ChevronDown, LogOutIcon, User } from 'lucide-react'
import { AvatarDemo } from './Avatar'

interface User {
  id: string
  fullName: string
  email: string
}

const ListingNavbar = () => {
  const [openProfile, setOpenProfile] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setOpenProfile(false)
      }
    }

    if (openProfile) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openProfile])

  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/me");
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await axios.get('/api/logout')
    router.push('/')
    toast.success('Logged out')
  };

  return (
    <div className="fixed w-full z-50 p-4 bg-[#F6F6EF]/70 dark:bg-neutral-800/40 backdrop-blur-md border-b border-gray-600">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Image src='/BackIt.svg' alt="project-funding" width={45} height={45} className="w-8 h-8 object-contain" />

        <div className="relative">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className=" placeholder-black dark:placeholder-white focus:outline-none w-fit px-3 py-1.5 pr-18 border border-gray-400 dark:border-gray-600 rounded-md text-black dark:text-white text-sm tracking-wide"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <CommandDialogDemo />
          </div>
        </div>

        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => setOpenProfile(true)} 
            className="flex items-center gap-0.5 text-black dark:text-white"
          >
            <AvatarDemo />
            <ChevronDown size={20} />
          </div>

          {openProfile && (
            <div className="absolute top-full right-0 mt-2 w-fit z-50">
              {/* First Part */}
              <div className="bg-[#D69B6F] flex flex-col gap-3 p-4 rounded-t-lg border border-b-0 border-black dark:border-white/35">
                <div className="flex items-center gap-3">
                  <div className="relative rounded-full size-12">
                    <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-gray-600 text-white text-2xl font-serif">
                      {user?.fullName?.[0]}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-base truncate text-black tracking-wide">{user?.fullName?.split(' ')[0]}</p>
                    </div>
                    <p className="text-xs text-black/80 truncate tracking-wide">{user?.email}</p>
                  </div>
                </div>
              </div>

              {/* Second Part */}
              <div className="bg-sky-100 dark:bg-neutral-600 text-black dark:text-white p-2 space-y-1 w-full rounded-b-lg border border-t-0 border-black dark:border-white/35">
                <div onClick={() => router.push("/profile")} className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-accent dark:hover:bg-accent/50 text-sm">
                  <User size={17} />
                  <span className="tracking-wide">Profile</span>
                </div>
                
                <div onClick={() => router.push("/saved")} className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-accent dark:hover:bg-accent/50 text-sm">
                  <Bookmark size={16} />
                  <span className="tracking-wide whitespace-nowrap">Saved Project</span>
                </div>

                <div className="border-t border-black dark:border-white/50">
                  <div onClick={handleLogout} className="flex items-center gap-2 cursor-pointer px-3 py-2 mt-1 rounded-md hover:bg-red-100 hover:dark:bg-red-700/10 text-sm">
                    <LogOutIcon size={16} />
                    <span className="text-red-400 tracking-wide whitespace-nowrap">Log out</span>
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
