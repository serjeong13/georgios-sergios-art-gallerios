// navigation.test.js (or whatever you name your test file for the Navigation component)
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import Navigation from '../components/Navigation';  // adjust the path

describe('Navigation', () => {
  
  it('displays the "Spotlight" navigation link', () => {
    render(<Navigation />);
    const spotlightLink = screen.getByText('Spotlight');
    expect(spotlightLink).toBeInTheDocument();
  });

  it('displays the "Pieces" navigation link', () => {
    render(<Navigation />);
    const piecesLink = screen.getByText('Pieces');
    expect(piecesLink).toBeInTheDocument();
  });
  
});
