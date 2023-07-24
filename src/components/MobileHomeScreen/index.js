import { useState } from "react";
import Layout from "../Layout";
import MobileFolderIcon from "../MobileFolderIcon";
import MobileAppScreen from "../MobileAppScreen";

export default function MobileHomeScreen({
  folders,
  handlePositionChange,
  openedApp,
  setOpenedApp,
  handleAppClose,
}) {
  const [editing, setEditing] = useState(false);

  const handleLongPress = () => {
    console.log("here");
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <>
      <Layout>
        {folders.map(({ position, title, imageSrc }, index) => (
          <MobileFolderIcon
            key={index}
            index={index}
            setPositions={handlePositionChange}
            imageSrc={title === "Projects" ? "/files.png" : imageSrc}
            title={title}
            position={position}
            openApp={setOpenedApp}
            editing={editing}
            setEditing={setEditing}
            onLongPress={handleLongPress}
          />
        ))}
        {openedApp ? (
          <MobileAppScreen name={openedApp} closeApp={handleAppClose} />
        ) : null}
      </Layout>
    </>
  );
}
