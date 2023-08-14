import Image from "next/image";

export default function Spotlight({ imageSource, artist }) {
  return (
    <div>
      <h2>Spotlight</h2>
      <Image
        src={imageSource}
        alt={`Art by ${artist}`}
        width={400}
        height={400}
      />
      <p>By: {artist}</p>
    </div>
  );
}
