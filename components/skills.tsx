"use client"
import { MyButton } from "./buttons/button";
import { TechCard } from "./techCard";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

import { TechSection } from "@/components/TechSection";
import ReactIcon from "tech-stack-icons";
import NextjsIcon from "tech-stack-icons";
import TypescriptIcon from "tech-stack-icons";
import JavascriptIcon from "tech-stack-icons";
import NodejsIcon from "tech-stack-icons";
import ExpressIcon from "tech-stack-icons";
import RestApiIcon from "tech-stack-icons";
import GraphqlIcon from "tech-stack-icons";
import WebsocketIcon from "tech-stack-icons";
import SocketioIcon from "tech-stack-icons";
import TailwindcssIcon from "tech-stack-icons";
import ShadcnuiIcon from "tech-stack-icons";
import MaterialuiIcon from "tech-stack-icons";
import FramerIcon from "tech-stack-icons";
import ReactqueryIcon from "tech-stack-icons";
import ZustandIcon from "tech-stack-icons";
import ReduxIcon from "tech-stack-icons";
import GitIcon from "tech-stack-icons";
import GithubIcon from "tech-stack-icons";
import DockerIcon from "tech-stack-icons";
import CidcIcon from "tech-stack-icons";
import JestIcon from "tech-stack-icons";
import TestinglibraryIcon from "tech-stack-icons";
import SitemapIcon from "tech-stack-icons";
import RobotstxtIcon from "tech-stack-icons";
import SeoIcon from "tech-stack-icons";
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";

import StackIcon from "tech-stack-icons";

export function Skills() {
    const t = useTranslations('skills');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 backdrop-blur-xs">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <MyButton text={t("title")} />
                        <h2 className="text-4xl sm:text-5xl font-bold text-primary">{t("heading")}</h2>
                        <AnimatedShinyText className="text-secondary" shimmerWidth={70}>
                            {t("subheading")}
                        </AnimatedShinyText>
                    </div>
                    <div className="max-w-5xl mx-auto space-y-12">
                        <TechSection
                            title={t("frontend")}
                            items={[
                                { text: "React.js", icon: <ReactIcon name="react" className="w-4 h-4" /> },
                                { text: "Next.js", icon: <NextjsIcon name="nextjs" className="w-4 h-4" /> },
                                { text: "TypeScript", icon: <TypescriptIcon name="typescript" className="w-4 h-4" /> },
                                { text: "JavaScript", icon: <JavascriptIcon name="js" className="w-4 h-4" /> },
                            ]}
                        />

                        <TechSection
                            title={t("backend")}
                            items={[
                                { text: "Node.js", icon: <NodejsIcon name="nodejs" className="w-4 h-4" /> },
                                { text: "Express.js", icon: <ExpressIcon name="expressjs" className="w-4 h-4" /> },
                                { text: "REST APIs", icon: <StackIcon name="swagger" className="w-4 h-4" /> },
                                { text: "GraphQL", icon: <GraphqlIcon name="graphql" className="w-4 h-4" /> },
                                // { text: "WebSocket", icon: <WebsocketIcon name="websocket" className="w-4 h-4" /> },
                                // { text: "Socket.io", icon: <SocketioIcon name="socketio" className="w-4 h-4" /> },
                            ]}
                        />

                        <TechSection
                            title={t("styling")}
                            items={[
                                { text: "Tailwind CSS", icon: <TailwindcssIcon name="tailwindcss" className="w-4 h-4" /> },
                                { text: "shadcn/ui", icon: <ShadcnuiIcon name="shadcnui" className="w-4 h-4" /> },
                                { text: "Material UI", icon: <MaterialuiIcon name="materialui" className="w-4 h-4" /> },
                                { text: "Framer Motion", icon: <FramerIcon name="framer" className="w-4 h-4" /> },
                            ]}
                        />

                        <TechSection
                            title={t("stateManagement")}
                            items={[
                                { text: "React Query", icon: <ReactqueryIcon name="reactquery" className="w-4 h-4" /> },
                                // { text: "Zustand", icon: <ZustandIcon name="zustand" className="w-4 h-4" /> },
                                { text: "Redux Toolkit", icon: <ReduxIcon name="redux" className="w-4 h-4" /> },
                            ]}
                        />

                        <TechSection
                            title={t("devops")}
                            items={[
                                { text: "Git", icon: <GitIcon name="git" className="w-4 h-4" /> },
                                { text: "GitHub", icon: <GithubIcon name="github" className="w-4 h-4" /> },
                                { text: "Docker", icon: <DockerIcon name="docker" className="w-4 h-4" /> },
                                // { text: "CI/CD", icon: <CidcIcon name="cidc" className="w-4 h-4" /> },
                            ]}
                        />

                        <TechSection
                            title={t("testing")}
                            items={[
                                { text: "Jest", icon: <JestIcon name="jest" className="w-4 h-4" /> },
                                // { text: "React Testing Library", icon: <TestinglibraryIcon name="testinglibrary" className="w-4 h-4" /> },
                            ]}
                        />

                        {/* <TechSection
                            title="SEO & Technical"
                            items={[
                                { text: "Sitemap", icon: <SitemapIcon name="sitemap" className="w-4 h-4" /> },
                                { text: "Robots.txt", icon: <RobotstxtIcon name="robotstxt" className="w-4 h-4" /> },
                                { text: "SEO Optimization", icon: <SeoIcon name="seo" className="w-4 h-4" /> },
                            ]}
                        /> */}

                    </div>
                </div>
            </section>
        </>
    )
}
