import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spotlight from '../components/Spotlight';

describe('Spotlight', () => {
  it('renders the spotlight piece correctly', () => {
    render(<Spotlight image="/path/to/image.jpg" artist="John Doe" />);

    expect(screen.getByAltText('Art by John Doe')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
