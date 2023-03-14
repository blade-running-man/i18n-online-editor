import { breakpoints, theme } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const invalid = style({
  borderColor: theme.color.caution,
})

export const disabled = style({
  borderColor: theme.color.body,
  background: theme.color.input,
  ':hover': {
    borderColor: theme.color.body,
  },
})

export const input = style({
  appearance: 'none',
  outline: 'none',
  padding: theme.space.medium,
  background: 'transparent',
  MozAppearance: 'textfield',
  '::placeholder': {
    color: theme.color.inputBorder,
  },
  border: `1px solid ${theme.color.inputBorder}`,
  borderRadius: theme.border.radius.standard,
  height: '42px',
  ':hover': {
    borderColor: theme.color.primaryInactive,
  },
  ':focus-within': {
    borderColor: theme.color.primary,
  },
  selectors: {
    '&:-webkit-autofill': {
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: theme.color.text,
    },
    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
  fontSize: 'medium',
  fontWeight: 'regular',
})

export const variants = styleVariants({
  normal: {},
  positive: {
    borderColor: theme.color.positive,
    ':hover': {
      borderColor: theme.color.positive,
    },
    ':focus-within': {
      borderColor: theme.color.positive,
    },
  },
  caution: {
    borderColor: theme.color.caution,
    ':hover': {
      borderColor: theme.color.caution,
    },
    ':focus-within': {
      borderColor: theme.color.caution,
    },
  },
})
