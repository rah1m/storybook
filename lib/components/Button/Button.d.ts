import { FC, ReactNode } from "react";
declare type ButtonColor = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
export interface Props {
    onClick?: () => void;
    children: ReactNode;
    color?: ButtonColor;
    outlined?: boolean;
}
declare const Button: FC<Props>;
export default Button;
