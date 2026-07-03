import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './themes.css'

import PageInvitation from './pages/PageInvitation'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<PageInvitation/>
	</StrictMode>,
)
