import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {

  it('should render the title github dashboard', () => {
    render(<Header />);
    const title = screen.getByText(/github dashboard/i);
    expect(title).toBeVisible();
  });

  it('should render the profile name next to github dashboard', () => {
    render(<Header name='Tarik'/>);
    const title= screen.getByText(/tarik/i);
    expect(title).toBeVisible()
  });

})
