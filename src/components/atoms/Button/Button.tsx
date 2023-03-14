import { forwardRef, useRef, ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react'
import cn from 'classnames'
import * as styles from './Button.css'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: keyof typeof styles.variants
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'normal', className, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const commonRef = ref || buttonRef

    return (
      <button ref={commonRef} className={cn(styles.button, styles.variants[variant], className)} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
