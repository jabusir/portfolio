import { useState } from "react";
import useLongPress from "@/hooks/useLongPress.js";
import Image from "next/image";

export default function MobileFolderIcon({
  onTop,
  title,
  index,
  position,
  setPositions,
  imageSrc,
  openApp,
  editing,
  setEditing,
}) {
  const longPressEvents = useLongPress(() => setEditing((prev) => !prev));

  const handleTouch = () => {
    if (!longPressEvents.isLongPressActive) {
      openApp(title);
    }
  };

  return (
    <div
      className="flex flex-col items-center"
      style={{
        top: `${position[0]}px`,
        left: `${position[1]}px`,
        zIndex: onTop === index ? 1 : "auto",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={imageSrc}
        {...longPressEvents}
        height="1000"
        width="1000"
        alt={"Folder"}
        className={`w-20 md:w-52 ${editing ? "animate-jiggle" : ""}`}
        style={{ touchAction: "none" }}
        onClick={handleTouch}
      />
      <label>{title}</label>
    </div>
  );
}
