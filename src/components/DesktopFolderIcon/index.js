import { useCallback, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DesktopFolderIcon({
  onTop,
  title,
  index,
  position,
  setPositions,
  setOnTop,
  imageSrc,
  selectWindow,
}) {
  const hasMovedRef = useRef(false); // New ref to track move status
  const dragOffset = useRef({ x: 0, y: 0 });

  const move = useCallback(
    (e) => {
      e.preventDefault();
      const pageX = e.pageX;
      const pageY = e.pageY;

      setPositions(index, [
        pageY - dragOffset.current.y,
        pageX - dragOffset.current.x,
      ]);

      // If item has moved significantly, update hasMovedRef
      const movedSignificantly =
        Math.abs(pageY - position[0]) > 10 ||
        Math.abs(pageX - position[1]) > 10;

      if (movedSignificantly) {
        hasMovedRef.current = true;
      }
    },
    [index, setPositions, position]
  );

  const handleMouseDown = (e) => {
    e.preventDefault();
    setOnTop(index);
    dragOffset.current = {
      x: e.clientX - position[1],
      y: e.clientY - position[0],
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", handleMouseUp);

    if (!hasMovedRef.current) {
      selectWindow(title);
    }

    // Reset the flag after every mouse up event
    hasMovedRef.current = false;
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        top: `${position[0]}px`,
        left: `${position[1]}px`,
        zIndex: onTop === index ? 1 : "auto",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Image
        src={imageSrc}
        height="1000"
        width="1000"
        alt={title}
        className="w-24 md:w-52"
      />
    </div>
  );
}
