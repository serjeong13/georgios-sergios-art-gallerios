import React, {useEffect, useState} from "react";
import useArt from "../contexts/ArtContext";
import ArtPieces from "../components/ArtPieces";

export default function FavoritesPage (){
    //referring to data about pieces + information about isFavorite status
    const {artData, artPiecesInfo, toggleFavorite} = useArt();

    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        const newFavorites = artData.filter(
            (piece) => artPiecesInfo[piece.slug]?.isFavorite === true
        );
        setFavorites(newFavorites);
    }, [artPiecesInfo, artData]);

      return (
        <div>
          <h1>Your Favorite Art Pieces, habibi</h1>
          <ArtPieces pieces={favorites} onToggleFavorite ={toggleFavorite} />

        </div>
      );
    };

   