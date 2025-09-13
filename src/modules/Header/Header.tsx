import { Link } from "react-router";
import { CustomLink } from "../../shared/CustomLink/CustomLink";
import Logo from "../../assets/logo.svg?react";
import style from "./style.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo width={126} height={54} />
      <div className={style.links}>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About us</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/teams">Our Teams</CustomLink>
        <Link to="/contact">Contact us</Link>
      </div>
    </header>
  );
};
