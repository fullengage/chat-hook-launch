import React from "react";
import { cn } from "@/lib/utils";

interface DeepB2BLogoProps {
  variant?: "dark" | "light";
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
}

/**
 * Brand logo image component using high-resolution transparent PNG variants
 * for dark (#040f21) and light (#ffffff / #f8fafc) surfaces.
 */
export const DeepB2BLogo: React.FC<DeepB2BLogoProps> = ({
  variant = "dark",
  subtitleText = "Inteligência de Dados B2B",
  className,
}) => {
  const src = variant === "dark" ? "/logo-deepb2b.png" : "/logo-deepb2b-light.png";

  return (
    <img
      src={src}
      alt={`DeepB2B — ${subtitleText}`}
      width={200}
      height={48}
      className={cn("h-10 sm:h-11 w-auto object-contain select-none", className)}
    />
  );
};

export default DeepB2BLogo;
