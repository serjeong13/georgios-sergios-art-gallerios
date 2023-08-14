import useSWR from 'swr';
import Header from '../components/Header';
import ArtPieces from '../components/ArtPieces';
import Footer from '../components/Footer';

function fetcher(url) {
  return fetch(url).then(res => res.json());
}

function HomePage() {
  const { data, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <ArtPieces pieces={data} />
      <Footer />
    </div>
  );
}

export default HomePage;

