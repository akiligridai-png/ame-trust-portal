interface BrandedTextProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Renders "AME Trust Benefits" with branded Verdana font and colors.
 * Light variant: AME/Benefits in navy #273349, Trust in gold #F2D696
 * Dark variant: AME/Benefits in white, Trust in gold #F2D696
 */
const BrandedText = ({ variant = "light", className = "" }: BrandedTextProps) => {
  const navyOrWhite = variant === "dark" ? "#FFFFFF" : "#273349";
  const gold = "#BF4E14";

  return (
    <span
      className={className}
      style={{ fontFamily: "Verdana, Geneva, sans-serif", fontWeight: 900 }}
    >
      <span style={{ color: navyOrWhite }}>AME</span>{" "}
      <span style={{ color: gold }}>Trust</span>{" "}
      <span style={{ color: navyOrWhite }}>Benefits</span>
    </span>
  );
};

export default BrandedText;
