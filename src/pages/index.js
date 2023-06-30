import { Inter } from "next/font/google";
import { useEffect, useState, useCallback } from "react";
import { MatrixRainingLetters } from "react-mdr";
import MobileView from "@/views/MobileView";
import { useScreenWidth } from "@/hooks/useScreenWidth";
import DesktopView from "@/views/DesktopView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolders] = useState([
    { position: [50, 10], title: "Projects", imageSrc: "/folder.png" },
  ]);
  const [onTop, setOnTop] = useState("");
  const screenWidth = useScreenWidth();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  const handlePositionChange = useCallback((index, newPosition) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder, i) =>
        index === i ? { ...folder, position: newPosition } : { ...folder }
      )
    );
  }, []);

  return (
    <div
      className={`${
        isLoading ? "relative flex items-center justify-center h-screen" : ""
      }`}
    >
      {isLoading ? (
        <MatrixRainingLetters className="absolute top-0 left-0 w-full h-full z-10" />
      ) : (
        <div>
          {screenWidth < 900 ? (
            <MobileView
              folders={folders}
              setOnTop={setOnTop}
              onTop={onTop}
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
      )}
    </div>
  );
}
