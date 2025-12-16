'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Plus, X } from 'lucide-react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'


function UploadProject() {
    const [open, setOpen] = useState(false)
    const tags = ['SaaS', 'Productivity', 'AI', 'Fintech', 'E-commerce', 'Others']
    const maxLength = 100;

    return (
        <>
        <div 
            onClick={() => setOpen(true)}
        >
            <Button><Plus />Upload project</Button>
        </div>

        {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
                <div className="relative bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white rounded-xl p-6 w-[90%] max-w-md max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-5">
                        <div className="font-medium text-lg">PROJECT DETAILS</div>
                            <div 
                                onClick={() => setOpen(false)} 
                                className="opacity-60 hover:opacity-100 cursor-pointer"
                            >
                                <X />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <label className="text-sm font-medium">Project name</label>
                                <Input type='text' placeholder='BackIt, Inc' />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium">Short description</label>
                                    <span className="text-xs opacity-55">
                                        {0}/{maxLength}
                                    </span>
                                </div>
                                <Textarea placeholder='About your project' rows={3} />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <label className="text-sm font-medium">Live link</label>
                                <Input type='url' placeholder='https://example.com' />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <label className="text-sm font-medium">Upload logo</label>
                                <Input type='url' placeholder='https://example.com' />
                            </div>

                            <div className="bg-gray-200 dark:bg-[#43383E] rounded-md p-2 px-3">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium">Tags</label>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {tags.map((tag) => {
                                        return (
                                            <button key={tag} type='button' className='px-2.5 py-1 rounded-md cursor-pointer disabled:opacity-50 "bg-[#FF8162] text-black bg-[#2C2024] text-white'>
                                                {tag}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
            
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default UploadProject
