import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

export default function HomePage({ data }) {
  const spotlightPiece = getRandomArtPiece(data);

  return (
    <div>
      <h1>Georgios-Sergios-Smailios-Gallerios</h1>
      <Spotlight
        imageSource={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}

function getRandomArtPiece(artPieces) {
  return artPieces[Math.floor(Math.random() * artPieces.length)];
}
