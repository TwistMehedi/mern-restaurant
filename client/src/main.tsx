
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import Navbar from './Navbar/Navbar.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Navbar />
    <App />
    <Footer/>
  </BrowserRouter>,
)
