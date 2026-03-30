import React from "react";
import type { ButtonProps } from "antd/es/button";
import { Button as AntdButton } from "antd";

// interface VariantButtonProps extends Omit<ButtonProps, 'type'> {
//   variant: Variant;
// } // Maybe add a variant prop later if we want to have more control over the button styles

interface ButtonComponentProps extends ButtonProps {}

const Button: React.FC<ButtonComponentProps> = ({
  type = "default",
  variant= "solid",
  color,
  children,
  ...props
}) => {
  const typeMap: Record<string, ButtonProps["type"]> = {
    default: "default",
    primary: "primary",
    dashed: "dashed",
    text: "text",
    link: "link",
  };
  const variantMap: Record<string, ButtonProps["variant"]> = {
    link: "link",
    text: "text",
    dashed: "dashed",
    outlined: "outlined",
    solid: "solid",
    filled: "filled",
  };

  return (
    <AntdButton color={color} type={typeMap[type]} variant={variantMap[variant]} {...props}>
      {children}
    </AntdButton>
  );
};

export default Button;
