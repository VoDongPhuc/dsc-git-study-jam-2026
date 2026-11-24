import React from 'react'
import {
  Users,
  ExternalLink,
} from 'lucide-react'

function FacebookIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function AboutView() {
  const teamMembers = [
    {
      name: 'Võ Đông Phúc',
      mssv: '25110307',
      role: 'Nhóm trưởng',
      avatar: '/avatars/phuc.png',
      facebook: 'https://www.facebook.com/share/1DngFZnegh/?mibextid=wwXIfr',
      github: 'VoDongPhuc',
      desc: `BUG KHÔNG TỰ SINH RA, NÓ DO MÌNH VIẾT!
Mình là Võ Đông Phúc – thành viên cầm lái của Côn Đồ Trên Con Đò. Sẵn sàng bật chế độ "chiến thần thức khuya" để cùng anh em san phẳng mọi thử thách thú vị từ nhà DSC.`,
      tag: 'Leader',
    },
    {
      name: 'Lương Hoàng Nhất Lâm',
      mssv: '25110254',
      role: 'Thành viên còn lại',
      avatar: '/avatars/lam.png',
      facebook: 'https://www.facebook.com/share/18bE9Ye6MZ/?mibextid=wwXIfr',
      github: 'lh-nhatlam',
      desc: `System.out.println("Name : Nhất Lâm");
System.out.println("Group : Côn Đồ Trên Con Đò");
Mình mong sau những nhiệm vụ như thế này mình có thể tiến bộ từng chút một và có những kinh nghiệm thật thú vị cho sau này ạ, cảm ơn mọi người.`,
      tag: 'Member',
    },
    {
      name: 'Nguyễn Trọng Khiêm',
      mssv: '25119102',
      role: 'Thành viên',
      avatar: '/avatars/khiem.png',
      facebook: 'https://www.facebook.com/nguyen.trong.khiem.638790/about?locale=vi_VN',
      github: 'nt-khiem',
      desc: `Xin chào, mình là Nguyễn Trọng Khiêm, thành viên của team Côn đồ trên con đò. Hiện tại mình mới bắt đầu tiếp cận với Git nên còn nhiều bỡ ngỡ, nhưng mình cam kết sẽ nỗ lực 500% để học hỏi và hoàn thành tốt nhất mọi nhiệm vụ được giao. Rất mong nhận được sự hỗ trợ từ cả nhóm.`,
      tag: 'Member',
    },
  ]

  return (
    <div className="about-view section-padding" style={{ minHeight: '75vh' }}>
      <div className="container">
        {/* Breadcrumb / Top Tag */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span className="badge-tag">
            <Users size={14} />
            GIỚI THIỆU NHÓM &amp; CLB
          </span>
          <h1 className="section-title" style={{ marginTop: '16px' }}>
            Về chúng tôi
          </h1>
          <p className="section-desc">
            Không gian giới thiệu đội ngũ thực hiện dự án Git &amp; GitHub Study Jam 2026 và câu lạc bộ HCMUTE Developer Student Club.
          </p>
        </div>

        {/* Team Members Grid - 3 Cards */}
        <div style={{ marginTop: '40px' }}>
          <h3
            style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            Côn Đồ Trên Con Đò (HCM-UTE DSC)
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="member-info-card"
              >
                {/* Header: Role Tag on Left & MSSV Badge on Right */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '5px 14px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: member.tag === 'Leader' ? 'var(--dsc-orange)' : 'var(--bg-surface-alt)',
                      color: member.tag === 'Leader' ? '#fff' : 'var(--text-secondary)',
                      boxShadow: member.tag === 'Leader' ? 'var(--shadow-orange)' : 'none',
                      border: member.tag === 'Leader' ? 'none' : '1px solid var(--border-subtle)',
                    }}
                  >
                    {member.tag}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--bg-code)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    MSSV: {member.mssv}
                  </span>
                </div>

                {/* Member Header Info with Avatar Photo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="member-avatar-img"
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        border: '3px solid var(--dsc-orange)',
                        boxShadow: 'var(--shadow-md)',
                        flexShrink: 0,
                        imageRendering: '-webkit-optimize-contrast',
                        filter: 'contrast(1.05) brightness(1.02)',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-pill)',
                        color: 'var(--dsc-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid var(--border-pill)',
                        boxShadow: 'var(--shadow-sm)',
                        flexShrink: 0,
                      }}
                    >
                      <Users size={38} />
                    </div>
                  )}

                  <div>
                    <h4 style={{ fontSize: '1.28rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
                      {member.name}
                    </h4>
                    <div
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--dsc-orange)',
                        fontWeight: 700,
                        marginTop: '4px',
                      }}
                    >
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Member Personal Intro */}
                <div style={{ marginTop: '2px' }}>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      whiteSpace: 'pre-line',
                      margin: 0,
                    }}
                  >
                    {member.desc}
                  </p>
                </div>

                {/* Social Links Footer (Facebook & GitHub) */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Facebook Link Button */}
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: '#1877F2',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(24, 119, 242, 0.08)',
                      transition: 'all var(--transition-fast)',
                    }}
                    title={`Facebook cá nhân của ${member.name}`}
                  >
                    <FacebookIcon size={16} />
                    <span>Facebook</span>
                    <ExternalLink size={12} />
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-surface-alt)',
                    }}
                    title={`GitHub Profile của ${member.name}`}
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Club Information Banner */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: 'var(--bg-surface-alt)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Về HCMUTE Developer Student Club
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Được thành lập từ ngày 20/07/2021 tại Trường Đại học Sư phạm Kỹ thuật TP.HCM, HCMUTE DSC là cầu nối giúp sinh viên tiếp cận các công nghệ tiên tiến của Google, nâng cao kỹ năng lập trình, giải quyết bài toán thực tế và xây dựng sản phẩm phục vụ cộng đồng.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                fontWeight: 700,
                fontSize: '0.88rem',
                color: 'var(--dsc-orange)',
              }}
            >
              5 Năm Phát Triển (2021 – 2026)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutView
