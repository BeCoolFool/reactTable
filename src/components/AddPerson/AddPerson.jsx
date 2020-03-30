import React, { useState } from "react";
import AddForm from "./AddForm/AddForm";
import style from "./AddPerson.module.css";

const AddPerson = ({ addPerson }) => {
  const [showForm, setForm] = useState(false);
  const handleShow = () => setForm(prev => !prev);
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={handleShow}>
        Добавить
      </button>
      {showForm ? <AddForm addPerson={addPerson} /> : null}
    </div>
  );
};

export default AddPerson;
