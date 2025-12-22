import { Skeleton } from "@/components/ui/skeleton"

export const ProjectCardSkeleton = () => {
    return (
        <div className="bg-gray-200 dark:bg-[#3A2F35] p-4 rounded-lg flex flex-col sm:flex-row gap-3">
            <div className="flex gap-3 flex-1">
                <Skeleton className="w-12 h-12 rounded-lg shrink-0" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex gap-2 mt-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <Skeleton className="w-12 h-12 rounded-xl" />
                <Skeleton className="w-12 h-12 rounded-xl" />
                <Skeleton className="w-12 h-12 rounded-xl" />
            </div>
        </div>
    )
}