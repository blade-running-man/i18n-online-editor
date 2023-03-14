import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'
import '@/services/i18next'
import 'normalize.css'
import '@/styles/global.css'
import '@/styles/theme.css'

const mountNode = document.getElementById('root')

if (mountNode) {
  const root = createRoot(mountNode)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
