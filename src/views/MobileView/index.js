import MobileFolderIcon from "@/components/MobileFolderIcon";

export default function MobileView({
  folders,
  onTop,
  setOnTop,
  handlePositionChange,
}) {
  return (
    <>
      {folders.map(({ position, title, imageSrc }, index) => (
        <MobileFolderIcon
          key={index}
          index={index}
          setOnTop={setOnTop}
          onTop={onTop}
          setPositions={handlePositionChange}
          imageSrc={title === "Projects" ? "/files.png" : imageSrc}
          title={title}
          position={position}
        />
      ))}
    </>
  );
}
