import lightBgLogo from "@/assets/ametrust-benefits-light-transparent.png";
import darkBgLogo from "@/assets/ametrust-benefits-dark-transparent.png";

interface AMETrustBenefitsLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

// variant="light" => for light backgrounds (navy + orange wordmark)
// variant="dark"  => for dark backgrounds (white + orange wordmark)
const AMETrustBenefitsLogo = ({ variant = "light", className = "" }: AMETrustBenefitsLogoProps) => {
  const src = variant === "dark" ? darkBgLogo : lightBgLogo;
  return (
    <img
      src={src}
      alt="AMETrust Benefits"
      className={`inline-block ${className}`}
    />
  );
};

export default AMETrustBenefitsLogo;
