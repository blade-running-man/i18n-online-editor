import { theme } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  padding: theme.space.small,
})

export const errorMessage = style({
  color: theme.color.caution,
})
