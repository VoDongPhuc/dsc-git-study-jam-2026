import React from 'react'

export function DscLogo({ showSubtitle = true, size = 'normal' }) {
  const isLarge = size === 'large'
  const chevronHeight = isLarge ? 52 : 32
  const chevronWidth = isLarge ? 42 : 26

  return (
    <div className="brand-logo" style={{ cursor: 'pointer' }}>
      {/* SVG Icon matching Image 1: Orange Chevron > */}
      <svg
        width={chevronWidth}
        height={chevronHeight}
        viewBox="0 0 38 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M6 4L28 23L6 42H14.5L34 23L14.5 4H6Z"
          fill="#F05A28"
          stroke="#F05A28"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="brand-logo-text">
        <div className="brand-logo-main">
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: isLarge ? '2.4rem' : '1.45rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-main)',
            }}
          >
            DSC
          </span>
          {/* Orange Block Cursor _ matching Image 1 */}
          <span
            style={{
              display: 'inline-block',
              width: isLarge ? '22px' : '14px',
              height: isLarge ? '7px' : '4px',
              backgroundColor: '#F05A28',
              borderRadius: '1.5px',
              marginLeft: '2px',
              alignSelf: 'flex-end',
              marginBottom: isLarge ? '8px' : '4px',
            }}
          />
        </div>

        {showSubtitle && (
          <span className="brand-logo-sub">
            HCMUTE Developer Student Club
          </span>
        )}
      </div>
    </div>
  )
}

export default DscLogo
