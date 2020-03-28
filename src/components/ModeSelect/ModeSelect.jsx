import React from "react";
import style from "./ModeSelect.module.css";

const ModeSelect = props => {
  const smallData =
    "https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const bigData =
    "https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  return (
    <div className={style.wrapper}>
      <button
        className={style.button}
        onClick={() => props.selectData(smallData)}
      >
        Малый объём данных
      </button>
      <button
        className={style.button}
        onClick={() => props.selectData(bigData)}
      >
        Большой объём данных
      </button>
    </div>
  );
};

export default ModeSelect;
