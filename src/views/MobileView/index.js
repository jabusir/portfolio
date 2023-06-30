import MobileFolderIcon from "@/components/MobileFolderIcon";
import Layout from "@/components/Layout";

export default function MobileView({
  folders,
  onTop,
  setOnTop,
  handlePositionChange,
}) {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
