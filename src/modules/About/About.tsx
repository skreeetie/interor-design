import { ButtonLink } from "../../shared/ButtonLink/ButtonLink";
import about from "../../assets/about.jpg";
import style from "./style.module.scss";
import { CeoCard } from "../../shared/CeoCard/CeoCard";

export const About = () => {
  return (
    <section className={style.section}>
      <div className={style.top}>
        <h4 className={style.title}>About</h4>
        <div className={style.divider}></div>
      </div>
      <h2 className={style.text}>
        &#12291;We're one of the best furniture agency. Prioritizing customers
        and makinfg purchases easy are the hallmarks of our agency.&#12291;
      </h2>
      <div className={style.container}>
        <img src={about} alt="Interor" className={style.img} />
        <div className={style.more}>
          <p>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere.
          </p>
          <ButtonLink to="/">Learn More</ButtonLink>
        </div>
        <CeoCard />
      </div>
    </section>
  );
};
