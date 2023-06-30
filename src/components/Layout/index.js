import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function Layout({ children }) {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth > 900 ? <DesktopHeader /> : <MobileHeader />}
      <main>{children}</main>
    </>
  );
}
