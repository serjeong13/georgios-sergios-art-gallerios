import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
}) {
  return (
    <div>
      <Image src={imageSource} alt={name} width={400} height={400} />
      <ul>
        <li>Name: {name}</li>
        <li>Crazy Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Style: {genre}</li>
      </ul>
      <Link href={"/art-pieces"}>Go back</Link>
    </div>
  );
}
