import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
import { useArt } from "../contexts/ArtContext";

export default function SpotlightPage() {
  const data = useArt();

  return (
    <div>
      <h1>Georgios-Sergios-Smailios-Gallerios</h1>
      <Spotlight data={data} />
    </div>
  );
}
