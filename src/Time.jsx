import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (date) => {
    return is24Hour ? date.toLocaleTimeString("en-GB") : date.toLocaleTimeString("en-US");
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${
      is24Hour ? "bg-green-900" : "bg-blue-300"
    }`}>
      <div className="text-6xl font-mono p-6 bg-black text-white rounded-2xl shadow-lg mb-4">
        {formatTime(time)}
      </div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Turn to {is24Hour ? "12-hour" : "24-hour"} Format
        </button>
      </div>
    </div>
  );
};

export default Time;
