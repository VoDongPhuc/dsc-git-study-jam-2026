import React, { useState } from 'react'
import {
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle,
} from 'lucide-react'

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: '',
    })
    setSubmitted(true)
  }

  return (
    <div className="contact-view section-padding" style={{ minHeight: '75vh' }}>
      <div className="container">
        {/* Breadcrumb / Top Tag */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span className="badge-tag">
            <Mail size={14} />
            KẾT NỐI VỚI CHÚNG TÔI
          </span>
          <h1 className="section-title" style={{ marginTop: '16px' }}>
            Liên hệ
          </h1>
          <p className="section-desc">
            Kết nối với đội ngũ thực hiện dự án Côn Đồ Trên Con Đò và Ban chủ nhiệm CLB HCMUTE Developer Student Club.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Thông Tin Liên Hệ CLB
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Mọi thắc mắc về kỹ thuật Git, quy trình Pull Request hoặc hợp tác cùng CLB, bạn có thể liên hệ trực tiếp qua các kênh sau:
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    Địa điểm sinh hoạt
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Trường ĐH Sư phạm Kỹ thuật TP.HCM (HCMUTE)<br />
                    Số 1 Võ Văn Ngân, Phường Linh Chiểu, TP. Thủ Đức, TP.HCM
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    Email hỗ trợ
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    dsc.hcmute@gmail.com
                  </div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Globe size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    Trang web chính thức
                  </div>
                  <a
                    href="https://hcmute-dsc.io.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.88rem', color: 'var(--dsc-orange)', fontWeight: 600, marginTop: '2px', display: 'inline-block' }}
                  >
                    hcmute-dsc.io.vn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px' }}>
              Gửi Tin Nhắn Cho Nhóm
            </h3>

            {submitted && (
              <div
                style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.12)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <CheckCircle size={22} style={{ flexShrink: 0, color: '#22c55e' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem' }}>
                    Tin nhắn đã được gửi thành công!
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Cảm ơn bạn đã liên hệ. Đội ngũ Côn Đồ Trên Con Đò sẽ phản hồi sớm nhất.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Họ và tên của bạn</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => {
                    if (submitted) setSubmitted(false)
                    setFormData({ ...formData, name: e.target.value })
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Địa chỉ Email</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => {
                    if (submitted) setSubmitted(false)
                    setFormData({ ...formData, email: e.target.value })
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Chủ đề thảo luận</label>
                <input
                  type="text"
                  placeholder="Nhập chủ đề bạn muốn thảo luận..."
                  className="form-input"
                  value={formData.topic}
                  onChange={(e) => {
                    if (submitted) setSubmitted(false)
                    setFormData({ ...formData, topic: e.target.value })
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nội dung tin nhắn</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Nhập nội dung tin nhắn hoặc góp ý của bạn..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => {
                    if (submitted) setSubmitted(false)
                    setFormData({ ...formData, message: e.target.value })
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <Send size={16} />
                <span>Gửi tin nhắn</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactView
