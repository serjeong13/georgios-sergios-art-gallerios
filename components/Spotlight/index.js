import Image from "next/image";

export default function Spotlight({ data }) {
  function getRandomArtPiece(artPieces) {
    return artPieces[Math.floor(Math.random() * artPieces.length)];
  }

  const spotlightPiece = getRandomArtPiece(data);

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
