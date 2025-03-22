import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterHeadingProps {
  className?: string;
}

export function TypewriterHeading({ className = '' }: TypewriterHeadingProps) {
  return (
    <div className={className}>
      <div className="h-[1.5em] flex items-center">
        <Typewriter
          options={{
            strings: [
              'Minecraft Servers',
              'Classic Setups',
              'Designed for <span class="handwriting-underline bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text">Success</span>'
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            pauseFor: 2000,
            wrapperClassName: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent text-6xl md:text-7xl font-bold",
            cursorClassName: "text-minecraft-blue text-6xl md:text-7xl font-bold animate-cursor-flame",
            skipAddStyles: true,
            html: true
          }}
        />
      </div>
    </div>
  );
}