import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Georgios-Sergios-Horses</h1>
      <ul>
        {data.map((artPiece) => (
          <li key={artPiece.id}>
            <h2>{artPiece.title}</h2>
            <Image
              src={artPiece.image}
              alt={artPiece.title}
              width={200}
              height={200}
            />
            <p>{artPiece.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
