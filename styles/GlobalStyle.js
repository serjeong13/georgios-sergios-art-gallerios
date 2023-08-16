import { createGlobalStyle } from "styled-components";
import Link from "next/link";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 600px;
    font-family: 'Tahoma', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  h1 {
    color: #DAA520;
    background-color: #000000;
    text-align: center;
    font-size: 1.5rem;    // Fixed the comma to a period for the font-size
    font-weight: 550;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
