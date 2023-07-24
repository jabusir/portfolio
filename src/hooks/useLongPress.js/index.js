import { useState, useEffect } from "react";

const useLongPress = (callback = () => {}, ms = 300) => {
  const [startLongPress, setStartLongPress] = useState(false);
  const [isLongPressActive, setIsLongPressActive] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(() => {
        callback();
        setIsLongPressActive(true);
      }, ms);
    } else {
      clearTimeout(timerId);
      setIsLongPressActive(false);
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
    onTouchEnd: (e) => {
      if (isLongPressActive) {
        e.preventDefault();
      }
      setStartLongPress(false);
    },
    isLongPressActive,
  };
};

export default useLongPress;
