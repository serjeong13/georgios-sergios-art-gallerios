import { useEffect, useState, useContext } from 'react';
import { fetchArtPieces } from '../api';
import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { ArtPiecesProvider } from "../context/ArtPiecesContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

