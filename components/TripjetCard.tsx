"use client";

import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

interface TripjetCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tech: string[];
}

export const TripjetCard: FC<TripjetCardProps> = ({
  title,
  description,
  imageSrc,
  tech,
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-xl transition-colors duration-300 group hover:border-darkBlue dark:hover:border-lightBlue border-2",
        "bg-white dark:bg-neutral-950",
        "border-zinc-200 dark:border-zinc-800"
      )}
    >
      {/* Image wrapper */}
      <div className="relative h-64 w-full overflow-hidden ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Shine sweep */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:blur-sm before:opacity-0 before:group-hover:opacity-100 before:animate-shimmer" />
        </div>

        {/* Bottom fade effect */}
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white ">
          {title}
        </h3>
        <AnimatedShinyText className="text-secondary" shimmerWidth={70}>
          {description}
        </AnimatedShinyText>
        

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs border border- px-2 py-1 font-bold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
