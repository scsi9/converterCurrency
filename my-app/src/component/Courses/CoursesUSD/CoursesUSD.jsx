import React from "react";
import s from "./CoursesUSD.module.css";
import getCurses from "../../../api/getCurses";

const { Valute } = await getCurses();
const value = Valute.USD.Value.toFixed(2);
const color = Valute.USD.Value - Valute.USD.Previous;

const USD = () => {
  return (
    <div className={s.basic}>
      <div className={s.nameCurrency}>Курс USD</div>
      <div className={color > 0 ? s.colorRed : s.colorGreen}>{value}</div>
    </div>
  );
};

export default USD;
