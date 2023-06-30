import { useCallback, useState, useRef } from "react";
import Image from "next/image";

export default function MobileFolderIcon({
  onTop,
  title,
  index,
  position,
  setPositions,
  setOnTop,
  imageSrc,
}) {
  const [hasMoved, setHasMoved] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 }); // Added reference for drag offset

  const move = useCallback(
    (e) => {
      e.preventDefault();
      setHasMoved(true);
      const pageX = e.touches[0].pageX;
      const pageY = e.touches[0].pageY;
      setPositions(index, [
        pageY - dragOffset.current.y,
        pageX - dragOffset.current.x,
      ]); // Adjust position by dragOffset
    },
    [index, setPositions]
  );

  const handleTouchEnd = (e) => {
    window.removeEventListener("touchmove", move);
    window.removeEventListener("touchend", handleTouchEnd);
    if (hasMoved) {
      e.preventDefault();
    } else {
      setOnTop(index);
    }
    setHasMoved(false);
  };

  const handleTouchStart = (e) => {
    setOnTop(index);
    setHasMoved(false);
    const touch = e.touches[0];
    dragOffset.current = {
      x: touch.pageX - position[1],
      y: touch.pageY - position[0],
    }; // Set dragOffset on touch start
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
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
        alt={title}
        className="w-24 md:w-52"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
