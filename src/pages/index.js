import { Inter } from "next/font/google";
import { useState, useCallback } from "react";
import MobileView from "@/views/MobileView";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import DesktopView from "@/views/DesktopView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [folders, setFolders] = useState([
    {
      position: [50, 10],
      mobilePosition: [1, 1],
      title: "Projects",
      imageSrc: "/folder.png",
    },
  ]);
  const [onTop, setOnTop] = useState("");
  const screenWidth = useScreenWidth();

  const handlePositionChange = useCallback((index, newPosition) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder, i) =>
        index === i ? { ...folder, position: newPosition } : { ...folder }
      )
    );
  }, []);

  return (
    <div>
      <div>
        {screenWidth < 900 ? (
          <MobileView
            folders={folders}
            handlePositionChange={handlePositionChange}
          />
        ) : (
          <DesktopView
            folders={folders}
            setOnTop={setOnTop}
            onTop={onTop}
            handlePositionChange={handlePositionChange}
          />
        )}
      </div>
    </div>
  );
}
