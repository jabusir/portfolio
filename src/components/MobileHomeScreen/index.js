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
        <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
          UNDER CONSTRUCTION
        </div>
      </Layout>
    </>
  );
}
