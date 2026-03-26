interface AMETrustBenefitsLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const AMETrustBenefitsLogo = ({ variant = "dark", className = "" }: AMETrustBenefitsLogoProps) => {
  const ameColor = variant === "dark" ? "#FFFFFF" : "#273349";
  const trustColor = "#C1692D";
  const benefitsColor = variant === "dark" ? "#FFFFFF" : "#273349";

  return (
    <svg
      viewBox="0 0 280 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-label="AME Trust Benefits"
    >
      {/* Line 1: AMETrust */}
      <text
        x="140"
        y="32"
        textAnchor="middle"
        fontFamily="Verdana, Geneva, sans-serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="1"
      >
        <tspan fill={ameColor}>AME</tspan>
        <tspan fill={trustColor} fontStyle="normal">Trust</tspan>
      </text>
      {/* Line 2: B e n e f i t s — spans from A to T */}
      <text
        x="42"
        y="58"
        textAnchor="start"
        fontFamily="Verdana, Geneva, sans-serif"
        fontWeight="400"
        fontSize="15"
        letterSpacing="14.5"
        fill={benefitsColor}
      >
        Benefits
      </text>
    </svg>
  );
};

export default AMETrustBenefitsLogo;
