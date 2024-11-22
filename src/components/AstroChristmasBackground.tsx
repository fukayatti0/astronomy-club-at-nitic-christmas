import { useEffect, useState } from "react";
import React from "react";

interface StarProps {
  x: number;
  y: number;
  size: number;
  twinkle: number;
  color: string;
}

interface SnowflakeProps {
  id: string;
  left: string;
  animationDelay: string;
  size: number;
}

const AstroChristmasBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([]);

  useEffect(() => {
    // Generate random stars
    const colors = ["#FFD700", "#FF69B4", "#87CEEB", "#ADFF2F", "#FF4500"];
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.2,
      twinkle: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setStars(newStars);

    // Generate snowflakes
    const newSnowflakes = Array.from({ length: 200 }, (_, i) => ({
      id: `snow-${i}`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      size: Math.random() * 1.5 + 0.5, // Adjusted size to be smaller
    }));
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <div className="absolute inset-0 -z-10">
        {/* Stars */}
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}rem`,
              height: `${star.size}rem`,
              backgroundColor: star.color,
              animation: `twinkle ${star.twinkle}s infinite`,
            }}
          />
        ))}
        {/* Northern Lights Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-500 via-red-500 to-black animate-aurora" />
        {/* Christmas Tree Constellation */}
        {/* Shooting Star */}
        <div className="absolute animate-shooting-star">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45" />
        </div>
        {/* Snow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {snowflakes.map((snowflake) => (
            <div
              key={snowflake.id}
              className="absolute animate-snowfall snowflake"
              style={{
                left: snowflake.left,
                animationDelay: snowflake.animationDelay,
                width: `${snowflake.size}rem`,
                height: `${snowflake.size}rem`,
                transform: "translateY(100vh) translateX(0)", // Initial position at the bottom
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-0">{children}</div>
    </div>
  );
};

// Add custom animations to Tailwind
const style = document.createElement("style");
style.textContent = `
  @keyframes aurora {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
  @keyframes shooting-star {
    0% { transform: translateX(-100%) translateY(-100%); }
    100% { transform: translateX(100%) translateY(100%); }
  }
  @keyframes snowfall {
    0% { transform: translateY(-100vh) translateX(0); } /* Start above the top */
    100% { transform: translateY(110vh) translateX(0); }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .animate-aurora { animation: aurora 8s ease-in-out infinite; }
  .animate-shooting-star {
    animation: shooting-star 2s linear infinite;
    top: 0;
    left: 0;
  }
  .animate-snowfall {
    animation: snowfall 10s linear infinite;
  }
  .snowflake::before {
    content: '❄';
    display: block;
    font-size: inherit;
    color: white;
  }
`;
document.head.appendChild(style);

export default AstroChristmasBackground;
