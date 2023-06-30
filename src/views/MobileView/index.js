import MobileFolderIcon from "@/components/MobileFolderIcon";

export default function MobileView({
  folders,
  onTop,
  setOnTop,
  handlePositionChange,
}) {
  return folders.map(({ position, title }, index) => (
    <MobileFolderIcon
      key={index}
      index={index}
      setOnTop={setOnTop}
      onTop={onTop}
      setPositions={handlePositionChange}
      imageSrc="/files.png"
      title={title}
      position={position}
    />
  ));
}
