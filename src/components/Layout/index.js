import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";
import { useScreenWidth } from "@/hooks/useScreenWidth";

export default function Layout({ children }) {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth > 900 ? <DesktopHeader /> : null}
      <main>{children}</main>
    </>
  );
}
