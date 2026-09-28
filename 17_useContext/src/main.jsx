import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TheamContextAPI from './Context/TheamContextAPI.jsx'

createRoot(document.getElementById('root')).render(
 <TheamContextAPI>
   <App />
  
 </TheamContextAPI>

)
