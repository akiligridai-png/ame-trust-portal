import ametrustLogo from "@/assets/ametrust-benefits-logo.png";

interface AMETrustBenefitsLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const AMETrustBenefitsLogo = ({ className = "" }: AMETrustBenefitsLogoProps) => {
  return (
    <img
      src={ametrustLogo}
      alt="AMETrust Benefits"
      className={`inline-block ${className}`}
    />
  );
};

export default AMETrustBenefitsLogo;
