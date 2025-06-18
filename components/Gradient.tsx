import React from "react";
import { GradientProps } from "@/types";

const Gradient: React.FC<GradientProps> = ({ className }) => {
  return (
    <div className={`hidden md:block w-[480px] h-[480px] rounded-full bg-accent/70 absolute -top-[30%] -right-[4%] z-30 blur-[300px] ${className || ''}`} />
  );
};

export default Gradient;
