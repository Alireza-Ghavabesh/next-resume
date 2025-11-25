import { AnimatedShinyText } from "./ui/animated-shiny-text";

type Props = {
  aboveText: string;
  belowText: string;
};

export function Card({
  aboveText = "2+",
  belowText = "Years Experience",
}: Props) {
  return (
    <div
      className="
        group relative p-6 rounded-2xl
        border
        bg-white/70 dark:bg-black/30
        backdrop-blur-md
        shadow-sm dark:shadow-lg
        transition-all duration-500
        hover:shadow-[#33deed]/30 hover:border-[#33deed]/40
      "
    >
      {/* Top Text */}
      <div
        className="
          text-3xl sm:text-4xl font-extrabold
          text-black dark:text-[#33deed]
          transition-colors duration-300
        "
      >
        {aboveText}
      </div>

      {/* Shiny Animated Text */}
      <div className="mt-2">
        <AnimatedShinyText
          shimmerWidth={20}
          className="
            text-gray-700 dark:text-[#33deed]/90
            text-base sm:text-lg font-medium
          "
        >
          {belowText}
        </AnimatedShinyText>
      </div>
    </div>
  );
}
