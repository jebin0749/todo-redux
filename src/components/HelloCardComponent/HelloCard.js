import React, { useState, useEffect } from 'react';
import HelloCardcss from './HelloCard.module.scss';

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
  // const year = currentdate.getFullYear();
  // const day = currentdate.getDay();
  // const month = currentdate.getMonth();
  const timeString = currentdate.toLocaleTimeString();
  const dateString = currentdate.toLocaleDateString();

  return (
    <div className={HelloCardcss.HelloCard}>
      <div>
        <h3>HELLO, JEBIN</h3>
      </div>
      <div>
        <h3><span>{dateString}</span></h3>
        <h2>{timeString}</h2>
      </div>
    </div>
  );
};

export default HelloCard;
