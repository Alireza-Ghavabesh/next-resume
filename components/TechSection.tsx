"use client";

import { FC, ReactNode } from "react";
import { TechCard } from "@/components/techCard";

interface TechItem {
  text: string;
  icon: ReactNode;
}

interface TechSectionProps {
  title: string;
  items: TechItem[];
}

export const TechSection: FC<TechSectionProps> = ({ title, items }) => {
  return (
    <section className="space-y-4">
      {/* Section header */}
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-bold text-primary whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-border"></div>
      </div>

      {/* Tech cards */}
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <TechCard key={i} text={item.text} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};
