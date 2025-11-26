"use client";
import React from "react";

interface Props {
  text?: string;
  onClick?: () => void;
}

export const MyButton = (props: Props) => {
  const { text = "About Me", onClick } = props;

  return (
    <button
      onClick={onClick}
      className="
        px-8 py-3 font-semibold rounded-full transition-all duration-300 backdrop-blur-xs
        border-2 bg-[#33deed]/15
        text-cyan-600 border-cyan-600 hover:bg-cyan-600/10 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
        dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-400/10 dark:shadow-[0_0_15px_rgba(34,211,238,0.5)] dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
      "
    >
      {text}
    </button>
  );
};
