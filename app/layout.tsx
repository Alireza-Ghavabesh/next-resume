// app/layout.tsx (Updated)

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider"
import { DynamicBackground } from "@/components/DynamicBackground"; 


export const metadata: Metadata = {
  title: "Alireza - Fullstack Developer"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Background is now contained in the DynamicBackground Client Component */}
          <DynamicBackground /> 

          <div className="fixed top-0 w-full backdrop-blur z-[11]">
            <Header />
          </div>

          {/* Foreground */}
          <div className="relative z-[10] mt-18">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}