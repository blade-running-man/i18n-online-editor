import { ReactNode } from 'react'
import cn from 'classnames'
import * as styles from './ErrorMessage.css'
export interface ErrorMessageProps {
  children?: string | ReactNode
  className?: string
}

const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  return (
    <div className={styles.container}>
      <span className={cn(styles.errorMessage, className)}>{children}</span>
    </div>
  )
}

export default ErrorMessage
