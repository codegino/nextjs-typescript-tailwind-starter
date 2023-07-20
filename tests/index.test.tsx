import {render, screen} from '@testing-library/react';
import IndexPage from '../src/app/page';

describe('IndexPage', () => {
  it('renders a heading', () => {
    render(<IndexPage />);

    const heading = screen.getByRole('heading', {
      name: /Hello Next\.js with TypeScript and Tailwind/,
    });

    expect(heading).toBeInTheDocument();
  });
});
