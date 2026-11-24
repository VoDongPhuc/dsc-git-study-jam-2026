import React from 'react'
import TeamCard from './TeamCard'

export function HomeView() {
  return (
    <div className="home-view">
      {/* Hero Section (Modeled after Image 2 Folio UI & Image 3 Specifications) */}
      <section className="hero-section">
        {/* Ambient Glow */}
        <div className="hero-glow-blob" />

        <div className="container">
          <div className="hero-grid">
            {/* Left Column (Modeled after Image 2 Folio UI) */}
            <div className="hero-content">
              {/* AVAILABLE FOR WORK / STUDY JAM Tag */}
              <div>
                <span className="badge-tag">
                  <span className="dot" />
                  AVAILABLE FOR STUDY JAM 2026
                </span>
              </div>

              {/* Title & Subtitle Required by Image 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h1 className="hero-headline">
                  <span className="text-gradient">Git &amp; GitHub</span>{' '}
                  <span>Study Jam</span>
                </h1>

                {/* Subtitle required: HCM-UTE DSC 2026 */}
                <div className="hero-subtitle-badge">
                  <span>HCM-UTE DSC 2026</span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Nhiệm Vụ Tuần 1
                  </span>
                </div>
              </div>

              {/* Team Name & Slogan Required by Image 3 */}
              <div className="team-meta-box">
                <span className="team-meta-label">🏷️ Tên nhóm:</span>
                <span className="team-meta-value" style={{ fontWeight: 700, color: 'var(--dsc-orange)' }}>
                  Côn Đồ Trên Con Đò
                </span>
                <span className="team-meta-label">✨ Slogan của nhóm:</span>
                <span className="team-slogan-italic">
                  "Git push một phát, cả nhóm mát lòng — Conflict một dòng, khóc ròng tới sáng"
                </span>
              </div>

              {/* Bio / Description */}
              <p className="hero-description">
                Chào mừng bạn đến với không gian dự án của nhóm tại <strong>Git &amp; GitHub Study Jam 2026</strong> do{' '}
                <strong>HCMUTE Developer Student Club</strong> tổ chức.
              </p>
            </div>

            {/* Right Column: Team Image Card (Ảnh nhóm tự chọn) */}
            <div className="hero-visual">
              <TeamCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeView
