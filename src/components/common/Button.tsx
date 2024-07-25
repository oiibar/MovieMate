import React from "react";

// Define the possible button variants
type ButtonVariant = "glowing" | "default";

// Define the styles for each variant
const buttonVariants: Record<ButtonVariant, string> = {
  glowing:
    "border-2 border-orange bg-orange rounded-full px-6 py-1 text-primary",
  default:
    "border-2 border-primary rounded-full px-6 py-1 text-primary hover:bg-primary hover:text-orange transition-colors duration-150",
};

interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  text = "Click",
  variant = "default",
}) => {
  return <button className={buttonVariants[variant]}>{text}</button>;
};

export default Button;
