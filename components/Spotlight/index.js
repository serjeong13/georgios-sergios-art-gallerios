import Image from "next/image";
import useArt from "../../contexts/ArtContext";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight() {
const {artData, artPiecesInfo, toggleFavorite} = useArt();

  function getRandomArtPiece(artPieces) {
    return artPieces[Math.floor(Math.random() * artPieces.length)];
  }

  if (!artData || artData.length === 0) {
    return <div>Loading...</div>;
  }

  const spotlightPiece = getRandomArtPiece(artData);

  if (!spotlightPiece) {
    return <div>No Art Piece Selected</div>;
  }
//we need to derive slug in order to check what is the status of isFavorite
  const slug = spotlightPiece.slug;
//here we are checking if it is favorite
  const isFavorite = artPiecesInfo[slug]?.isFavorite || false;


  return (
    <div>
      <h2>Spotlight</h2>
      <Image
        src={spotlightPiece.imageSource}
        alt={`Artwork by ${spotlightPiece.artist}`}
        width={400}
        height={400}
      />
      <p>By: {spotlightPiece.artist}</p>
      <FavoriteButton isFavorite={isFavorite}
      onToggleFavorite={()=> toggleFavorite(slug)}/>
    </div>
  );
}
