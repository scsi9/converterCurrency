import React from "react";
import s from "./CoursesEUR.module.css";
import getCurses from "../../../api/getCurses";

const { Valute } = await getCurses();
const value = Valute.EUR.Value.toFixed(2);
const color = Valute.EUR.Value - Valute.EUR.Previous;

const EUR = () => {
  return (
    <div className={s.basic}>
      <div className={s.nameCurrency}>Курс EUR</div>
      <div className={color > 0 ? s.colorRed : s.colorGreen}>{value}</div>
    </div>
  );
};

export default EUR;
