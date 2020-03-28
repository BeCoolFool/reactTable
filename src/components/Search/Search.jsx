import React, { Component } from "react";
import style from "./Search.module.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    console.log(this.props);
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      value: ""
    });
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <form className={style.wrapper} onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className={style.input}
        />
        <button type="submit" className={style.button}>
          Найти
        </button>
      </form>
    );
  }
}

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
