import React, { useEffect, useState } from "react";
import getCurses from "../../../api/getCurses";
import s from "./Get.module.css";

const { Valute } = await getCurses();

const Get = () => {
  const [names, setNames] = useState([]);

  const [currencyTo, setCurrencyTo] = useState("USD");
  const [valueFrom, setValueFrom] = useState(100);
  const [valueTo, setValueTo] = useState(0);

  const calculate = (res, currency) => {
    const result = res / Valute[currencyTo].Value;
    setValueTo(result.toFixed(2));
  };

  useEffect(() => {
    const getData = async () => {
      const { Valute } = await getCurses();
      setNames(Object.keys(Valute));
      calculate(valueFrom, currencyTo);
    };
    getData();
  }, [currencyTo, valueFrom]);

  const changeNameTo = (e) => {
    const name = e.target.value;
    setCurrencyTo(name);
    calculate(valueFrom, name);
  };

  const changeValueFrom = (e) => {
    const value = e.target.value;
    setValueFrom(value);
    calculate(value, currencyTo);
  };

  return (
    <div>
      <div className={s.right}>
        <div>Отдаю:</div>

        <div className={s.value}>
          <div className={s.test}>RUB</div>
        </div>
        <input type="text" onChange={changeValueFrom} value={valueFrom}></input>
      </div>
      <div className={s.left}>
        <div>Получаю:</div>
        <select className={s.test} onChange={changeNameTo} value={currencyTo}>
          {names.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        <input onChange={changeValueFrom} value={valueTo}></input>
      </div>
    </div>
  );
};

export default Get;
