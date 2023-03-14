import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'

export const form = style({
  display: 'flex',
  gridGap: theme.space.medium,
})
