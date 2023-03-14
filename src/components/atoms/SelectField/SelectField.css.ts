import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/theme.css'

export const invalid = style({
  borderColor: theme.color.caution,
})

export const disabled = style({
  borderColor: theme.color.body,
  background: theme.color.body,
  ':hover': {
    borderColor: theme.color.body,
  },
})

export const select = style({
  border: `1px solid ${theme.color.inputBorder}`,
  outline: 'none',
  background: 'transparent',
  height: '42px',
  paddingLeft: theme.space.medium,
  paddingRight: theme.space.medium,
  borderRadius: theme.border.radius.standard,
  '::placeholder': {
    color: theme.color.darkGrey,
  },
  selectors: {
    '&:-webkit-autofill': {
      WebkitBackgroundClip: 'text',
    },
    '&[data-value=""]': {
      color: 'Text',
    },
    '&:nth-child(1n)': {
      borderRadius: theme.border.radius.standard,
      background: theme.color.panel,
    },
  },
})
