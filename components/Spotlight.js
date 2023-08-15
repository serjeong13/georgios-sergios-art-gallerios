import Image from 'next/image';

function Spotlight({ image, artist }) {
  return (
    <div>
      <Image src={image} alt={`Art by ${artist}`} width={500} height={500} />
      <h3>{artist}</h3>
    </div>
  );
}

export default Spotlight;
