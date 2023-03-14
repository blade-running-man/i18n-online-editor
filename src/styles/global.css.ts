import { globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle('html,body', {
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: '#0000',
  textSizeAdjust: 'none',
  touchAction: 'manipulation',
  fontFamily: theme.fontFamily,
  fontWeight: theme.fontWeight.regular,
  fontSize: 16,
  margin: 0,
  padding: 0,
})

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  lineHeight: 1.15,
  WebkitTextSizeAdjust: '100%',
})

globalStyle('html,body,#root', {
  height: '100%',
  width: '100%',
})

globalStyle('button,input,optgroup,select,textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: 1.15,
  margin: 0,
  padding: 0,
})

// Selection color
globalStyle('::selection', {
  background: theme.color.white,
  color: theme.color.white,
})

// Scrollbar
globalStyle('::-webkit-scrollbar', {
  width: '11px',
  backgroundColor: 'transparent',
})

globalStyle('::-webkit-scrollbar:hover', {
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
})

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  backgroundClip: 'padding-box',
  border: '3px solid transparent',
})

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
})
