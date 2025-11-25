import { AnimatedShinyText } from "./ui/animated-shiny-text"

export function Experience() {
    return (
        <>
            <section id="experience" className="max-w-7xl mx-auto w-full py-20 ">
                <div className="relative py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="text-center space-y-4 mb-12 sm:mb-16">
                        <div className="px-4 py-2 mx-auto backdrop-blur-xs border-[#33deed]/35 text-[#33deed] border rounded-3xl bg-[#33deed]/10 w-fit">
                            About me
                        </div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                            Professional Experience
                        </div>
                        <AnimatedShinyText shimmerWidth={70} className="text-secondary font-medium">
                            My journey through different roles and companies, building real-world applications.
                        </AnimatedShinyText>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="relative group">
                            <div className="absolute top-14 sm:top-16 bottom-0 w-px sm:w-[2px] bg-border/50 transition-colors left-[35px] sm:left-[46px]"></div>
                            <div className="relative flex gap-4 sm:gap-6">
                                <div className="relative flex-shrink-0 ml-4 sm:ml-6 mr-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 sm:w-5 sm:h-5 text-accent" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    </div>
                                </div>
                                <div className="flex-1 pb-8 sm:pb-12">
                                    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-background border-2 border-border hover:border-accent/30 transition-all space-y-3 sm:space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="text-xl sm:text-2xl font-bold text-primary">Frontend Developer</h3>
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                                <span className="font-semibold text-accent">Thrill</span>
                                                <span className="text-border">•</span>
                                                <span className="flex items-center gap-1">
                                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                    <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                                                        Part-time - Remote
                                                    </AnimatedShinyText>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs sm:text-sm">
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                                                    May 2025 – Present
                                                </AnimatedShinyText>
                                            </div>
                                        </div>
                                        <ul className="space-y-2 text-sm sm:text-base">
                                            <li className="flex items-start gap-2 sm:gap-3">
                                                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent mt-2 sm:mt-2.5 flex-shrink-0"></span>
                                                <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                                                    Developed responsive landing pages using Next.js, TypeScript, and Tailwind CSS
                                                </AnimatedShinyText>
                                            </li>
                                             <li className="flex items-start gap-2 sm:gap-3">
                                                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent mt-2 sm:mt-2.5 flex-shrink-0"></span>
                                                <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                                                    Developed responsive landing pages using Next.js, TypeScript, and Tailwind CSS
                                                </AnimatedShinyText>
                                            </li>
                                             <li className="flex items-start gap-2 sm:gap-3">
                                                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent mt-2 sm:mt-2.5 flex-shrink-0"></span>
                                                <AnimatedShinyText className="text-secondary" shimmerWidth={30}>
                                                    Developed responsive landing pages using Next.js, TypeScript, and Tailwind CSS
                                                </AnimatedShinyText>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}