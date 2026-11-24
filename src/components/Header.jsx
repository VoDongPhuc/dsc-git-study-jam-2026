import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import DscLogo from './Logo'

export function Header({ activeTab, onSelectTab, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Về chúng tôi' },
    { id: 'contact', label: 'Liên hệ' },
  ]

  const handleTabClick = (id) => {
    onSelectTab(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Left: Logo CLB HCM-UTE DSC */}
        <div onClick={() => handleTabClick('home')}>
          <DscLogo />
        </div>

        {/* Center: 3 Required Tabs (Trang chủ, Về chúng tôi, Liên hệ) */}
        <nav className="nav-tabs" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`nav-tab-btn ${activeTab === item.id ? 'active' : ''}`}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Actions (Theme Toggle, GitHub) */}
        <div className="header-actions">
          {/* Theme Toggle (Sun / Moon) */}
          <button
            onClick={onToggleTheme}
            className="icon-btn"
            title={theme === 'dark' ? 'Chuyển sang Giao diện Sáng' : 'Chuyển sang Giao diện Tối'}
            aria-label="Đổi theme sáng tối"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Mobile hamburger menu */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu di động"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`mobile-tab-btn ${activeTab === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              {activeTab === item.id && <span style={{ color: '#FFFFFF' }}>●</span>}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
