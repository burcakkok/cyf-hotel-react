import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    // console.log("Fetching data...");

    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(res => res.json())
      .then(data => {
        setCustomer(data);
      });
  }, [props.customerId]);

  return (
    <div>
      <h3>Customer Profile:</h3>
      <ul>
        <li>{`Customer id: ${customer.id}`}</li>
        <li>{`Name: ${customer.firstName}`}</li>
        <li>{`Email: ${customer.email}`}</li>
        <li>{`Phone Number: ${customer.phoneNumber}`}</li>
        <li>{`Vip: ${customer.vip ? "Yes" : "No"}`}</li>
      </ul>
      <button onClick={props.onClose} className="btn btn-primary">
        Close profile
      </button>
    </div>
  );
};

export default CustomerProfile;
