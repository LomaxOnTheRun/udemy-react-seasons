import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    displayText: "Let's hit the beach!",
    iconName: "sun outline"
  },
  winter: {
    displayText: "Brr... it's cold!",
    iconName: "snowflake outline"
  }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { displayText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{displayText}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
