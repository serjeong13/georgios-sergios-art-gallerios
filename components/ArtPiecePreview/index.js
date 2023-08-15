import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <h3>{title}</h3>
      <Image src={image} alt={title} width={300} height={300} />
      <p>By: {artist}</p>
    </div>
  );
}
