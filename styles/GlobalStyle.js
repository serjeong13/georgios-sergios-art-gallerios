import { createGlobalStyle } from "styled-components";
import Link from "next/link";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Tahoma', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
`;

// const Navbar = styled.div`
//     display: flex;
//     width: 100%;
//     font-family: 'Roboto', sans-serif;
//     justify-content: center;
//     align-items: center;
//     padding: 50px 40px; 
//     background-color: #333;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     margin: 0;
// `;

// const NavLink = styled.a`
//     color: white;
//     font-size: 1.5rem;
//     padding: 30px 30px;
//     text-align: center;
//     margin: 0; 
//     transition: background-color 0.3s ease;

//     &:hover {
//         background-color: #555;
//     }
// `;

// export default function Navigation() {
//   return (
//     <Navbar>
//       <Link href="/" passHref>
//         <NavLink>Spotlight</NavLink>
//       </Link>
//       <Link href="/art-pieces" passHref>
//         <NavLink>Art Pieces</NavLink>
//       </Link>
//       <Link href="/favorites" passHref>
//         <NavLink>Favorites</NavLink>
//       </Link>
//     </Navbar>
//   );
// }

export default GlobalStyle;
