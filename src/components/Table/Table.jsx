import React from "react";
import style from "./Table.module.css";

const Table = props => {
  const sortbyHash = {
    none: style.empty,
    decreasing: style.decr,
    ascending: style.asc
  };
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th onClick={() => props.onTableSort("id")}>
            ID
            {props.sortField === "id" ? (
              <span className={sortbyHash[props.sortBy]}></span>
            ) : null}
          </th>
          <th onClick={() => props.onTableSort("firstName")}>
            First Name
            {props.sortField === "firstName" ? (
              <span className={sortbyHash[props.sortBy]}></span>
            ) : null}
          </th>
          <th onClick={() => props.onTableSort("lastName")}>
            Last Name
            {props.sortField === "lastName" ? (
              <span className={sortbyHash[props.sortBy]}></span>
            ) : null}
          </th>
          <th onClick={() => props.onTableSort("email")}>
            E-mail
            {props.sortField === "email" ? (
              <span className={sortbyHash[props.sortBy]}></span>
            ) : null}
          </th>
          <th onClick={() => props.onTableSort("phone")}>
            Phone
            {props.sortField === "phone" ? (
              <span className={sortbyHash[props.sortBy]}></span>
            ) : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr
            key={item.id + item.phone}
            onClick={() => props.onPersonSelect(item)}
          >
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
