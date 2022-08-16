import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

const TimeAndLocation = ({data}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(data.dt, data.timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {data.country}, {data.name.split('Province')}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;