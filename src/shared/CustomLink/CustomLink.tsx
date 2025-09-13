import classNames from "classnames";
import { Link, useMatch } from "react-router";
import style from "./style.module.scss";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = ({ children, to }: LinkProps) => {
  const match = useMatch(to);
  return (
    <Link
      className={classNames(style.link, {
        [style.active]: match,
      })}
      to={to}
    >
      {children}
    </Link>
  );
};
