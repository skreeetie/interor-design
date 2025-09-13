import style from "./style.module.scss";

export const Introduce = () => {
  return (
    <section className={style.section}>
      <div className={style.top}>
        <h1 className={style.title}>
          Design your <br /> interor with high <br /> quality.
        </h1>
        <div className={style.divider}></div>
      </div>
    </section>
  );
};
