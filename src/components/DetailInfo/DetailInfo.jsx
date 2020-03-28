import React, { Fragment } from "react";
import style from "./DetailInfo.module.css";
import AddressInfo from "./AddressInfo/AddressInfo";

const DetailInfo = ({ person }) => {
  return (
    <div className={style.wrapper}>
      <p>
        Выбран пользователь: <b>{`${person.firstName} ${person.lastName}`}</b>
      </p>
      {person.description ? (
        <Fragment>
          <p>Описание:</p>
          <textarea value={person.description} readOnly></textarea>
        </Fragment>
      ) : null}
      {person.address ? <AddressInfo address={person.address} /> : null}
    </div>
  );
};

export default DetailInfo;
