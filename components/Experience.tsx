"use client"
import { MyButton } from "./buttons/button"
import { ExCard } from "./ExCard"
import { AnimatedShinyText } from "./ui/animated-shiny-text"
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";

export function Experience() {
    const t = useTranslations('experience');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const experience = t.getNamespace();
    const job1 = experience.job1;

    return (
        <>
            <section id="experience" className="max-w-7xl mx-auto w-full relative py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="relative py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="text-center space-y-4 mb-12 sm:mb-16">
                        <MyButton text={t("title")} />
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                            {t("heading")}
                        </div>
                        <AnimatedShinyText shimmerWidth={70} className="text-secondary font-medium">
                            {t("subheading")}
                        </AnimatedShinyText>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6 sm:space-y-8 grid-cols-1">
                        <ExCard
                            title={job1.title}
                            company={job1.company}
                            roleType={job1.roleType}
                            dateRange={job1.dateRange}
                            highlights={job1.highlights}
                        />

                        <ExCard
                            title={job1.title}
                            company={job1.company}
                            roleType={job1.roleType}
                            dateRange={job1.dateRange}
                            highlights={job1.highlights}
                        />

                        <ExCard
                            title={job1.title}
                            company={job1.company}
                            roleType={job1.roleType}
                            dateRange={job1.dateRange}
                            highlights={job1.highlights}
                        />

                    </div>
                </div>

            </section>
        </>
    )
}
