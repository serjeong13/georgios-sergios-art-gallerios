import ArtPiecePreview from "../ArtPiecePreview";
import { useArt } from "../../contexts/ArtContext";

export default function ArtPieces() {
  const artData = useArt();

  return (
    <ul>
      {artData.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
