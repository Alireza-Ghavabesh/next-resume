"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import LanguageFlipper from '@/components/LanguageFlipper';
import { useLocale, useTranslations } from '@/lib/LocaleProvider.client';

export function HeaderDesktop() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const t = useTranslations('header');


    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const navLinks = [
        { key: "about", href: "#about", label: t("About") },
        { key: "experience", href: "#experience", label: t("Experience") },
        { key: "skills", href: "#skills", label: t("Skills") },
        { key: "projects", href: "#projects", label: t("Projects") },
        { key: "contact", href: "#contact", label: t("Contact") },
    ];

    return (
        <>
            <nav className="hidden md:block py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Left section: Logo and Name */}
                    <div className="flex items-center space-x-2">
                        {/* Placeholder for logo */}
                        <Image src="/logo.png" alt="Pouya Birvand Logo" width={32} height={32} className="rounded-lg" />
                        <AnimatedShinyText className='font-bold text-lg text-secondary' shimmerWidth={20}>Alireza Ghavabesh</AnimatedShinyText>
                    </div>



                    {/* Right section: Navigation links and icons */}
                    <div className="flex items-center space-x-6">
                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-4">
                            {navLinks.map((link) => (
                                <div key={link.key}>
                                    <Link href={link.href}>
                                        <AnimatedShinyText shimmerWidth={20} className='text-secondary'>
                                            {link.label}
                                        </AnimatedShinyText>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-2">
                            {/* Dark mode toggle */}
                            <button
                                className="p-2 rounded-full  hover:bg-gray-200  dark:hover:bg-gray-600 transition-colors duration-300"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? (
                                    // Sun icon for dark mode
                                    <FaSun className="h-6 w-6 text-yellow-500" />
                                ) : (
                                    // Moon icon for light mode
                                    <FaMoon className="h-6 w-6 text-gray-600" />
                                )}
                            </button>
                            {/* Language toggle */}
                            <LanguageFlipper />


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
