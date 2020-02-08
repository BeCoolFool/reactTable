import React, { Fragment } from "react";

const AddressInfo = props => {
  return (
    <Fragment>
      <p>
        Адрес проживания: <b>{props.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{props.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{props.address.state}</b>
      </p>
      <p>
        Индекс: <b>{props.address.zip}</b>
      </p>
    </Fragment>
  );
};

export default AddressInfo;
