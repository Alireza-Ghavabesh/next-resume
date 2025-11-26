"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import LanguageFlipper from '@/components/LanguageFlipper';
import Image from 'next/image';
import { useLocale, useTranslations } from '@/lib/LocaleProvider.client';
import { Squash as Hamburger } from 'hamburger-react'


export function HeaderMobile() {
    // 1. STATE MANAGEMENT
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { locale, setLocale } = useLocale();
    const t = useTranslations('header');
    const t_common = useTranslations('common');

    // 2. EFFECT HOOK for Hydration Fix
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleMenu = () => setIsOpen(!isOpen);

    // 2. CONDITIONAL LINKS: Use translated links only AFTER mounting
    const navLinks =  [
        { href: "#about", label: t("About") },
        { href: "#experience", label: t("Experience") },
        { href: "#skills", label: t("Skills") },
        { href: "#projects", label: t("Projects") },
        { href: "#contact", label: t("Contact") },
    ] 

    return (
        <>
            {/* HEADER BAR (z-40) - UNCHANGED */}
            <nav className="block md:hidden py-4 relative z-40">
                <div className="PrimariyContainer px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Left section: Logo and Name */}
                    <div className="flex items-center space-x-2">
                        <Image src="/logo.png" alt="Pouya Birvand Logo" width={32} height={32} className="rounded-lg" />
                        <AnimatedShinyText shimmerWidth={50} className='font-bold text-sm'>
                            {t_common("name")}
                        </AnimatedShinyText>
                        
                    </div>

                    {/* Right section: Icons (Theme, Language, Menu) */}
                    <div className="flex items-center">

                        {/* 1. MOBILE DARK MODE TOGGLE (Hydration Fixed) */}
                        <button
                            className="p-2 rounded-full  hover:bg-gray-200  dark:hover:bg-gray-600 transition-colors primaryDuration"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            {mounted ? (
                                theme === "dark" ? (
                                    <FaSun className="h-4 w-4 text-yellow-500" />
                                ) : (
                                    <FaMoon className="h-4 w-4 text-gray-600" />
                                )
                            ) : (
                                <FaMoon className="h-4 w-4 text-gray-600" />
                            )}
                        </button>

                        {/* 2. Language Toggle (Placeholder) */}
                        <LanguageFlipper />

                        <Hamburger
                            toggled={isOpen}
                            toggle={toggleMenu}
                            // You can customize color, size, duration, and type of animation
                            size={20}
                            duration={0.3}
                        />



                    </div>
                </div>
            </nav>

            {/* 🛑 ANIMATED DROPDOWN MENU FIX: NO BACKGROUND COLOR, ONLY PURE BLUR */}
            <div
                id="mobile-menu"
                className={`
                    w-full top-0
                    backdrop-blur-xl // <-- ONLY BLUR, NO BG COLOR
                    shadow-lg 
                    transform transition-all  ease-in-out z-45
                    ${isOpen
                        ? 'max-h-96 opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 pointer-events-none'
                    }
                    overflow-hidden md:hidden duration-300
                `}
            >
                {/* The links container will now be rendered over the pure blur */}
                <div className="flex flex-col space-y-1 py-3 px-4 sm:px-6 lg:px-8 border-t dark:border-gray-700">
                    {/* Loop through the conditionally set navLinks */}
                    {navLinks.map((link, index) => (
                        <AnimatedShinyText
                            key={link.href} // Use href as key for stability
                            // Use the combined class for clean code
                            className='w-full'
                            // Stagger the reveal only when open
                            style={{
                                transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                                    block w-full hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg 
                                    transition-all duration-300 text-sm font-yekan
                                    ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                                    // 3. CONDITIONAL ALIGNMENT: Use 'text-right' only after mounting AND if locale is 'fa'
                                    ${locale === 'fa' ? 'text-right' : 'text-left'} w-full 
                                    `}
                            >
                                {link.label}
                            </Link>
                        </AnimatedShinyText>
                    ))}
                </div>
            </div>
        </>
    )
}
