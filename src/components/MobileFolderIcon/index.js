import { useCallback, useState, useRef } from "react";
import Image from "next/image";

export default function MobileFolderIcon({
  onTop,
  title,
  index,
  position,
  setPositions,
  imageSrc,
  openApp,
}) {
  const handleTouch = () => {
    openApp(title);
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
        height="1000"
        width="1000"
        alt={"Folder"}
        className="w-20 md:w-52"
        style={{ touchAction: "none" }}
        onClick={handleTouch}
      />
      <label>{title}</label>
    </div>
  );
}
