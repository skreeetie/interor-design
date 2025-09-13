import { Link } from "react-router";
import { CustomLink } from "../../shared/CustomLink/CustomLink";
import Logo from "../../assets/logo.svg?react";
import style from "./style.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo width={126} height={54} />
        <div className={style.links}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About us</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
          <CustomLink to="/teams">Our Teams</CustomLink>
          <Link className={style.contact} to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
};
