import classNames from "classnames";
import ceo from "../../assets/ceo.png";
// import style from "./style.module.scss";

interface CardProps {
  className?: string;
}

export const CeoCard = ({ className }: CardProps) => {
  return (
    <div className={classNames(className)}>
      <img src={ceo} alt="Ceo photo" />
    </div>
  );
};
