import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Intro from './Intro'

test('renders heading and button', () => {
  render(
    <BrowserRouter>
      <Intro />
    </BrowserRouter>
  )
  expect(screen.getByRole('heading', { name: /introducción al storytelling digital/i })).toBeInTheDocument()
  expect(screen.getByRole('button')).toBeInTheDocument()
})
