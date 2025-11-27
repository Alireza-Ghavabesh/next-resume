"use client"
import Image from "next/image"
import { AnimatedShinyText } from "./ui/animated-shiny-text"
import Link from "next/link"
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";
import GradientText from './GradientText'
import { BlurIn } from "./BlurIn";

export function HeroSection() {
    const t = useTranslations('heroSection');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }



    return (
        <>
            <BlurIn>

                <section className="max-w-7xl mx-auto w-full py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 lg:px-8 pb-20">
                        <div className="box1 space-y-3 ">
                            <Image src='/logo.png' className="rounded-full" width={70} height={70} alt="" />
                            {/* <h1 className="text-5xl  sm:text-6xl md:text-7xl font-bold text-primary tracking-tight leading-tight">
                            {t("MyName")} 
                        </h1> */}
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={6}
                                showBorder={false}
                                className="text-5xl  sm:text-6xl md:text-7xl font-extrabold"
                            >
                                {t("MyName")}
                            </GradientText>
                            <div className="flex justify-start gap-2 text-lg font-medium">
                                <Link href="#contact" className="px-7 hover:opacity-70 rounded-4xl p-3 bg-white dark:bg-gray-950 text-gray-950 dark:text-white">{t("getInTouch")}</Link>
                                <Link href="#projects" className="px-7 hover:opacity-70 rounded-4xl p-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950">{t("viewProjects")}</Link>
                            </div>
                        </div>
                        <div className="box2  space-y-3">
                            <p className="text-3xl sm:text-4xl font-bold text-primary">
                                {t("jobTitle")}
                            </p>
                            <AnimatedShinyText className="text-secondary" shimmerWidth={50}>
                                {t("location")}
                            </AnimatedShinyText>
                            <AnimatedShinyText className="text-secondary text-lg  backdrop-blur-xs" shimmerWidth={50}>
                                {t("bio")}
                            </AnimatedShinyText>

                        </div>
                    </div>
                </section>
            </BlurIn>
        </>
    )
}
