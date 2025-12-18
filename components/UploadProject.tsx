'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Plus, X } from 'lucide-react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'
import axios from 'axios'
import { Spinner } from '@/components/ui/spinner'


function UploadProject() {
    const [open, setOpen] = useState(false)
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const tags = ['SaaS', 'Productivity', 'AI', 'Fintech', 'E-commerce', 'Others']
    const maxLength = 100;
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !description || !link || selectedTags.length === 0) {
            toast.error('Please fill all fields and select at least one tag')
            return
        }

        setIsSubmitting(true)
        try {
            const res = await axios.get('/api/me')
            const userId = res.data.user.id
            await axios.post('/api/uploadproject', {
                name,
                description,
                link,
                tags: selectedTags,
                userId
            })
    
        toast.success('Project uploaded successfully!')
        setOpen(false)
        // Reset form
        setName('')
        setDescription('')
        setLink('')
        setSelectedTags([])
    } catch (error) {
        console.log(error)
        toast.error('Failed to upload project')
    } finally {
        setIsSubmitting(false)
    }
}

    return (
        <>
        <div 
            onClick={() => setOpen(true)}
        >
            <Button><Plus />Upload project</Button>
        </div>

        {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen backdrop-blur-xs bg-black/25">
                <div className="relative bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white border rounded-xl p-4 w-[90%] max-w-md max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-5">
                        <div className="font-medium text-lg">PROJECT DETAILS</div>
                            <div 
                                onClick={() => setOpen(false)} 
                                className="opacity-60 hover:opacity-100 cursor-pointer"
                            >
                                <X />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <div className="text-sm font-medium pb-2">Project name</div>
                                <Input 
                                    type='text' 
                                    placeholder='BackIt, Inc' 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium pb-2">Short description</div>
                                    <span className="text-xs opacity-55">
                                        {description.length}/{maxLength}
                                    </span>
                                </div>
                                <Textarea 
                                    placeholder='About your project' 
                                    rows={3} 
                                    maxLength={maxLength} 
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <div className="text-sm font-medium pb-2">Live link</div>
                                <Input 
                                    type='url' 
                                    placeholder='https://example.com'
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium">Tags</div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {tags.map((tag) => {
                                        return (
                                            <button 
                                                key={tag} 
                                                type='button' 
                                                onClick={() => {
                                                    if (selectedTags.includes(tag)) {
                                                        setSelectedTags(selectedTags.filter(t => t !== tag))
                                                    } else if (selectedTags.length < 3) {
                                                        setSelectedTags([...selectedTags, tag])
                                                    }
                                                }}
                                                disabled={!selectedTags.includes(tag) && selectedTags.length >= 3}
                                                className={`px-2.5 py-1 rounded-md cursor-pointer disabled:opacity-50 ${
                                                    selectedTags.includes(tag) 
                                                        ? 'bg-[#FF8162] text-black' 
                                                        : 'bg-[#2C2024] text-white'
                                                }`}
                                            >
                                                {tag}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
            
                            <Button 
                                type='submit' 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <Spinner className="w-4 h-4" /> : 'Submit'}
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default UploadProject
