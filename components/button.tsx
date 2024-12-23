import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
  variant?: string;
  onClick?: () => void;
}

const buttonVariants: any = {
  default: "hover:bg-[#2c835f] transition-colors",
  sizes: {
    default: "px-5 py-[18px]",
    sm: "px-6 py-3",
  },
};

export const Button = ({
  children,
  variant = "default",
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-[4px] bg-[--green-color] text-white uppercase text-[12px] leading-[100%] font-[700] ${buttonVariants.default} ${buttonVariants.sizes[variant]} ${className}`}
      style={{
        letterSpacing: "0.07em",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
