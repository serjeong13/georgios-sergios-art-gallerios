import Image from "next/image";
import useArt from "../../contexts/ArtContext";

export default function Spotlight() {
const {artData} = useArt();

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
    </div>
  );
}
