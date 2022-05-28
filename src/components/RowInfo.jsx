import React, { useState } from "react";
import moment from "moment";

const RowInfo = props => {
  const [checked, setChecked] = useState(false);
  function highlight() {
    setChecked(!checked);
  }
  const checkIn = moment(props.booking.checkInDate);
  const checkOut = moment(props.booking.checkOutDate);
  const nightsCalculation = checkOut.diff(checkIn, "days");
  return (
    <tr className={checked ? "highlighted" : ""} onClick={highlight}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{nightsCalculation}</td>
      <td>
        <button
          onClick={() => {
            props.handleOnSelectedCustomerId(props.booking.id);
          }}
          className="btn btn-primary"
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default RowInfo;
