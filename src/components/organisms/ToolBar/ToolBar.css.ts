import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'

export const toolBar = style({
  display: 'flex',
  padding: theme.space.medium,
})

export const toolBarRight = style({
  display: 'flex',
  flex: 1,
})

export const toolBarLeft = style({
  display: 'flex',
  gridGap: theme.space.medium,
})
