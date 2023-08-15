import Image from "next/image";
import Link from "next/link";
import useArt from "../../contexts/ArtContext";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  slug,
}) {

const {artPiecesInfo, toggleFavorite } = useArt();

const isFavorite = artPiecesInfo[slug]?.isFavorite || false;

  return (
    <div>
      <Image src={imageSource} alt={name} width={400} height={400} />
      <ul>
        <li>Name: {name}</li>
        <li>Crazy Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Style: {genre}</li>
      </ul>
      <FavoriteButton
      isFavorite={isFavorite}
      onToggleFavorite={()=> toggleFavorite(slug)}/>
      <Link href={"/art-pieces"}>Go back</Link>
    </div>
  );
}
