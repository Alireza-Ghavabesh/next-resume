import Image from "next/image"
import { AnimatedShinyText } from "./ui/animated-shiny-text"
import Link from "next/link"
export function HeroSection() {
    return (
        <>
        <div className="max-w-7xl mx-auto w-full py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="box1 space-y-8">
                    <Image src='/logo.png' className="rounded-full" width={70} height={70} alt="" />
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary tracking-tight leading-tight">
                        Hi, I'm Alireza Ghavabesh
                    </h1>
                    <div className="flex justify-start gap-2 text-lg font-medium">
                        <Link href="#contact" className="px-7 hover:opacity-70 rounded-4xl p-3 bg-white dark:bg-gray-950 text-gray-950 dark:text-white">Get in Touch</Link>
                        <Link href="#projects" className="px-7 hover:opacity-70 rounded-4xl p-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950">View Projects</Link>
                    </div>
                </div>
                <div className="box2  space-y-3">
                    <p className="text-3xl sm:text-4xl font-bold text-primary">
                        Fullstack Developer
                    </p>
                    <AnimatedShinyText className="text-secondary">
                        Based in Ahvaz, Iran
                    </AnimatedShinyText>
                    <AnimatedShinyText className="text-secondary">
                        Frontend Developer with 2+ years of experience in Next.js, TypeScript, and modern web technologies. I build scalable, performant applications with clean architecture and exceptional user experiences.
                    </AnimatedShinyText>

                </div>
            </div>
        </div>
        </>
    )
}