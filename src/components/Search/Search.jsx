import React, { useState } from "react";
import style from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const handleChange = event => setValue(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    setValue("");
    onSearch(value);
  };

  return (
    <form className={style.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Найти
      </button>
    </form>
  );
};

export default Search;

/* 
const Seacrh = ({ onSearch }) => {
  const [value, setValue] = useState("");
  handleChange = event => setValue(event.target.value);
  handleSubmit = event => {
    event.preventDefault();
    setValue("");
    onSearch(value);
  };
}
*/
