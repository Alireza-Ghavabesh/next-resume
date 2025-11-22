"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"


export function HeaderDesktop() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <nav className="hidden md:block py-4">
                <div className="PrimariyContainer px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    {/* Left section: Logo and Name */}
                    <div className="flex items-center space-x-2">
                        {/* Placeholder for logo */}
                        <Image src="/logo.png" alt="Pouya Birvand Logo" width={32} height={32} className="rounded-lg" />
                        <span className="">
                            <AnimatedShinyText shimmerWidth={50} className='font-bold text-lg'>Alireza Ghavabesh</AnimatedShinyText>
                        </span>
                    </div>



                    {/* Right section: Navigation links and icons */}
                    <div className="flex items-center space-x-6">
                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-4  text-sm font-bold">
                            <AnimatedShinyText shimmerWidth={50} className="px-3 py-2">
                                <Link href="#about">About</Link>
                            </AnimatedShinyText>

                            <AnimatedShinyText shimmerWidth={50} className="px-3 py-2">
                                <Link href="#experience">Experience</Link>
                            </AnimatedShinyText>

                            <AnimatedShinyText shimmerWidth={50} className="px-3 py-2">
                                <Link href="#skills">Skills</Link>
                            </AnimatedShinyText>

                            <AnimatedShinyText shimmerWidth={50} className="px-3 py-2">
                                <Link href="#projects">Projects</Link>
                            </AnimatedShinyText>

                            <AnimatedShinyText shimmerWidth={50} className="px-3 py-2">
                                <Link href="#contact">Contact</Link>
                            </AnimatedShinyText>

                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-2">
                            {/* Dark mode toggle */}
                            <button
                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? (
                                    // Sun icon for dark mode
                                    <FaSun className="h-5 w-5 text-yellow-500" />
                                ) : (
                                    // Moon icon for light mode
                                    <FaMoon className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                            {/* Language toggle */}
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300">
                                {/* Globe icon */}
                                <FaGlobe className="h-5 w-5 text-blue-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
