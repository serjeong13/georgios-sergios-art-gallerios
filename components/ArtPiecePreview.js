import Image from 'next/image';

function ArtPiecePreview({ image, title, artist }) {
  console.log(image);
  
  return (
    <div>
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}

export default ArtPiecePreview;


