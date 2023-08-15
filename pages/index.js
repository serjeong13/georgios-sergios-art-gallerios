import useSWR from 'swr';
import Header from '../components/Header';
import ArtPieces from '../components/ArtPieces';
import Spotlight from '../components/Spotlight';
import Footer from '../components/Footer';

function pickRandomPiece(pieces) {
  return pieces[Math.floor(Math.random() * pieces.length)];
}

function fetcher(url) {
  return fetch(url).then(res => res.json());
}

function SpotlightPage() {
  const { data, error } = useSWR('https://example-apis.vercel.app/api/art', fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const spotlightPiece = pickRandomPiece(data);

  return (
    <div>
      <Header />
      <Spotlight image={spotlightPiece.image} artist={spotlightPiece.artist} />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    // This can either be a SpotlightPage or the ArtPieces list depending on your preference.
    <SpotlightPage />
  );
}

export default HomePage;
