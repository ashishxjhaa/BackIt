import { create } from 'zustand'

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

interface ProjectStore {
    projects: Map<string, Project>
    setProjects: (projects: Project[]) => void
    updateProject: (id: string, updates: Partial<Project>) => void
    getProject: (id: string) => Project | undefined
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
    projects: new Map(),
    
    setProjects: (projects) => set((state) => {
        const newMap = new Map(state.projects)
        projects.forEach(p => newMap.set(p.id, p))
        return { projects: newMap }
    }),
    
    updateProject: (id, updates) => set((state) => {
        const newMap = new Map(state.projects)
        const existing = newMap.get(id)
        if (existing) {
            newMap.set(id, { ...existing, ...updates })
        }
        return { projects: newMap }
    }),
    
    getProject: (id) => get().projects.get(id)
}))