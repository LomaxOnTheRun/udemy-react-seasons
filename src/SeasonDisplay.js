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
  const displayText =
    season === "winter" ? "Burr... it's chilly" : "Let's go to the beach";
  const icon = season === "winter" ? "snowflake outline" : "sun outline";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{displayText}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
