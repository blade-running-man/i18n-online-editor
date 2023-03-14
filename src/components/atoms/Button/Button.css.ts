import { theme } from '@/styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const button = style({
  appearance: 'none',
  border: 'none',
  padding: theme.space.medium,
  borderRadius: theme.border.radius.standard,
  cursor: 'pointer',
  outline: 0,
  transition: 'transform 60ms cubic-bezier(.08,.45,.62,1.77)',
  height: '42px',
  ':disabled': {
    cursor: 'default',
  },
  ':focus-visible': {
    boxShadow: `0 0 0 3px ${theme.color.primaryInactive}`,
  },
  selectors: {
    '&:active:not(:disabled)': {
      transform: 'scale(0.96)',
    },
  },
})

export const variants = styleVariants({
  normal: {
    background: theme.color.buttons,
    color: theme.color.white,
    ':disabled': {
      background: theme.color.buttonsInactive,
      color: theme.color.grey,
    },
    selectors: {
      '&:hover:not(:disabled)': {
        background: theme.color.buttonsHover,
      },
    },
  },
  outline: {
    background: theme.color.white,
    color: theme.color.primary,
    border: `1px solid ${theme.color.primary}`,
    ':disabled': {
      borderColor: theme.color.primaryInactive,
      color: theme.color.grey,
    },
    selectors: {
      '&:hover:not(:disabled)': {
        background: theme.color.grey,
      },
    },
  },
  flat: {
    color: theme.color.primary,
    background: 'transparent',
    ':disabled': {
      color: theme.color.grey,
    },
    selectors: {
      '&:hover:not(:disabled)': {
        background: theme.color.grey,
      },
    },
  },
  gray: {
    background: theme.color.grey,
    color: theme.color.black,
    ':disabled': {
      filter: 'brightness(130%) saturate(70%)',
    },
    selectors: {
      '&:hover:not(:disabled)': {
        filter: 'brightness(120%)',
      },
    },
  },
  grayAlt: {
    background: theme.color.grey,
    color: theme.color.black,
    filter: 'brightness(130%) saturate(70%) opacity(25%)',
  },
  warning: {
    background: theme.color.warning,
    color: theme.color.white,
    ':disabled': {
      filter: 'brightness(130%) saturate(70%)',
      color: theme.color.grey,
    },
    selectors: {
      '&:hover:not(:disabled)': {
        filter: 'brightness(120%)',
      },
    },
  },
  caution: {
    background: theme.color.caution,
    color: theme.color.white,
    ':disabled': {
      filter: 'brightness(130%) saturate(70%)',
      color: theme.color.grey,
    },
    selectors: {
      '&:hover:not(:disabled)': {
        filter: 'brightness(120%)',
      },
    },
  },
})
