import React from "react";

const shapes = { circle: "rounded-[50%]", square: "rounded-none" } as const;
const variants = {
  outline: { gray_900_63: "border border-gray-900_63 border-solid" },
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900_01",
    gray_900_0c: "bg-gray-900_0c",
  },
} as const;
const sizes = { xs: "p-[5px]", sm: "p-3", md: "p-[15px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "sm",
  variant = "fill",
  color = "gray_900_0c",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
