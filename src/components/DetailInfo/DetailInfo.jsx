import React from "react";
import style from "./DetailInfo.module.css";

const DetailInfo = ({ person }) => {
  return (
    <div className={style.wrapper}>
      <p>
        Выбран пользователь: <b>{`${person.firstName} ${person.lastName}`}</b>
      </p>
      <p>Описание:</p>
      <textarea>{person.description}</textarea>
      <p>
        Адрес проживания: <b>{person.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{person.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{person.address.state}</b>
      </p>
      <p>
        Индекс: <b>{person.address.zip}</b>
      </p>
    </div>
  );
};

export default DetailInfo;
