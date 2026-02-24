import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-gold transition-colors mb-4"
    >
      <ArrowLeft className="w-3.5 h-3.5" />
      Back to Home
    </Link>
  );
};

export default BackToHome;
