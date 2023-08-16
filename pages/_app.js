import GlobalStyle from "../styles/GlobalStyle";
import useSWR from "swr";
import { ArtProvider } from "../contexts/ArtContext";
import Layout from "../components/Layout";

//using fetcher function to fetch data from api and return json data with useSWR
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
        <Layout />
      </ArtProvider>
    </>
  );
}
