"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BtnModel {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
  bgColor: "primary" | "secondary";
}

const Button: React.FC<BtnModel> = ({
  className,
  handleClick,
  bgColor,
  ...props
}) => {
  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ opacity: 0.8 }}
      className={`${
        bgColor === "primary" ? "bg-primary" : "bg-secondary"
      } text-lg text-white font-bold rounded-lg px-4 py-2 drop-shadow-xl ${className}`}>
      {props.children}
    </motion.button>
  );
};

export default Button;
