"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const icons = [
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
];

export default function AnimatedBrandIcons() {
  return (
    <div className="flex justify-center gap-12 mt-12">
      {icons.map(({ Icon, color, label }, i) => (
        <motion.div
          key={label}
          className="flex flex-col items-center group cursor-pointer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
          whileHover={{ rotate: 360, scale: 1.2 }}
        >
          {/* Icon with shimmer overlay */}
          <div className="relative">
            <Icon size={80} color={color} />
            <motion.div
              className="
                absolute inset-0 
                bg-gradient-to-r 
                from-transparent 
                via-black/20 dark:via-white/30 
                to-transparent
              "
              style={{ backgroundSize: "200% 100%" }}
              animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>

          {/* Label with theme-aware text */}
          <span
            className="
              mt-2 text-lg font-semibold 
              text-gray-800 dark:text-gray-200
            "
            style={{ color }}
          >
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
