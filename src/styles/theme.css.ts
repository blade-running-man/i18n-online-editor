import { createGlobalTheme } from '@vanilla-extract/css'

export const breakpoints = {
  mobile: '',
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
}

export const colorVars = {
  black: '#000',
  white: '#FFF',
  panel: '#FFF',
  input: '#FFF',
  inputBorder: '#DFDFDF',
  body: '#F5F5F5',
  lightGrey: '#F5F5F5',
  grey: '#DFDFDF',
  darkGrey: '#C7C7C7',
  text: '#333333',
  primary: '#39AFFD',
  primaryHover: '#339EE4',
  primaryInactive: '#9AD6FE',
  positive: '#02C39A',
  warning: '#FF6F42',
  caution: '#F73859',
  buttons: '#39AFFD',
  buttonsHover: '#339EE4',
  buttonsInactive: '#9AD6FE',
}

export const theme = createGlobalTheme(':root', {
  space: {
    gutter: '10px',
    small: '5px',
    medium: '10px',
    large: '15px',
    xlarge: '20px',
  },
  color: {
    black: colorVars.black,
    white: colorVars.white,
    panel: colorVars.panel,
    input: colorVars.input,
    inputBorder: colorVars.inputBorder,
    body: colorVars.body,
    lightGray: colorVars.lightGrey,
    grey: colorVars.grey,
    darkGrey: colorVars.darkGrey,
    text: colorVars.text,
    primary: colorVars.primary,
    primaryHover: colorVars.primaryHover,
    primaryInactive: colorVars.primaryInactive,
    positive: colorVars.positive,
    warning: colorVars.warning,
    caution: colorVars.caution,
    buttons: colorVars.buttons,
    buttonsHover: colorVars.buttonsHover,
    buttonsInactive: colorVars.buttonsInactive,
  },
  fontFamily: "'Roboto', sans-serif",
  fontSize: {
    small: '12px',
    medium: '14px',
    large: '16px',
  },
  fontWeight: {
    regular: '400',
    bold: '500',
  },
  border: {
    radius: {
      standard: '6px',
    },
  },
  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    large: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
})
