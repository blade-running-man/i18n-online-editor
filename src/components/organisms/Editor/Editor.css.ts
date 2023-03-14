import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'

export const container = style({
  display: 'flex',
  padding: theme.space.gutter,
  gridGap: theme.space.gutter,
})
