import ArtPieces from '../components/ArtPieces';
import { useContext } from 'react';
import { ArtPiecesContext } from '../path-to-your-context';  // Adjust the path
 
function ArtPiecesPage() {
  const { allPieces } = useContext(ArtPiecesContext);

  return <ArtPieces pieces={allPieces} />;
}

export default ArtPiecesPage;
