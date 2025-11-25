import React from 'react';

interface Props {
  text?: string;
  onClick?: () => void;
}

export const MyButton = (props: Props) => {
  const { text = 'About Me', onClick } = props;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <button
        onClick={onClick}
        className="px-8 py-3 text-cyan-400 font-semibold text-lg border-2 border-cyan-400 rounded-full bg-transparent hover:bg-cyan-400/10 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
      >
        {text}
      </button>
    </div>
  );
};
