"use client";

import React, { useState, useEffect } from 'react'; // 👈 Import useState and useEffect
import { FaGlobe } from 'react-icons/fa';
import { useLocale } from "@/lib/LocaleProvider.client"; 

export default function LanguageFlipper() {
  const { locale, setLocale } = useLocale();
  // 💡 NEW: State to track if the component has mounted client-side
  const [mounted, setMounted] = useState(false);

  // 💡 NEW: Set mounted to true after first render (i.e., after hydration)
  useEffect(() => {
    setMounted(true);
  }, []);

  const getNextLocale = () => {
    if (locale === 'en') return 'fa';
    if (locale === 'fa') return 'zh';
    return 'en'; // Defaults to English after Mandarin
  };

  const handleClick = () => {
    setLocale(getNextLocale()); 
  };
  
  // 💡 NEW: Use a static placeholder value for the server render
  const nextLanguageLabel = 
    !mounted 
    ? 'Switch Language' // Static value used during SSR/initial hydration
    : locale === 'en' ? 'Switch to Farsi' : locale === 'fa' ? 'Switch to Mandarin' : 'Switch to English';

  // 💡 NEW: Optional: Hide the entire component if it relies heavily on client state
  // if (!mounted) return null; 

  return (
    <div
      onClick={handleClick}
      className="  hover:bg-gray-20  primaryDuration flex items-center justify-center p-2 rounded-full  hover:bg-gray-200  dark:hover:bg-gray-600 transition-colors duration-300"
      // Use the calculated label, which is static on the server
      title={nextLanguageLabel} 
      aria-label={nextLanguageLabel}
    >
      <FaGlobe className="h-4 w-4 md:h-6 md:w-6 text-blue-500"/>
    </div>
  );
}
