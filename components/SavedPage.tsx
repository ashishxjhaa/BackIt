'use client'

import { ArrowBigUp, Bookmark, Heart, SquareArrowOutUpRight, Tags } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { toast } from "sonner"
import Back from "./Back"
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
    user: { fullName: string }
}

const SavedPage = () => {

    const { setProjects: setGlobalProjects, updateProject } = useProjectStore()

    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/saved').then(res => {
            setProjects(res.data.projects)
            setGlobalProjects(res.data.projects)
            setLoading(false)
        })
    }, [setGlobalProjects])

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
    
        setProjects(projects.filter(p => p.id !== projectId))
    
        updateProject(projectId, { 
            hasSaved: false, 
            saves: project.saves - 1 
        })
    
        toast.success('Project unsaved')

        try {
            await axios.post(`/api/projects/${projectId}/save`)
        } catch (error) {
            setProjects([...projects])
            updateProject(projectId, { 
                hasSaved: true, 
                saves: project.saves 
            })
            console.log(error)
        }
    }

    return (
        <>
        <Back />
     
        <div className="py-15">
            <h2 className="text-3xl font-medium tracking-tight text-center sm:text-left sm:mx-14 pb-3 text-[#FF8162]">Saved Projects</h2>
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
                                <div onClick={() => handleUpvote(p.id)} className='flex items-center justify-center w-12 h-12 rounded-xl border border-gray-400 dark:border-gray-50/30 hover:border-[#FF8162] dark:hover:border-[#FF8162] cursor-pointer'>
                                    <ArrowBigUp className={p.hasUpvoted ? 'fill-[#FF8162] text-[#FF8162]' : ''} />
                                </div>     
                    
                                <div onClick={() => handleHeart(p.id)} className='flex items-center justify-center w-12 h-12 rounded-xl border border-gray-400 dark:border-gray-50/30 hover:border-[#FF8162] dark:hover:border-[#FF8162] cursor-pointer'>
                                    <Heart className={p.hasHearted ? 'fill-[#FF8162] text-[#FF8162]' : ''} />
                                </div>

                                <div onClick={() => handleSave(p.id)} className='flex items-center justify-center w-12 h-12 rounded-xl border border-gray-400 dark:border-gray-50/30 hover:border-[#FF8162] dark:hover:border-[#FF8162] cursor-pointer'>
                                    <Bookmark className='fill-[#FF8162] text-[#FF8162]' />  
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-black dark:text-white opacity-85">No saved projects</p>
            )}
        </div>
        </>
    )
}

export default SavedPage
