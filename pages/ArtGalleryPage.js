import { useState, useEffect } from 'react';
import Spotlight from '../components/Spotlight';

function ArtGalleryPage({ allPieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    setSpotlightPiece(pickRandomPiece(allPieces));
  }, [allPieces]);

  return (
    <div>
      {spotlightPiece && <Spotlight image={spotlightPiece.image} artist={spotlightPiece.artist} />}
      {/* Other components or JSX */}
    </div>
  );
}
