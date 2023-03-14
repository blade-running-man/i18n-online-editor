import { ForwardedRef, forwardRef, SelectHTMLAttributes, ReactElement } from 'react'
import cn from 'classnames'
import * as styles from './SelectField.css'

export interface TextFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  invalid?: boolean
  name: string

  children: ReactElement<HTMLOptionElement> | ReactElement<HTMLOptionElement>[]
}

const TextField = forwardRef(
  (
    { name, disabled, className, invalid, children, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <select
        ref={ref}
        name={name}
        className={cn(styles.select, className, invalid && styles.invalid, disabled && styles.disabled)}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
    )
  },
)

TextField.displayName = 'TextField'
export default TextField
