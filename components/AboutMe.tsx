"use client"
import Image from "next/image"
import Link from "next/link"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { MyButton } from "@/components/buttons/button"
import { FaDownload } from "react-icons/fa";
import { Card } from "@/components/Card";
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";
import { BlurIn } from "./BlurIn";
import AnimatedContent from "./AnimatedContent"


export function AboutMe() {
    const t = useTranslations('aboutMe');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <>
            <section id="about" className="max-w-7xl mx-auto w-full py-20 overflow-x-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 lg:px-8 pb-20">
                    <BlurIn>
                        <Image src='/logo.png' className="rounded-full" width={500} height={500} alt="" />
                    </BlurIn>
                    <div className="box2  space-y-4">

                        <MyButton text={t("title")} />
                        <div className="text-4xl sm:text-5xl font-bold text-primary">
                            {t("heading")}
                        </div>
                        <AnimatedShinyText className="dark:text-secondary text-lg  backdrop-blur-xs" shimmerWidth={70}>
                            {t("bio1")}
                        </AnimatedShinyText>
                        <AnimatedShinyText className="dark:text-secondary text-lg  backdrop-blur-xs" shimmerWidth={70}>
                            {t("bio2")}
                        </AnimatedShinyText>
                        <Link href={"/alirezaghavabesh.pdf"}
                        target="_blank"
                            className="
                                px-4 py-2 flex items-center gap-2 w-fit rounded-lg font-medium
                                border transition-all duration-300
                                backdrop-blur-sm
                                border-darkBlue dark:border-lightBlue
                                text-darkBlue dark:text-lightBlue
                                hover:shadow-md hover:shadow-[#33deed]/30 hover:cursor-pointer
  "
                        >
                            <FaDownload className="w-5 h-5" />
                            {t("downloadResume")}
                        </Link>
                        <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            reverse={false}
                            duration={1.2}
                            ease="bounce.out"
                          
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >
                            <div className="grid grid-cols-2 gap-4 mt-15">

                                <Card aboveText="2+" belowText={t("yearsExperience")} />
                                <Card aboveText="20+" belowText={t("projectsDelivered")} />
                                <Card aboveText="10+" belowText={t("happyClients")} />
                                <Card aboveText="95%" belowText={t("codeQuality")} />
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>
        </>
    )
}
