import { Inter } from "next/font/google";
import { useEffect, useState, useCallback } from "react";
import { MatrixRainingLetters } from "react-mdr";
import DesktopFolderIcon from "@/components/DesktopFolderIcon";
import MobileFolderIcon from "@/components/MobileFolderIcon";
import { useScreenWidth } from "@/hooks/useScreenWidth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolders] = useState([
    { position: [0, 0], title: "Projects" },
  ]);
  const [onTop, setOnTop] = useState("");
  const [selectedFolder, setSelectedFolder] = useState({});
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
    <div className="relative flex items-center justify-center h-screen">
      {isLoading ? (
        <MatrixRainingLetters className="absolute top-0 left-0 w-full h-full z-10" />
      ) : (
        <div>
          {screenWidth < 900
            ? folders.map(({ position, title }, index) => (
                <MobileFolderIcon
                  key={index}
                  index={index}
                  setOnTop={setOnTop}
                  onTop={onTop}
                  setPositions={handlePositionChange}
                  imageSrc="/folder.png"
                  title={title}
                  position={position}
                />
              ))
            : folders.map(({ title, position }, index) => (
                <DesktopFolderIcon
                  key={index}
                  index={index}
                  setOnTop={setOnTop}
                  onTop={onTop}
                  setPositions={handlePositionChange}
                  imageSrc="/folder.png"
                  title={title}
                  position={position}
                />
              ))}
        </div>
      )}
    </div>
  );
}
