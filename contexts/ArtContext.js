import { createContext, useContext } from "react";

const ArtContext = createContext();

export default function useArt() {
  return useContext(ArtContext);
}

export function ArtProvider({ children, data }) {
  return <ArtContext.Provider value={data}>{children}</ArtContext.Provider>;
}
