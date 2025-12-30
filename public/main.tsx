import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nova from '../lib/index';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Nova />
</StrictMode>,
)
