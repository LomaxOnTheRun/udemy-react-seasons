import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());

  return (
    <div>
      <h1>
        {season === "winter" ? "Burr... it's chilly" : "Let's hot the beach"}
      </h1>
    </div>
  );
};

export default SeasonDisplay;
