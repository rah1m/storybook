import { FC, ReactNode } from "react";
import cn from "classnames";

import buttonStyles from './Button.module.scss'


type ButtonColor = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";

interface Props {
  onClick?: () => void;
  children: ReactNode;
  color?: ButtonColor
  outlined?: boolean;
}
const Button: FC<Props> = ({ onClick, children, color = "primary", outlined = false }) => {
  return <button className={cn(buttonStyles.button, {
    [buttonStyles.button__primary]: color === "primary" && !outlined,
    [buttonStyles.button__secondary]: color === "secondary" && !outlined,
    [buttonStyles.button__danger]: color === "danger" && !outlined,
    [buttonStyles.button__success]: color === "success" && !outlined,
    [buttonStyles.button__warning]: color === "warning" && !outlined,
    [buttonStyles.button__info]: color === "info" && !outlined,
    [buttonStyles.button__light]: color === "light" && !outlined,
    [buttonStyles.button__dark]: color === "dark" && !outlined,
    [buttonStyles.button__outlined]: outlined
  })} onClick={onClick}>{children}</button>;
};

export default Button;
