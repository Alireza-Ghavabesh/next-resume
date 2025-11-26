"use client"
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { useTranslations } from "@/lib/LocaleProvider.client";
import { useEffect, useState } from "react";

export default function Footer() {
  const t = useTranslations('footer');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) {
      return null;
  }

  return (
    <footer className="border-t border-border backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <AnimatedShinyText className="text-secondary" shimmerWidth={50}>
          {t("copyright")}
        </AnimatedShinyText>
      </div>
    </footer>
  );
}
