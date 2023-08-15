import { createContext, useState, useContext } from "react";

const ArtContext = createContext();

export default function useArt() {
const context=useContext(ArtContext);
if (!context) {
  throw new Error('useArt must be used within an ArtProvider!')
}
  return context;
}

export function ArtProvider({ children, data }) {
const [artPiecesInfo, setArtPiecesInfo] = useState({});

const toggleFavorite = (slug) => {
  setArtPiecesInfo((prevInfo)=>({
    ...prevInfo,
    [slug]: {
      ...prevInfo[slug],
      isFavorite: !(prevInfo[slug]?.isFavorite || false),
    },
  }));
}

const contextValue = {
  artData: data,
artPiecesInfo,
setArtPiecesInfo,
toggleFavorite,
};


  return <ArtContext.Provider value={contextValue}>{children}</ArtContext.Provider>;
}
