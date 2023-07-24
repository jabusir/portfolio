import Image from "next/image";
import getClientLocalTime from "@/util/localTime";
import BatteryStatus from "../BatterStatus";
import { useEffect, useState } from "react";

export default function MobileHeader({ isLockScreen }) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    setLocalTime(getClientLocalTime());

    const minuteInMilliseconds = 60000;
    const timeToNextMinute =
      minuteInMilliseconds - new Date().getSeconds() * 1000;
    const timeoutId = setTimeout(() => {
      setLocalTime(getClientLocalTime());

      const intervalId = setInterval(() => {
        setLocalTime(getClientLocalTime());
      }, minuteInMilliseconds);

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, timeToNextMinute);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <section className="flex justify-between pt-1">
      <div>
        {!isLockScreen && <div className="w-full ml-2">{localTime}</div>}
      </div>
      <div className="flex items-center w-28 justify-evenly">
        <Image
          alt="signal"
          src="/signal.png"
          height={1000}
          width={1000}
          className="h-6 w-6"
        />
        <Image
          src="/wifi.png"
          alt="wifi"
          height={1000}
          width={1000}
          className="h-4 w-5"
        />

        <BatteryStatus />
      </div>
    </section>
  );
}
