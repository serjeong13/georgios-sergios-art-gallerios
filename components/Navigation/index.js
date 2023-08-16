import styled from "styled-components";
import Link from "next/link";

// Styled container for the Navigation
const NavContainer = styled.div`
  width: 100%; /* Makes sure it spans the entire width of the viewport */
  background-color: #333;
  padding: 10px 0;
  text-align: center; /* Horizontally centers content inside the navbar */
`;

// Styled individual links
const StyledLink = styled.a`
  color: white;
  margin: 0 20px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease; /* Color and transform transitions */
  position: relative; /* To position the pseudo-element correctly */

  &:before {  /* This will create an animated underline effect */
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: white;
    transition: all 0.3s ease;  /* Smooth transition for the underline */
  }

  &:hover {
    color: #FFD700; /* Gold color when hovered for a slight change */
    transform: scale(1.05); /* Make the link slightly bigger */

    &:before {
      width: 100%;  /* Full width underline */
      left: 0;      /* Start from the leftmost part */
    }
  }
`;


export default function Navigation() {
  return (
    <NavContainer>
      <Link href="/" passHref>
        <StyledLink>Spotlight</StyledLink>
      </Link>
      <Link href="/art-pieces" passHref>
        <StyledLink>Art Pieces</StyledLink>
      </Link>
      <Link href="/favorites" passHref>
        <StyledLink>Favorites</StyledLink>
      </Link>
    </NavContainer>
  );
}