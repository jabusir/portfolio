import { useState, useEffect } from "react";

const useLongPress = (callback = () => {}, ms = 300) => {
  const [startLongPress, setStartLongPress] = useState(false);
  const [isLongPressing, setIsLongPressing] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      setIsLongPressing(true);
      timerId = setTimeout(() => {
        callback();
        setIsLongPressing(false);
      }, ms);
    } else {
      clearTimeout(timerId);
      setIsLongPressing(false);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, ms, startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
    isLongPressing,
  };
};

export default useLongPress;
