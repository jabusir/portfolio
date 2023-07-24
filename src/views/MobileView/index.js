import { useState } from "react";
import MobileHomeScreen from "@/components/MobileHomeScreen";
import MobileLockScreen from "@/components/MobileLockScreen";

export default function MobileView({ folders, handlePositionChange }) {
  const [locked, setLocked] = useState(true);
  const [openedApp, setOpenedApp] = useState("");

  const handleUnlock = () => {
    setLocked(false);
  };

  const handleAppClose = () => {
    setOpenedApp("");
  };

  return (
    <>
      {locked ? (
        <MobileLockScreen unlock={handleUnlock} />
      ) : (
        <MobileHomeScreen
          folders={folders}
          handlePositionChange={handlePositionChange}
          openedApp={openedApp}
          setOpenedApp={setOpenedApp}
          handleAppClose={handleAppClose}
        />
      )}
    </>
  );
}
