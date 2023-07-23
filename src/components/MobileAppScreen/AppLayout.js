import { TitleBar } from "react-desktop";

export default function AppLayout({ children, name, closeApp }) {
  return <div className="h-screen w-screen z-10">{children}</div>;
}
