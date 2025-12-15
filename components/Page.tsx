import { ArrowBigUp, Bookmark, Heart, Layers, Plus, User } from "lucide-react"
import Back from "./Back"
import { Button } from "./ui/button"


const Page = () => {
  return (
    <div>
        <Back />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 p-10">
            <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-full opacity-75 blur-sm"></div>
                <div className="relative flex shrink-0 rounded-full h-24 w-24">
                    <div className="absolute -inset-[5px] bg-linear-to-r from-[#FF8162] to-[#FEB57F] rounded-full opacity-75 blur-sm"></div>
                    <div className="flex h-full w-full items-center justify-center rounded-full text-2xl text-black dark:text-white bg-gray-200 dark:bg-neutral-700 z-10">AJ</div>
                </div>
            </div>

            <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h1 className="text-3xl font-medium tracking-tight text-[#FF8162]">Ashish Jha</h1>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-3">
                        <User size={18} />
                        Joined August 26, 2025
                    </span>
                </div>
            </div>
            <Button><Plus />Upload project</Button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 px-10">
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Layers size={20} />
                        <span className="text-sm tracking-wider">Projects</span>
                    </div>
                    <p className="text-2xl font-bold">9</p>
                    <p className="text-xs mt-2 tracking-wide text-[#FF8162]">Time to build more! ⏰</p>
                </div>
            </div>
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <ArrowBigUp size={20} />
                        <span className="text-sm tracking-wider">Upvotes</span>
                    </div>
                    <p className="text-2xl font-bold">6 vote</p>
                    <p className="text-xs mt-2 tracking-wide text-[#FF8162]">Dedication level: Normal ☀️</p>
                </div>
            </div>
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Heart size={20} />
                        <span className="text-sm tracking-wider">Hearts</span>
                    </div>
                    <p className="text-2xl font-bold">7</p>
                    <p className="text-xs mt-2 tracking-wide text-[#FF8162]">Time to learn more! 📚</p>
                </div>
            </div>
            <div className="rounded-xl border bg-gray-200 dark:bg-[#3A2F35] text-card-foreground overflow-hidden border-none">
                <div className="p-6 pt-7 pb-9 text-black dark:text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Bookmark size={20} />
                        <span className="text-sm tracking-wider">Saved</span>
                    </div>
                    <p className="text-2xl font-bold">10</p>
                    <p className="text-xs mt-2 tracking-wide text-[#FF8162]">Start listing more project 🎯</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Page
