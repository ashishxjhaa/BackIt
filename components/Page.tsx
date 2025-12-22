'use client'

import { ArrowBigUp, Bookmark, Heart, Layers, User, SquareArrowOutUpRight, Tags } from "lucide-react"
import Back from "./Back"
import { useEffect, useState } from "react"
import axios from "axios"
import UploadProject from "./UploadProject"
import Image from "next/image"
import { toast } from "sonner"
import { useProjectStore } from "@/lib/store"
import { ProjectCardSkeleton } from "./ProjectCardSkeleton"

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
    hasUpvoted: boolean
    hasHearted: boolean
    hasSaved: boolean
    createdAt: Date
}

const Page = () => {

    const { setProjects: setGlobalProjects, updateProject } = useProjectStore()

    const [user, setUser] = useState({ fullName: '', createdAt: '' })
    const [stats, setStats] = useState({ projects: 0, upvotes: 0, hearts: 0, saves: 0 })
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/me').then(res => setUser(res.data.user))
        axios.get('/api/uploadproject').then(res => {
            setStats(res.data.stats)
            setProjects(res.data.projects)
            setGlobalProjects(res.data.projects)
            setLoading(false)
        })
    }, [])

    const handleUpvote = async (projectId: string) => {
        const project = projects.find(p => p.id === projectId)!
        const optimisticUpdate = {
            hasUpvoted: !project.hasUpvoted,
            upvotes: project.upvotes + (project.hasUpvoted ? -1 : 1)
        }
    
        setProjects(projects.map(p => 
            p.id === projectId ? { ...p, ...optimisticUpdate } : p
        ))
        updateProject(projectId, optimisticUpdate)

        try {
            await axios.post(`/api/projects/${projectId}/upvote`)
        } catch (error) {
            setProjects(projects.map(p => 
                p.id === projectId ? project : p
            ))
            updateProject(projectId, { hasUpvoted: project.hasUpvoted, upvotes: project.upvotes })
            console.log(error)
        }
    }

    const handleHeart = async (projectId: string) => {
        const project = projects.find(p => p.id === projectId)!
        const optimisticUpdate = {
            hasHearted: !project.hasHearted,
            hearts: project.hearts + (project.hasHearted ? -1 : 1)
        }
    
        setProjects(projects.map(p => 
            p.id === projectId ? { ...p, ...optimisticUpdate } : p
        ))
        updateProject(projectId, optimisticUpdate)

        try {
            await axios.post(`/api/projects/${projectId}/heart`)
        } catch (error) {
            setProjects(projects.map(p => 
                p.id === projectId ? project : p
            ))
            updateProject(projectId, { hasHearted: project.hasHearted, hearts: project.hearts })
            console.log(error)
        }
    }

    const handleSave = async (projectId: string) => {
        const project = projects.find(p => p.id === projectId)!
        const optimisticUpdate = {
            hasSaved: !project.hasSaved,
            saves: project.saves + (project.hasSaved ? -1 : 1)
        }
    
        setProjects(projects.map(p => 
            p.id === projectId ? { ...p, ...optimisticUpdate } : p
        ))
        updateProject(projectId, optimisticUpdate)
        toast.success(optimisticUpdate.hasSaved ? 'Project saved!' : 'Project unsaved')

        try {
            await axios.post(`/api/projects/${projectId}/save`)
        } catch (error) {
            setProjects(projects.map(p => 
                p.id === projectId ? project : p
            ))
            updateProject(projectId, { hasSaved: project.hasSaved, saves: project.saves })
            console.log(error)
        }
    }

    const initials = user.fullName.split(' ').map(n => n[0]).join('').toUpperCase()
    const formattedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

  return (
    <div>
        <Back />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 p-10">
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


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:py-4 px-4 sm:px-10">
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

        <div className="py-15">
            <h2 className="text-3xl font-medium tracking-tight text-center sm:text-left sm:mx-14 pb-3 text-[#FF8162]">My Projects</h2>
            {loading ? (
                <div className="bg-gray-300 dark:bg-neutral-700 rounded-md px-3 py-3.5 grid gap-3 mx-4 sm:mx-12">
                    {[...Array(3)].map((_, i) => (
                        <ProjectCardSkeleton key={i} />
                    ))}
                </div>
            ) :projects.length > 0 ? (
                <div className="bg-gray-300 dark:bg-neutral-700 rounded-md px-3 py-3.5 grid gap-3 mx-4 sm:mx-12">
                    {projects.map((p: Project) => (
                        <div 
                            key={p.id} 
                            className="bg-gray-200 dark:bg-[#3A2F35] text-black dark:text-white p-4 rounded-lg flex flex-col sm:flex-row gap-3 group"
                        >
                            <div className="flex gap-3 flex-1">
                                <div className="w-12 h-12 shrink-0">
                                    <Image
                                        src={p.logoUrl} 
                                        alt={p.name}
                                        width={48}
                                        height={48}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <a
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium flex items-center gap-1 group-hover:text-[#FF8162] transition"
                                    >
                                        {p.name}
                                        <SquareArrowOutUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                                    </a>
                                    <p className="text-sm opacity-70">{p.description}</p>
    
                                    <div className="flex items-center gap-2 mt-2">
                                        <Tags className="w-4 h-4" />
                                        {p.tags.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-300 dark:bg-neutral-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div 
                                    onClick={() => handleUpvote(p.id)} 
                                    className='flex items-center justify-center w-12 h-12 rounded-xl border border-gray-400 dark:border-gray-50/30 hover:border-[#FF8162] dark:hover:border-[#FF8162] cursor-pointer'
                                >
                                    <ArrowBigUp className={p.hasUpvoted ? 'fill-[#FF8162] text-[#FF8162]' : ''} />
                                </div>     

                                <div 
                                    onClick={() => handleHeart(p.id)} 
                                    className='flex items-center justify-center w-12 h-12 rounded-xl border border-gray-400 dark:border-gray-50/30 hover:border-[#FF8162] dark:hover:border-[#FF8162] cursor-pointer'
                                >
                                    <Heart className={p.hasHearted ? 'fill-[#FF8162] text-[#FF8162]' : ''} />
                                </div>

                                <div 
                                    onClick={() => handleSave(p.id)} 
                                    className='flex items-center justify-center w-12 h-12 rounded-xl border border-gray-400 dark:border-gray-50/30 hover:border-[#FF8162] dark:hover:border-[#FF8162] cursor-pointer'
                                >
                                    <Bookmark className={p.hasSaved ? 'fill-[#FF8162] text-[#FF8162]' : ''} />  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-black dark:text-white opacity-85">No projects yet</p>
            )}
        </div>

    </div>
  )
}

export default Page
