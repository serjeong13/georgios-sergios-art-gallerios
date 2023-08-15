import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import useArt from "../../contexts/ArtContext";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  const {artPiecesInfo, toggleFavorite} = useArt();
  const isFavorite = artPiecesInfo[slug]?.isFavorite || false;

  return (
    <div>
      <h3>{title}</h3>
      <Image src={image} alt={title} width={300} height={300} />
      <p>By: {artist}</p>
      <FavoriteButton isFavorite={isFavorite}
      onToggleFavorite={()=> toggleFavorite(slug)}/>
    </div>
  );
}
