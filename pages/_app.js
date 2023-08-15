import GlobalStyle from "../styles";
import useSWR from "swr";
import { ArtProvider } from "../contexts/ArtContext";
import Navigation from "../components/Navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function OurApp({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data && !error) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <ArtProvider data={data}>
        <Component {...pageProps} />
        <Navigation />
      </ArtProvider>
    </>
  );
}
