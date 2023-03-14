import { render, fireEvent } from '@testing-library/react'
import TextField, { TextFieldProps } from './TextField'

describe('TextField', () => {
  it('renders the input element with the correct name', () => {
    const props: TextFieldProps = { name: 'test' }
    const { getByRole } = render(<TextField {...props} />)
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('name', 'test')
  })

  it('calls the onChange handler when the value is changed', () => {
    const handleChange = jest.fn()
    const props: TextFieldProps = { name: 'test', onChange: handleChange }

    const { getByRole } = render(<TextField {...props} />)
    const input = getByRole('textbox')
    fireEvent.change(input, { target: { value: 'hello' } })

    expect(handleChange).toHaveBeenCalledWith(expect.anything())
  })
})
