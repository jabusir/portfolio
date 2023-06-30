import { useState, useEffect } from "react";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    generateRandomBatteryLevel();
  }, []);

  const generateRandomBatteryLevel = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setBatteryLevel(randomNumber);
  };

  return (
    <div className="items-center flex">
      <p className="mr-2">{batteryLevel}%</p>
      <div className="relative w-10 h-4 border-2 border-black mr-1">
        <div
          className="absolute left-0 top-0 h-full bg-green-500 transition-width duration-500"
          style={{ width: `${batteryLevel}%` }}
        />
      </div>
      <div className="h-2 w-[2px] bg-black -ml-1"></div>
    </div>
  );
};

export default BatteryStatus;
