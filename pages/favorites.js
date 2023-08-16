import React from "react";
import useArt from "../contexts/ArtContext";
import ArtPieces from "../components/ArtPieces";
export default function FavoritesPage (){

    //referring to data about pieces + information about isFavorite status
    const {artData, artPiecesInfo, toggleFavorite} = useArt();
    //we are filtering only art pieces with isFavorite=true

    const favorites = artData.filter(
        (piece) => artPiecesInfo[piece.slug]?.isFavorite === true
      );
      
      return (
        <div>
          <h1>Your Favorite Art Pieces, habibi</h1>
          <ArtPieces pieces={favorites} onToggleFavorite ={toggleFavorite} />
        </div>
      );
    };