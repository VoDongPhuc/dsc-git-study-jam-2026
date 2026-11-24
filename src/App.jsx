import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import ContactView from './components/ContactView'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Navigation tab state: 'home' | 'about' | 'contact'
  const [activeTab, setActiveTab] = useState('home')

  // Theme state: 'light' | 'dark'
  // Aligns with the user request to ensure light-toned colors match Image 1
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('dsc-theme')
    if (saved) return saved
    return 'light'
  })

  // Apply data-theme attribute on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('dsc-theme', theme)
  }, [theme])

  // Hash-based navigation support for direct deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (['home', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId)
    window.location.hash = tabId
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="app-layout">
      {/* Header bar with DSC logo and 3 tabs: Trang chủ, Về chúng tôi, Liên hệ */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Body Content switched dynamically via Header tabs */}
      <main id="main-content">
        {activeTab === 'home' && <HomeView onNavigateTab={handleSelectTab} />}
        {activeTab === 'about' && <AboutView />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  )
}

export default App
