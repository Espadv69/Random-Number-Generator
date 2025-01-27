import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <h1>hello, world!</h1>
  </StrictMode>
)
