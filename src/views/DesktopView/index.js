import { useState } from "react";
import DesktopFolderIcon from "@/components/DesktopFolderIcon";
import Layout from "@/components/Layout";
import DesktopWindows from "@/components/DesktopWindows";

export default function DesktopView({
  folders,
  setOnTop,
  onTop,
  handlePositionChange,
}) {
  const [selectedWindow, setSelectedWindow] = useState("");

  return (
    <>
      <Layout>
        {folders.map(({ title, position }, index) => (
          <DesktopFolderIcon
            key={index}
            index={index}
            setOnTop={setOnTop}
            onTop={onTop}
            setPositions={handlePositionChange}
            imageSrc="/folder.png"
            title={title}
            position={position}
            selectWindow={setSelectedWindow}
          />
        ))}
        {selectedWindow ? <DesktopWindows /> : null}
      </Layout>
    </>
  );
}
