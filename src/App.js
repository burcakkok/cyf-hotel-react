import React from "react";

import Bookings from "../src/components/Bookings";
import "./App.css";
import Heading from "../src/components/Heading";
import TouristInfoCards from "../src/components/TouristInfoCards";
import Footer from "../src/components/Footer";
import Restaurant from "../src/components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
