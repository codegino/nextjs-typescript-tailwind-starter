import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello Next\.js with TypeScript and Tailwind/
    })

    expect(heading).toBeInTheDocument()
  })
})