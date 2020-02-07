import React, { Component } from "react";
import AddForm from "./AddForm/AddForm";
import style from "./AddPerson.module.css";

class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  handleShow = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  render() {
    return (
      <div className={style.wrapper}>
        <button className={style.button} onClick={this.handleShow}>
          Добавить
        </button>
        {this.state.showForm ? (
          <AddForm addPerson={this.props.addPerson} />
        ) : null}
      </div>
    );
  }
}

export default AddPerson;
