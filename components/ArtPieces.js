import ArtPiecePreview from './ArtPiecePreview';

function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <div>
      {pieces.map(piece => (
        <ArtPiecePreview image={piece.imageSource} title={piece.name} key={piece.id} {...piece} />
      ))}
    </div>
  );
}

export default ArtPieces;
