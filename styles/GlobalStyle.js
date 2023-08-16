import { createGlobalStyle } from "styled-components";
import Link from "next/link";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 600px;
    font-family: 'Tahoma', sans-serif;
    display: flexbox;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  h1 {
    color: #33699;
    background-color: #f0f0f0;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
