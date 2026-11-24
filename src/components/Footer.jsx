import React from 'react'
import DscLogo from './Logo'

export function Footer({ onSelectTab }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div onClick={() => onSelectTab('home')}>
            <DscLogo size="normal" showSubtitle={true} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onSelectTab('home')}
              style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}
            >
              Trang chủ
            </button>
            <button
              onClick={() => onSelectTab('about')}
              style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}
            >
              Về chúng tôi
            </button>
            <button
              onClick={() => onSelectTab('contact')}
              style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}
            >
              Liên hệ
            </button>
            <a
              href="https://hcmute-dsc.io.vn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.9rem', color: 'var(--dsc-orange)', fontWeight: 600 }}
            >
              hcmute-dsc.io.vn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>© 2026 HCMUTE Developer Student Club. Git &amp; GitHub Study Jam.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
