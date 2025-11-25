import Image from "next/image"
import Link from "next/link"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { MyButton } from "@/components/buttons/button"
import { FaDownload } from "react-icons/fa";
import { Card } from "@/components/Card";

export function AboutMe() {
    return (
        <>
            <section id="about" className="max-w-7xl mx-auto w-full py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 lg:px-8 pb-20">
                    <Image src='/logo.png' className="rounded-full" width={500} height={500} alt="" />
                    <div className="box2  space-y-4">
                        <div className="px-4 py-2 backdrop-blur-xs border-[#33deed]/35 text-[#33deed] border rounded-3xl bg-[#33deed]/10 w-fit">
                            About me
                        </div>
                        <div className="text-4xl sm:text-5xl font-bold text-primary">
                            Building Modern Web Experiences
                        </div>
                        <AnimatedShinyText className="dark:text-secondary text-lg  backdrop-blur-xs" shimmerWidth={70}>
                            With over 2 years of hands-on experience in frontend development, I specialize in React.js, Next.js, and TypeScript. My focus is on creating scalable, performant applications with clean code architecture and seamless user interfaces.
                        </AnimatedShinyText>
                        <AnimatedShinyText className="dark:text-secondary text-lg  backdrop-blur-xs" shimmerWidth={70}>
                            I'm passionate about modern web technologies, performance optimization, and delivering production-ready features. I have experience working remotely with startups and clients, contributing to real-world projects, and mentoring aspiring developers.
                        </AnimatedShinyText>
                        <button
                            className="
                                px-4 py-2 flex items-center gap-2 w-fit rounded-lg font-medium
                                border transition-all duration-300
                                backdrop-blur-sm
                                text-black dark:text-[#33deed]
                                border-black/20 dark:border-[#33deed]/40
                                bg-[#33deed]/10 dark:bg-[#33deed]/10
                                hover:bg-[#33deed]/20 dark:hover:bg-[#33deed]/20
                                hover:shadow-md hover:shadow-[#33deed]/30 hover:cursor-pointer
  "
                        >
                            <FaDownload className="w-5 h-5" />
                            Download Resume
                        </button>
                        <div className="grid grid-cols-2 gap-4 mt-15">
                            <Card aboveText="2+" belowText="Years Experience" />
                            <Card aboveText="10+" belowText="Happy Clients" />
                            <Card aboveText="2+" belowText="Years Experience" />
                            <Card aboveText="2+" belowText="Years Experience" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}