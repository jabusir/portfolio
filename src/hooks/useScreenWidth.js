"use client";

import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window?.innerWidth || 0);
    const handleResize = () => setScreenWidth(window?.innerWidth || 0);
    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};
