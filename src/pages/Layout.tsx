import { Outlet } from "react-router";
import { Header } from "../modules/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
