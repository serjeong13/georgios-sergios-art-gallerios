import React from "react";
import ArtPieces from "../../components/ArtPieces";
import useArt from "../../contexts/ArtContext";

export default function ArtPiecesList() {
  const artData = useArt();

  if (!artData || artData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Art Pieces</h1>
      <ArtPieces pieces={artData} />
    </div>
  );
}
