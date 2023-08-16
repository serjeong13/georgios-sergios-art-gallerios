import { createContext, useState, useContext } from "react";
const ArtContext = createContext();
//this is a custom hook, which will be used across many components in our component tree
export default function useArt() {
const context=useContext(ArtContext);
if (!context) {
  throw new Error('useArt must be used within an ArtProvider!')
}
  return context;
}
//this is a wrap function, responsible for managing global state during rendering
export function ArtProvider({ children, data }) {
const [artPiecesInfo, setArtPiecesInfo] = useState(data?
  data.reduce((deflist, piece)=>{
    deflist[piece.slug]={isFavorite:false, comments:[]};
    return deflist;
  },{}):{}
);
//the function which is responsible for changing isFavorite state for all components
const toggleFavorite = (slug) => {
  setArtPiecesInfo((prevInfo)=>({
    ...prevInfo,
    [slug]: {
      ...prevInfo[slug],
      isFavorite: !(prevInfo[slug]?.isFavorite || false),
    },
  }));
}
const addComment = (slug, text)=>{
  const newComment ={
    text,
    date: new Date().toISOString(),
  };
setArtPiecesInfo((prevInfo)=>({
  ...prevInfo,[slug]:{
    ...prevInfo[slug],
    comments: [...prevInfo[slug].comments, newComment],
  },
}));
}
//set of objects, managed and updated by global state
const contextValue = {
artData: data,
artPiecesInfo,
setArtPiecesInfo,
toggleFavorite,
addComment,
};
  return (<ArtContext.Provider value={contextValue}>{children}</ArtContext.Provider>);
}