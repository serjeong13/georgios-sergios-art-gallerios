import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
import { useArt } from "../contexts/ArtContext";

export default function HomePage() {
  const data = useArt();
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
