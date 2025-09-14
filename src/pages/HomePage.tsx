import { About } from "../modules/About";
import { Introduce } from "../modules/Introduce";

export const HomePage = () => {
  return (
    <main>
      <Introduce />
      <About />
    </main>
  );
};
