import Image from "next/image";
import Link from "next/link";
import useArt from "../../contexts/ArtContext";
import FavoriteButton from "../FavoriteButton";
import Comments from "../Comments";
import CommentForm from "../CommentForm";
export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  slug,
}) {
const {artPiecesInfo, toggleFavorite, addComment } = useArt();
const isFavorite = artPiecesInfo[slug]?.isFavorite || false;
const comments = artPiecesInfo[slug]?.comments || [];
const handleCommentSubmit = (text) => {
  addComment(slug,text);
}
  return (
    <div>
      <h3>{name}</h3>
      <Image src={imageSource} alt={name} width={400} height={400} />
      <ul>
        <li>By: {artist}</li>
        <li>Year: {year}</li>
        <li>Style: {genre}</li>
      </ul>
      <FavoriteButton
      isFavorite={isFavorite}
      onToggleFavorite={()=> toggleFavorite(slug)}/>
      <Comments comments = {comments}/>
      <CommentForm onSubmitComment={handleCommentSubmit} />
      <Link href={"/art-pieces"}>Go back</Link>
    </div>
  );
}
