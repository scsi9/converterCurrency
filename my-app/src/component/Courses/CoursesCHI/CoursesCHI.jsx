import React from "react";
import s from "./CoursesCHI.module.css";
import getCurses from "../../../api/getCurses";

const { Valute } = await getCurses();
const value = Valute.CHF.Value.toFixed(2);

const CHI = () => {
  const color = Valute.CHF.Value - Valute.CHF.Previous;

  return (
    <div className={s.basic}>
      <div className={s.nameCurrency}>Курс CHF</div>
      <div className={color > 0 ? s.colorRed : s.colorGreen}>{value}</div>
    </div>
  );
};

export default CHI;
