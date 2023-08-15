import React from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import useArt from "../../contexts/ArtContext";

export default function DetailedPage() {
  const router = useRouter();
  const slug = router.query.slug;
  const {artData} = useArt();

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(artData)) {
    return <div>Error: Art data is not available!</div>;
  }

  let piece = artData.find((piece) => piece.slug === slug) || null;

  if (!piece) {
    return <div>Art Piece Not Found</div>;
  }

  return <ArtPieceDetails {...piece} />;
}
