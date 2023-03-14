import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import * as styles from './TextField.css'

/**
 * A text input component that can be styled using CSS and can be used for user input.
 */
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Specifies a custom CSS class for the component. */
  className?: string
  /** Specifies the variant of the component. Can be "normal", "positive", or "caution". */
  variant?: keyof typeof styles.variants
  /** Specifies if the input value is invalid. */
  invalid?: boolean
  /** Specifies the name of the input field. */
  name: string
}

/**
 * Render a text input element with the given props.
 *
 * @param {TextFieldProps} props The props for the TextField component
 * @param {ForwardedRef<HTMLInputElement>} ref A forwarded ref to access the input element
 * @returns {JSX.Element} A React element representing the rendered text input
 */
const TextField = forwardRef(
  (
    { name, type = 'text', disabled, variant = 'normal', className, invalid, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        name={name}
        className={cn(
          styles.input,
          styles.variants[variant],
          className,
          invalid && styles.invalid,
          disabled && styles.disabled,
        )}
        type={type}
        disabled={disabled}
        {...props}
      />
    )
  },
)

TextField.displayName = 'TextField'
export default TextField
