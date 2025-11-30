import { ChartColumn, RadioTower, Clock, Plus, CodeXml, Rocket, Users } from "lucide-react";



export default function Stats() {

    return (
        <>
        <div className="bg-white/80 dark:bg-neutral-700/40 py-20 mx-3 sm:mx-10 rounded-2xl">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="dark:text-white text-black opacity-90 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trusted by Innovators Worldwide</h2>
                    <p className="mx-auto mt-4 max-w-[700px] md:text-xl dark:text-white text-black opacity-75 tracking-wide">Join thousands of creators who are launching their ideas and getting funded together.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border bg-slate-50 dark:bg-neutral-700 shadow-lg">
                        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                            <div className="text-sm font-normal">Active Creators</div>
                            <Users className="h-5 w-5 text-[#FF8162]" />
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold tracking-wide">2,500+</div>
                            <div className="text-sm tracking-wide opacity-65 font-light">Projects launched on the platform</div>
                        </div>
                    </div>
                
                    <div className="rounded-xl border bg-slate-50 dark:bg-neutral-700 shadow-lg">
                        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                            <div className="text-sm font-normal">Total Funded</div>
                            <Clock className="h-5 w-5 text-[#FF8162]" />
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold tracking-wide">$2.5M+</div>
                            <div className="text-sm tracking-wide opacity-65 font-light">Capital raised for innovative ideas</div>
                        </div>
                    </div>
                    
                    <div className="rounded-xl border bg-slate-50 dark:bg-neutral-700 shadow-lg">
                        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                            <div className="text-sm font-normal">Success Rate</div>
                            <CodeXml className="h-5 w-5 text-[#FF8162]" />
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold tracking-wide">78%</div>
                            <div className="text-sm tracking-wide opacity-65 font-light">Projects reaching funding goals</div>
                        </div>
                    </div>
                    
                    <div className="rounded-xl border bg-slate-50 dark:bg-neutral-700 shadow-lg">
                        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                            <div className="text-sm font-normal">Active Backers</div>
                            <ChartColumn className="h-5 w-5 text-[#FF8162]" />
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold tracking-wide">10k+</div>
                            <div className="text-sm tracking-wide opacity-65 font-light">Investors supporting creative ventures</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="py-20">
            <div className="container px-4 md:px-10 mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl opacity-90">How to Use BackIt</h2>
                    <p className="mx-auto mt-4 max-w-[700px] opacity-65 md:text-xl tracking-wide">Get started in minutes with our simple launch process.</p>
                </div>
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="rounded-xl bg-white/80 dark:bg-neutral-700/40 h-full border-2 border-dashed">
                            <div className="flex flex-col items-center p-6 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 dark:bg-[#4E383B]">
                                    <Plus className="h-8 w-8 text-[#FF8162]" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Create Your Account</h3>
                                <p className="font-light tracking-wide opacity-70">Sign up on BackIt web app and set up your creator profile with your project details.</p>
                            </div>
                        </div>

                        <div className="rounded-xl bg-white/80 dark:bg-neutral-700/40 h-full border-2 border-dashed">
                            <div className="flex flex-col items-center p-6 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 dark:bg-[#4E383B]">
                                    <Rocket className="h-8 w-8 text-[#FF8162]" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Launch Your Campaignn</h3>
                                <p className="font-light tracking-wide opacity-70">Build your project page with description, funding goals, and rewards for your backers.</p>
                            </div>
                        </div>
                        
                        <div className="rounded-xl bg-white/80 dark:bg-neutral-700/40 h-full border-2 border-dashed">
                            <div className="flex flex-col items-center p-6 text-center">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 dark:bg-[#4E383B]">
                                    <RadioTower className="h-8 w-8 text-[#FF8162]" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Go Live & Share</h3>
                                <p className="font-light tracking-wide opacity-70">Publish your campaign and share it with potential backers to start receiving funding immediately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}