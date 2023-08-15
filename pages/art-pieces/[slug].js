import React from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import { useArt } from "../../contexts/ArtContext";

export default function DetailedPage() {
  const router = useRouter();
  const slug = router.query.slug;

  const pieces = useArt();

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  let piece = (slug && pieces?.find((piece) => piece.slug === slug)) || null;

  if (!piece) {
    return <div>Art Piece Not Found</div>;
  }

  return <ArtPieceDetails {...piece} />;
}
