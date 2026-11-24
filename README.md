# Git & GitHub Study Jam 2026 - HCM-UTE DSC

Dự án tham gia cuộc thi thiết kế UI cho **Git & GitHub Study Jam 2026** do **HCMUTE Developer Student Club** tổ chức.

## 🚀 Thông tin nhóm Côn Đồ Trên Con Đò
- **Nhánh làm việc:** `feature/home` (phát triển từ `init-codebase`)
- **Tên nhóm:** Côn Đồ Trên Con Đò (HCM-UTE DSC)
- **Slogan:** *"Git push một phát, cả nhóm mát lòng — Conflict một dòng, khóc ròng tới sáng"*

### Phân công nhiệm vụ thành viên:
1. **Võ Đông Phúc** (Nhóm trưởng) - MSSV: `25110307` - [Facebook](https://www.facebook.com/share/1DngFZnegh/?mibextid=wwXIfr)
   - *Nhiệm vụ:* Tạo branch `init-codebase` từ branch `main`, tạo pull request trên branch `init-codebase`, trỏ vào branch `main`; pull request phải có mô tả (description); tên của pull request (title), mô tả pull request (description), và commit message phải được viết bằng tiếng Anh.
2. **Lương Hoàng Nhất Lâm** (Thành viên còn lại) - MSSV: `25110254` - [Facebook](https://www.facebook.com/share/18bE9Ye6MZ/?mibextid=wwXIfr)
   - *Nhiệm vụ:* Tạo branch `feature/home` từ branch `init-codebase` (sau khi nhóm trưởng hoàn thành xong), tạo pull request trên branch `feature/home`, trỏ vào branch `main`; pull request phải có mô tả (description); tên của pull request (title), mô tả pull request (description), và commit message phải được viết bằng tiếng Anh.

3. **Nguyễn Trọng Khiêm** (Thành viên) - MSSV: `25119102` - [Facebook](https://www.facebook.com/nguyen.trong.khiem.638790/about?locale=vi_VN)
   - *Nhiệm vụ:* Phụ trách nghiên cứu bảng màu thương hiệu logo DSC, phối hợp phát triển giao diện theo chuẩn thiết kế và kiểm thử chất lượng sản phẩm.

## 🎨 Điểm nổi bật về thiết kế (UI/UX)
1. **Bảng màu thương hiệu CLB (Hình 1):**
   - Màu chủ đạo: DSC Orange (`#F05A28`, `#EA580C`).
   - Tông màu sáng (Light Theme): Đồng bộ chính xác theo logo `>DSC_`, nền sáng thanh lịch (`#F8FAFC`, `#FFFFFF`), độ tương phản cao, badge và pill cam mềm mại.
   - Hỗ trợ chế độ tối (Dark Theme): Phong cách Midnight Slate (`#080D1A`, `#0B132B`) lấy cảm hứng từ hero banner của website CLB.
2. **Bố cục Hero Portfolio (Hình 2):**
   - Thiết kế 2 cột chuẩn portfolio hiện đại (Folio style).
   - Cột trái: Tag trạng thái, Tiêu đề lớn nổi bật, Subtitle, Hộp thông tin nhóm & slogan, Cụm nút CTA bo tròn, Dải thống kê nổi bật (Stats row).
   - Cột phải: Card ảnh nhóm bo góc mềm mại, huy hiệu nổi `🔥 Sẵn sàng bứt phá 2026` ở góc dưới bên trái.
   - Watermark code chìm phía sau lấy cảm hứng trực tiếp từ website `hcmute-dsc.io.vn`.
3. **Thanh Header & Điều hướng (Hình 3):**
   - Logo chính thức CLB HCM-UTE DSC (`>DSC_`).
   - Đầy đủ 3 tab theo yêu cầu: **Trang chủ**, **Về chúng tôi**, **Liên hệ**.
   - Nút chuyển đổi giao diện Sáng / Tối (Sun / Moon) linh hoạt.
   - Nút CTA tham gia và liên kết GitHub.
4. **Hệ thống Placeholder theo yêu cầu đề bài:**
   - Khi bấm vào tab **Về chúng tôi**: hiển thị khung placeholder phần body kèm danh sách thành viên với nhiệm vụ chi tiết và liên kết Facebook cá nhân.
   - Khi bấm vào tab **Liên hệ**: hiển thị khung placeholder phần body kèm thông tin liên lạc và form gửi phản hồi.

## 💻 Hướng dẫn chạy dự án
```bash
# Cài đặt thư viện
npm install

# Khởi chạy môi trường phát triển (Dev)
npm run dev

# Kiểm tra linting
npm run lint

# Build production
npm run build
```
