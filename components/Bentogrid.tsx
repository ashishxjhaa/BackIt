import { Clock, ArrowRight,ChartColumn, Trophy, Flame, Calendar, CodeXml } from 'lucide-react';


export default function Bentogrid() {

    return (
        <div className="py-24">
            <div className="container px-4 md:px-6 w-full mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl opacity-85 dark:opacity-100">Launch Your Vision</h2>
                    <p className="mx-auto mt-4 max-w-[700px] opacity-70 md:text-xl">Connect with backers, fund your ideas, and turn concepts into reality.</p>
                </div>
            
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    
                    <div className="flex">
                        <div className="group relative w-full rounded-2xl p-4 sm:p-6 shadow-blue-500/20 shadow-sm transition-all duration-300 hover:shadow-md border">
                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-400 p-2 sm:p-3 text-white shadow-lg">
                                    <Clock className='h-10 w-10' />
                                </div>
                                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold tracking-wide">Quick Launch</h3>
                                <p className="text-sm sm:text-base opacity-90">Create and publish your project in minutes with our streamlined campaign builder.</p>
                                
                                <div className="text-[#FF8162] mt-4 sm:mt-5 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className='ml-1 h-4 w-4' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="group relative w-full rounded-2xl p-4 sm:p-6 shadow-blue-500/20 shadow-sm transition-all duration-300 hover:shadow-md border">
                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-linear-to-br from-purple-600 to-violet-400 p-2 sm:p-3 text-white shadow-lg">
                                    <ChartColumn className='h-10 w-10' />
                                </div>
                                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold tracking-wide">Smart Analytics</h3>
                                <p className="text-sm sm:text-base opacity-90">Monitor your funding progress, backer activity, and campaign performance in real-time.</p>
                                
                                <div className="text-[#FF8162] mt-4 sm:mt-5 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className='ml-1 h-4 w-4' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="group relative w-full rounded-2xl p-4 sm:p-6 shadow-blue-500/20 shadow-sm transition-all duration-300 hover:shadow-md border">
                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-yellow-300 p-2 sm:p-3 text-white shadow-lg">
                                    <Trophy className='h-10 w-10' />
                                </div>
                                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold tracking-wide">Backer Network</h3>
                                <p className="text-sm sm:text-base opacity-90">Connect with thousands of active investors looking for innovative projects to support.</p>
                                
                                <div className="text-[#FF8162] mt-4 sm:mt-5 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className='ml-1 h-4 w-4' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="group relative w-full rounded-2xl p-4 sm:p-6 shadow-blue-500/20 shadow-sm transition-all duration-300 hover:shadow-md border">
                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-linear-to-br from-orange-600 to-red-400 p-2 sm:p-3 text-white shadow-lg">
                                    <Flame className='h-10 w-10' />
                                </div>
                                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold tracking-wide">Funding Milestones</h3>
                                <p className="text-sm sm:text-base opacity-90">Set and track funding goals with visual progress indicators and milestone celebrations.</p>
                                
                                <div className="text-[#FF8162] mt-4 sm:mt-5 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className='ml-1 h-4 w-4' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="group relative w-full rounded-2xl p-4 sm:p-6 shadow-blue-500/20 shadow-sm transition-all duration-300 hover:shadow-md border">
                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-linear-to-br from-emerald-600 to-teal-400 p-2 sm:p-3 text-white shadow-lg">
                                    <Calendar className='h-10 w-10' />
                                </div>
                                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold tracking-wide">Campaign Updates</h3>
                                <p className="text-sm sm:text-base opacity-90">Keep your backers engaged with progress updates, stretch goals, and exclusive content.</p>
                                
                                <div className="text-[#FF8162] mt-4 sm:mt-5 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className='ml-1 h-4 w-4' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="group relative w-full rounded-2xl p-4 sm:p-6 shadow-blue-500/20 shadow-sm transition-all duration-300 hover:shadow-md border">
                            <div className="relative z-10">
                                <div className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-linear-to-br from-cyan-600 to-sky-400 p-2 sm:p-3 text-white shadow-lg">
                                    <CodeXml className='h-10 w-10' />
                                </div>
                                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold tracking-wide">Secure Payments</h3>
                                <p className="text-sm sm:text-base opacity-90">Safe and reliable payment processing with support for multiple currencies and methods.</p>
                                
                                <div className="text-[#FF8162] mt-4 sm:mt-5 flex items-center text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className='ml-1 h-4 w-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}