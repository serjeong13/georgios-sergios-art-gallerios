import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <h3>{title}</h3>
      <Image src={image} alt={title} width={300} height={300} />
      <p>By: {artist}</p>
    </div>
  );
}
