import ArtPiecePreview from "../ArtPiecePreview";
import useArt from "../../contexts/ArtContext";
import Link from "next/link";

export default function ArtPieces({pieces}) {

  if (!Array.isArray(pieces)) {
    return <div>Loading...</div>;
  }


  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            slug={piece.slug}
            title={piece.name}
            artist={piece.artist}
          />
          <Link href={`/art-pieces/${piece.slug}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}
