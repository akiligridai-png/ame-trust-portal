interface AMETriangleLogoProps {
  variant?: "light" | "dark";
  size?: number;
  showText?: boolean;
  className?: string;
}

const AMETriangleLogo = ({ variant = "light", size = 48, showText = true, className = "" }: AMETriangleLogoProps) => {
  const navyColor = "#273349";
  const goldColor = "#F2D696";
  const textColor = variant === "dark" ? "#FFFFFF" : navyColor;

  // Scale based on size (base viewBox is 200x260 with text, 200x180 without)
  const viewHeight = showText ? 260 : 180;

  return (
    <svg
      width={size}
      height={size * (viewHeight / 200)}
      viewBox={`0 0 200 ${viewHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      aria-label="AME Trust Logo"
    >
      {/* Triangle "A" shape */}
      <path
        d="M100 10 L190 170 L10 170 Z"
        fill="none"
        stroke={navyColor}
        strokeWidth="12"
        strokeLinejoin="round"
      />
      
      {/* Inner triangle cutout (the hole in the A) */}
      <path
        d="M100 55 L145 140 L55 140 Z"
        fill={variant === "dark" ? "transparent" : "transparent"}
        stroke="none"
      />

      {/* Gold crossbar band */}
      <rect
        x="38"
        y="115"
        width="124"
        height="18"
        rx="2"
        fill={goldColor}
      />

      {/* Cover the triangle lines behind the gold bar for clean look */}
      <rect
        x="42"
        y="117"
        width="116"
        height="14"
        fill={goldColor}
      />

      {showText && (
        <>
          {/* AME text */}
          <text
            x="100"
            y="210"
            textAnchor="middle"
            fontFamily="Verdana, Geneva, sans-serif"
            fontWeight="900"
            fontSize="36"
            fill={textColor}
            letterSpacing="6"
          >
            AME
          </text>
          {/* TM superscript */}
          <text
            x="155"
            y="195"
            textAnchor="start"
            fontFamily="Verdana, Geneva, sans-serif"
            fontWeight="400"
            fontSize="10"
            fill={textColor}
          >
            ™
          </text>
          {/* MULTIPLE EMPLOYER subtitle */}
          <text
            x="100"
            y="245"
            textAnchor="middle"
            fontFamily="Verdana, Geneva, sans-serif"
            fontWeight="400"
            fontSize="14"
            fill={textColor}
            letterSpacing="3"
          >
            MULTIPLE EMPLOYER
          </text>
        </>
      )}
    </svg>
  );
};

export default AMETriangleLogo;
