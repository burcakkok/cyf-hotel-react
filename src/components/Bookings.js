import React, { useState, useEffect } from "react";

import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";

let allBookings = [];

const Bookings = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.error) {
          alert(data.error);
          throw new Error(data.error);
        }
        allBookings = data;
        setBookings(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const filteredBookings = allBookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults bookings={bookings} />
        ) : (
          <h3 className="loading-data-h1">Loading..</h3>
        )}
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
