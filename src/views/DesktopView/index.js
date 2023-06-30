import DesktopFolderIcon from "@/components/DesktopFolderIcon";

export default function DesktopView({
  folders,
  setOnTop,
  onTop,
  handlePositionChange,
}) {
  return folders.map(({ title, position }, index) => (
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
  ));
}
