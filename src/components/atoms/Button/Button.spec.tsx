import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './Button'

describe('Button', () => {
  it('renders the children', () => {
    const { getByText } = render(<Button>Hello</Button>)
    expect(getByText('Hello')).toBeInTheDocument()
  })

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const props: ButtonProps = { onClick: handleClick }

    const { getByRole } = render(<Button {...props}>Click me</Button>)
    fireEvent.click(getByRole('button'))

    expect(handleClick).toHaveBeenCalled()
  })
})
