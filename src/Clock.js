import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
      const formateTime = (date) => { 
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return (`${hours}:${minutes}:${seconds}`);
    };

   

  return (
      <div> 
    <h1>
Current time: {formateTime(time)}
    </h1>
  </div>
  );
}

export default Clock;
