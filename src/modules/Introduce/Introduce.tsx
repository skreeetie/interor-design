import style from "./style.module.scss";
import interor from "../../assets/interor.jpg";

export const Introduce = () => {
  return (
    <section className={style.section}>
      <div className={style.top}>
        <h1 className={style.title}>
          Design your <br /> interor with high <br /> quality.
        </h1>
        <div className={style.divider}></div>
        <p className={style.text}>
          2022 <br /> all right reserved
        </p>
      </div>
      <img src={interor} alt="Interor" className={style.img} />
      <div className={style["floating-info"]}>
        <div className={style.info}>
          <h3>350+</h3>
          <p>Project Completed</p>
        </div>
        <div className={style.info}>
          <h3>23+</h3>
          <p>Professional teams</p>
        </div>
        <div className={style.info}>
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>
      </div>
    </section>
  );
};
