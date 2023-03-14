import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gridGap: theme.space.medium,
})

export const hashToggle = style({
  cursor: 'pointer',
})
