import { useState, useEffect, useRef } from "react";
import getClientLocalTime from "@/util/localTime";
import Image from "next/image";

export default function MobileLockScreen({ unlock }) {
  const [localDate, setLocalDate] = useState("");
  const [localTime, setLocalTime] = useState("");
  const swipeRef = useRef(null);
  let startY = 0;

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

  useEffect(() => {
    const currentDate = new Date();

    // Define options for date formatting
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };

    // Convert the date to the desired format
    const formattedDate = currentDate.toLocaleString("en-US", options);

    setLocalDate(formattedDate);
  }, []);

  const handleTouchStart = (event) => {
    startY = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = endY - startY;

    // Check if the swipe direction is upwards and the distance is sufficient for a swipe up
    if (deltaY < -50) {
      unlock();
    }
  };

  return (
    <div className="overflow-hidden text-white">
      <Image
        src="/homer-donut.jpg"
        alt="background"
        width={1000}
        height={1000}
        className="fixed top-0 left-0 -z-10 h-screen"
      />
      <div className="flex items-center flex-col justify-between h-[90vh] overflow-hidden pt-10 text-white">
        <div className="flex flex-col items-center">
          <div>{localDate}</div>
          <div className="text-7xl font-bold">{localTime}</div>
        </div>

        <div
          className="flex flex-col items-center h-24 justify-center"
          ref={swipeRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative text-center w-screen flex flex-col items-center animate-bounce text-xs ">
            Swipe up to open
          </div>
          <div className="h-1 w-36 mt-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
