import React, { useState, useEffect } from "react";

function MartianPhotoFetcher() {
  const [marsPhotoData, setMarsPhotoData] = useState(null);

  useEffect(() => {
    console.log("Fetching data from NASA");

    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
    )
      .then(res => res.json())
      .then(data => {
        setMarsPhotoData(data);
      });
  }, []);

  if (marsPhotoData) {
    return <img src={marsPhotoData.photos[0].img_src} alt="Martian surface" />;
  } else {
    return null;
  }
}

export default MartianPhotoFetcher;
