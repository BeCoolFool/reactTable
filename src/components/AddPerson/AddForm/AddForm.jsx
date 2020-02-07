import React, { Component } from "react";
import style from "./AddForm.module.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isID: "",
      isFName: "",
      isSName: "",
      isEmail: "",
      isPhone: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  AddToTable = () => {
    const { isID, isFName, isSName, isEmail, isPhone } = this.state;
    this.setState({
      isID: "",
      isFName: "",
      isSName: "",
      isEmail: "",
      isPhone: ""
    });
    this.props.addPerson(isID, isFName, isSName, isEmail, isPhone);
  };
  render() {
    const { isID, isFName, isSName, isEmail, isPhone } = this.state;
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.elementWrapper}>
            <span className={style.head}>Id</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={isID}
              id="isID"
              className={style.input}
            />
          </div>
          <div className={style.elementWrapper}>
            <span className={style.head}>First Name</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={isFName}
              id="isFName"
              className={style.input}
            />
          </div>
          <div className={style.elementWrapper}>
            <span className={style.head}>Second Name</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={isSName}
              id="isSName"
              className={style.input}
            />
          </div>
          <div className={style.elementWrapper}>
            <span className={style.head}>E-mail</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={isEmail}
              id="isEmail"
              className={style.input}
            />
          </div>
          <div className={style.elementWrapper}>
            <span className={style.head}>Phone</span>
            <input
              type="text"
              onChange={this.handleChange}
              value={isPhone}
              id="isPhone"
              className={style.input}
            />
          </div>
        </div>
        {isID.length &&
        isFName.length &&
        isSName.length &&
        isEmail.length &&
        isPhone.length ? (
          <button className={style.button} onClick={this.AddToTable}>
            Добавить в таблицу
          </button>
        ) : null}
      </div>
    );
  }
}

export default AddForm;
