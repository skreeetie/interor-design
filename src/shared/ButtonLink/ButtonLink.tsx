import { Link } from "react-router";
import style from "./style.module.scss";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

export const ButtonLink = ({ to, children }: ButtonProps) => {
  return (
    <Link to={to} className={style.link}>
      {children}
    </Link>
  );
};
