import useSWR from "swr";
import { useRouter } from "next/router";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const spotlightPiece = getRandomArtPiece(data);

  return (
    <div>
      <h1>Georgios-Sergios-Gallerios</h1>
      <Spotlight
        imageSource={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}

function getRandomArtPiece(artPieces) {
  return artPieces[Math.floor(Math.random() * artPieces.length)];
}
