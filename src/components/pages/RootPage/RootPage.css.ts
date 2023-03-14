import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'

export const sideBar = style({
  height: '90%',
  minWidth: '250px',
  maxHeight: '90%',
  overflow: 'hidden',
})

export const editor = style({
  flex: 1,
})

export const container = style({
  display: 'flex',
  gridGap: theme.space.medium,
})
