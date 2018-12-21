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
    <div>
      <i className={`${iconName} icon`} />
      <h1>{displayText}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
