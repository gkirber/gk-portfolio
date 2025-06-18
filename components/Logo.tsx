import Link from "next/link";
import { LogoProps } from "@/types";

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={`text-[28px] font-normal ${className || ''}`}>
      Iurii Rebryk<span className="text-accent text-4xl">.</span>
    </Link>
  );
};

export default Logo;
