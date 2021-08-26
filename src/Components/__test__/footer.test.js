import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {

  it('should render the footer text', () => {
    render(<Footer />);
    const text = screen.getByText(/Tarik@gr/i);
    expect(text).toBeVisible();
  });

})
