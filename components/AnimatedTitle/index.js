import styled, { keyframes } from "styled-components";

// Keyframes for the fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Letter = styled.span`
  display: inline-block;
  animation: ${fadeIn} 0.3s forwards;
  animation-delay: ${({ index }) => index * 0.1}s; // Delay based on letter position
  opacity: 0;
`;

function AnimatedTitle({ text }) {
  return (
    <h1>
      {text.split("").map((char, index) => (
        <Letter key={index} index={index}>
          {char}
        </Letter>
      ))}
    </h1>
  );
}

export default AnimatedTitle;
