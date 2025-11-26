"use client"
import { MyButton } from "./buttons/button";
import { TripjetCard } from "./TripjetCard";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";

export function Projects() {
    const t = useTranslations('projects');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const project1 = t.getNamespace().project1;

    return (
        <>
            <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 backdrop-blur-xs">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <div className="mb-16 space-y-4">
                            <MyButton text={t("title")} />
                            <h2 className="text-4xl sm:text-5xl font-bold text-primary">{t("heading")}</h2>
                            <AnimatedShinyText className="text-secondary" shimmerWidth={70}>
                                {t("subheading")}
                            </AnimatedShinyText>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <TripjetCard
                                title={project1.title}
                                description={project1.description}
                                imageSrc="/project1.webp"
                                tech={["Next.js", "React Query", "Tailwind CSS"]}
                            />
                            <TripjetCard
                                title={project1.title}
                                description={project1.description}
                                imageSrc="/project1.webp"
                                tech={["Next.js", "React Query", "Tailwind CSS"]}
                            />
                            <TripjetCard
                                title={project1.title}
                                description={project1.description}
                                imageSrc="/project1.webp"
                                tech={["Next.js", "React Query", "Tailwind CSS"]}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
