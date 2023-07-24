import { useEffect, useState } from "react";
import AppLayout from "./AppLayout";

const APP_NAMES = {
  PROJECTS: "Projects",
};

const getAppContent = (name, closeApp) => {
  switch (name) {
    case APP_NAMES.PROJECTS:
      return (
        <AppLayout name={name} closeApp={closeApp}>
          <div>Project content</div>
        </AppLayout>
      );
  }
};

export default function MobileAppScreen({ name, closeApp }) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (window !== "undefined") {
      setFirstRender(false);
    }
  }, []);

  return (
    <section className="h-screen w-screen z-10 fixed bg-white top-0 left-0">
      {firstRender ? null : getAppContent(name, closeApp)}
    </section>
  );
}
