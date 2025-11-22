"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa"; 
import { AnimatedShinyText } from "./ui/animated-shiny-text"; 

export function HeaderMobile() {
    // 1. STATE MANAGEMENT
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // 2. EFFECT HOOK for Hydration Fix
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "#contact" },
    ];

    return (
        <>
            {/* HEADER BAR (z-40) - UNCHANGED */}
            <nav className="block md:hidden py-4 relative z-40">
                <div className="PrimariyContainer px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Left section: Logo and Name */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">A</div>
                        <AnimatedShinyText shimmerWidth={50} className='font-bold text-lg'>
                            Alireza Ghavabesh
                        </AnimatedShinyText>
                    </div>

                    {/* Right section: Icons (Theme, Language, Menu) */}
                    <div className="flex items-center space-x-2">
                        
                        {/* 1. MOBILE DARK MODE TOGGLE (Hydration Fixed) */}
                        <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            {mounted ? (
                                theme === "dark" ? (
                                    <FaSun className="h-5 w-5 text-yellow-500" />
                                ) : (
                                    <FaMoon className="h-5 w-5 text-gray-600" />
                                )
                            ) : (
                                <FaMoon className="h-5 w-5 text-gray-600" />
                            )}
                        </button>

                        {/* 2. Language Toggle (Placeholder) */}
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300" aria-label="Toggle language">
                            <FaGlobe className="h-5 w-5 text-blue-500" />
                        </button>
                        
                        {/* 3. HAMBURGER/CLOSE BUTTON (Animated) */}
                        <button 
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-800"
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu"
                        >
                            <div className="flex flex-col justify-center items-center h-6 w-6">
                                {/* Top line */}
                                <span 
                                    className={`
                                        block h-0.5 w-6 bg-gray-600 dark:bg-white rounded-full
                                        transform transition-all duration-300 ease-in-out
                                        ${isOpen ? 'translate-y-1.5 rotate-45' : '-translate-y-0.5'}
                                    `}
                                />
                                {/* Middle line */}
                                <span 
                                    className={`
                                        block h-0.5 w-6 bg-gray-600 dark:bg-white rounded-full 
                                        transform transition-opacity duration-300 ease-in-out my-1
                                        ${isOpen ? 'opacity-0' : 'opacity-100'}
                                    `}
                                />
                                {/* Bottom line */}
                                <span 
                                    className={`
                                        block h-0.5 w-6 bg-gray-600 dark:bg-white rounded-full
                                        transform transition-all duration-300 ease-in-out
                                        ${isOpen ? '-translate-y-1.5 -rotate-45' : 'translate-y-0.5'}
                                    `}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* 🛑 ANIMATED DROPDOWN MENU FIX: NO BACKGROUND COLOR, ONLY PURE BLUR */}
            <div 
                id="mobile-menu"
                className={`
                    absolute w-full top-0 mt-18
                    backdrop-blur-xl // <-- ONLY BLUR, NO BG COLOR
                    shadow-lg 
                    transform transition-all duration-800 ease-in-out z-45
                    ${isOpen 
                        ? 'max-h-96 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 pointer-events-none'
                    }
                    overflow-hidden md:hidden
                `}
            >
                {/* The links container will now be rendered over the pure blur */}
                <div className="flex flex-col space-y-1 py-3 px-4 sm:px-6 lg:px-8 border-t dark:border-gray-700">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            onClick={() => setIsOpen(false)} 
                            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg font-medium transition-colors text-lg"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}