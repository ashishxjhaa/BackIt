'use client'

import { ArrowBigUp, Bookmark, Heart, Layers, User } from "lucide-react"
import Back from "./Back"
import { useEffect, useState } from "react"
import axios from "axios"
import UploadProject from "./UploadProject"
import Image from "next/image"

interface Project {
    id: string
    name: string
    description: string
    link: string
    logoUrl: string
    tags: string[]
    upvotes: number
    hearts: number
    saves: number
    createdAt: Date
}

const Page = () => {

    const [user, setUser] = useState({ fullName: '', createdAt: '' })
    const [stats, setStats] = useState({ projects: 0, upvotes: 0, hearts: 0, saves: 0 })
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        axios.get('/api/me').then(res => setUser(res.data.user))
        axios.get('/api/uploadproject').then(res => {
            setStats(res.data.stats)
            setProjects(res.data.projects)
        })
    }, [])

    const initials = user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()
    const formattedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

  return (
    <div>
        <Back />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 p-10">
            <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-full opacity-75 blur-sm"></div>
                <div className="relative flex shrink-0 rounded-full h-24 w-24">
                    <div className="absolute -inset-[5px] bg-linear-to-r from-[#FF8162] to-[#FEB57F] rounded-full opacity-75 blur-sm"></div>
                    <div className="flex h-full w-full items-center justify-center rounded-full text-2xl text-black dark:text-white bg-gray-200 dark:bg-neutral-700 z-10">{initials}</div>
                </div>
            </div>

            <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h1 className="text-3xl font-medium tracking-tight text-[#FF8162]">{user.fullName}</h1>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-3">
                        <User size={18} />
                        Joined {formattedDate}
                    </span>
                </div>
            </div>
            <UploadProject />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 px-4 sm:px-10">
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Layers size={16} />
                        <span className="text-sm tracking-wider">Projects</span>
                    </div>
                    <p className="text-2xl">{stats.projects}</p>
                    <p className="text-xs mt-2 tracking-wide opacity-50">Time to build more!</p>
                </div>
            </div>
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <ArrowBigUp size={16} />
                        <span className="text-sm tracking-wider">Upvotes</span>
                    </div>
                    <p className="text-2xl">{stats.upvotes} vote</p>
                    <p className="text-xs mt-2 tracking-wide opacity-50">Dedication level: Good</p>
                </div>
            </div>
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Heart size={16} />
                        <span className="text-sm tracking-wider">Hearts</span>
                    </div>
                    <p className="text-2xl">{stats.hearts}</p>
                    <p className="text-xs mt-2 tracking-wide opacity-50">Time to learn more!</p>
                </div>
            </div>
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Bookmark size={16} />
                        <span className="text-sm tracking-wider">Saved</span>
                    </div>
                    <p className="text-2xl">{stats.saves}</p>
                    <p className="text-xs mt-2 tracking-wide opacity-50">Start listing more project</p>
                </div>
            </div>
        </div>

        <div className="m-4 mb-10 sm:m-12 mt-2">
            <h2 className="text-3xl font-medium tracking-tight mx-auto max-w-3xl pb-3 text-[#FF8162]">My Projects</h2>
            {projects.length > 0 ? (
                <div className="bg-gray-300 dark:bg-neutral-700 rounded-md px-3 py-3.5 grid gap-3 max-w-3xl">
                    {projects.map((p: Project) => (
                        <div 
                            key={p.id} 
                            className="bg-gray-200 dark:bg-[#3A2F35] text-black dark:text-white p-4 rounded-lg"
                        >
                            <Image
                                src={p.logoUrl} 
                                alt={p.name}
                                width={48}
                                height={48}
                                className="rounded-lg object-cover"
                            />
                            <h3 className="font-medium">{p.name}</h3>
                            <p className="text-sm opacity-70">{p.description}</p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>

    </div>
  )
}

export default Page
