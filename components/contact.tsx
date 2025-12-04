"use client"
import Image from "next/image"
import Link from "next/link"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { MyButton } from "@/components/buttons/button"
import { FaDownload } from "react-icons/fa";
import { Card } from "@/components/Card";
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";

export function Contact() {
    const t = useTranslations('contact');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 backdrop-blur-xs">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <MyButton text={t("title")} />
                        <h2 className="text-4xl sm:text-5xl font-bold text-primary">{t("heading")}</h2>
                        <AnimatedShinyText className="text-secondary" shimmerWidth={70}>
                            {t("subheading")}
                        </AnimatedShinyText>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent/30 transition-all backdrop-blur-xs">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-lightBlue/10">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-darkBlue" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-extrabold text-gray-500">{t("email")}</p>
                                        <Link className="text-primary font-semibold hover:text-darkBlue transition-colors" href="mailto:mohandesghavabesh@gmail.com">mohandesghavabesh@gmail.com</Link>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-accent/30 transition-all backdrop-blur-xs">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-lightBlue/10">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-darkBlue" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-extrabold">{t("location")}</p>
                                        <Link className="text-primary font-semibold hover:text-darkBlue transition-colors" href="mailto:pooyabirvand@gmail.com">Ahvaz, Iran</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="flex gap-4 pt-4">
                                <Link href={"/"} className="group w-12 h-12 flex items-center justify-center rounded-xl border border-border hover:border-lightBlue/30 hover:bg-hover transition-all">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 group-hover:text-lightBlue transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </Link>
                                <Link href={"/"} className="group w-12 h-12 flex items-center justify-center rounded-xl border border-border hover:border-lightBlue/30 hover:bg-hover transition-all">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 group-hover:text-lightBlue transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </Link>
                                <Link href={"/"} className="group w-12 h-12 flex items-center justify-center rounded-xl border border-border hover:border-lightBlue/30 hover:bg-hover transition-all">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 group-hover:text-lightBlue transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="p-10 rounded-3xl border border-border text-center transition-all">
                            {/* Title */}
                            <h3 className="text-2xl font-bold text-primary mb-4">{t("sendEmail")}</h3>

                            {/* Subtitle */}
                            <div>
                                <div
                                    className="text-secondary bg-clip-text inline-block animate-shine mb-8"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
                                        backgroundSize: "200% 100%",
                                        backgroundClip: "text",
                                        animationDuration: "5s",
                                    }}
                                >
                                    <AnimatedShinyText className="text-secondary" shimmerWidth={70}>
                                        {t("emailPrompt")}
                                    </AnimatedShinyText>
                                </div>
                            </div>

                            {/* Email Button */}
                            <a
                                href="mailto:pooyabirvand@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background text-base font-semibold rounded-full hover:opacity-90 transition-all"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>{t("email")}</span>
                            </a>

                            {/* Footer Note */}
                            <div>
                                <div
                                    className="text-secondary bg-clip-text inline-block animate-shine text-sm mt-6"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
                                        backgroundSize: "200% 100%",
                                        backgroundClip: "text",
                                        animationDuration: "5s",
                                    }}
                                >
                                    <AnimatedShinyText className="text-secondary" shimmerWidth={70}>
                                        {t("replyTime")}
                                    </AnimatedShinyText>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
