import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MLP from './pages/MLP'
import DEX from './pages/DEX'
import DEXCommercial from './pages/DEXCommercial'
import DEXPublicSector from './pages/DEXPublicSector'
import SpecialFund from './pages/SpecialFund'
import Contact from './pages/Contact'
import CookiePolicy from './pages/CookiePolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Library from './pages/Library'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MLP" element={<MLP />} />
          <Route path="/DEX" element={<DEX />} />
          <Route path="/DEX/Commercial" element={<DEXCommercial />} />
          <Route path="/DEX/PublicSector" element={<DEXPublicSector />} />
          <Route path="/SpecialFund" element={<SpecialFund />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
