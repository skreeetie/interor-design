import { Route, Routes } from "react-router";
import { Layout } from "./pages/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
};
