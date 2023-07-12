import React, { useState, useEffect } from "react";
import HelloCardcss from "./HelloCard.module.scss";

const HelloCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentdate = time;
  const timeString = currentdate.toLocaleTimeString();
  const dateString = currentdate.toLocaleDateString();

  return (
    <div className={HelloCardcss.HelloCard}>
      <h3>
        <span>{dateString}</span>
      </h3>
      <h2>{timeString}</h2>
    </div>
  );
};

export default HelloCard;
