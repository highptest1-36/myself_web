# 🎯 Hướng Dẫn Setup GitHub Profile Chuyên Nghiệp

## ✅ Code đã được push thành công!

🔗 **Repository:** https://github.com/highptest1-36/myself_web

---

## 📝 Bước 1: Tạo GitHub Profile README

### 1.1. Tạo Repository Đặc Biệt

1. Vào GitHub: https://github.com/new
2. **Repository name:** `highptest1-36` (trùng với username của bạn)
3. ✅ Check "Public"
4. ✅ Check "Add a README file"
5. Click "Create repository"

### 1.2. Copy Nội Dung Profile README

1. Mở file: `GITHUB_PROFILE_README.md` (đã tạo sẵn trong project)
2. Copy toàn bộ nội dung
3. Vào repository `highptest1-36` vừa tạo
4. Click vào file `README.md`
5. Click nút "Edit" (biểu tượng bút chì)
6. Xóa nội dung cũ và paste nội dung mới
7. Scroll xuống dưới, click "Commit changes"

### 1.3. Kết quả

✨ Trang profile của bạn tại https://github.com/highptest1-36 sẽ hiển thị:
- Typing animation với các role của bạn
- Badges và social links
- GitHub stats và activity graphs
- Featured projects và publications
- Tech stack với icons đẹp mắt
- Contact information

---

## 🚀 Bước 2: Deploy Website lên GitHub Pages

### 2.1. Cấu hình GitHub Pages

1. Vào repository: https://github.com/highptest1-36/myself_web
2. Click **Settings** (góc trên bên phải)
3. Scroll xuống tìm **Pages** (menu bên trái)
4. Trong phần **Source**, chọn:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 2.2. Cài đặt gh-pages để Deploy

Mở terminal trong `C:\poforlio_web`:

```bash
# 1. Cài đặt gh-pages
npm install --save-dev gh-pages

# 2. Cập nhật package.json
# Thêm script sau vào file package.json:
```

File `package.json` cần có script:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build && next export",
  "deploy": "npm run export && gh-pages -d out"
}
```

### 2.3. Deploy Website

```bash
# Build và deploy
npm run deploy
```

**Hoặc sử dụng Vercel (Khuyến nghị - Dễ hơn):**

1. Vào https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import repository `highptest1-36/myself_web`
5. Click "Deploy"
6. Đợi vài phút → Website sẽ live!

---

## 🎨 Bước 3: Tùy Chỉnh Profile README

### 3.1. Cập nhật Thông Tin Cá Nhân

Mở file `GITHUB_PROFILE_README.md` và thay đổi:

```markdown
# Thay đổi links
[![LinkedIn](...)(...YOUR_LINKEDIN...)]
[![Email](...)(...YOUR_EMAIL...)]

# Thay đổi email và phone
📧 **Email:** your-real-email@gmail.com
📱 **Phone:** +84 XXX XXX XXX
```

### 3.2. Thêm Banner/Header Image (Tùy chọn)

Tạo banner tại: https://www.canva.com

Sau đó thêm vào đầu README:
```markdown
![Header](https://your-image-url.png)
```

### 3.3. Các Widget Bổ Sung

#### GitHub Stats
```markdown
![Stats](https://github-readme-stats.vercel.app/api?username=highptest1-36&show_icons=true&theme=tokyonight)
```

#### Contribution Graph
```markdown
![Graph](https://github-readme-activity-graph.vercel.app/graph?username=highptest1-36&theme=react-dark)
```

#### Streak Stats
```markdown
![Streak](https://github-readme-streak-stats.herokuapp.com/?user=highptest1-36&theme=tokyonight)
```

---

## 📊 Bước 4: Cải Thiện Profile

### 4.1. Pin Repositories Quan Trọng

1. Vào trang profile: https://github.com/highptest1-36
2. Scroll xuống phần "Popular repositories"
3. Click "Customize your pins"
4. Chọn 6 repositories quan trọng nhất
5. Click "Save pins"

### 4.2. Tạo Repositories Nổi Bật

Tạo repositories cho các projects chính:
- `self-driving-car` - Autonomous vehicle project
- `drone-control-system` - UAV control với Jetson
- `bitcoin-forecasting-xai` - XAI for crypto
- `virtual-assistant-fpt` - Multimodal AI assistant

Mỗi repo nên có:
- ✅ README.md chi tiết
- ✅ Screenshots/GIFs demo
- ✅ Tech stack badges
- ✅ Setup instructions
- ✅ License

### 4.3. Tạo Organization (Tùy chọn)

Nếu muốn trông chuyên nghiệp hơn:
1. Tạo GitHub Organization: https://github.com/organizations/new
2. Tên organization: `CaoPhuc-AI-Lab` hoặc tương tự
3. Move projects vào organization

---

## 🔗 Bước 5: Liên Kết Mọi Thứ

### 5.1. Update Portfolio Website

Trong file `components/Hero.tsx` và `components/Contact.tsx`, cập nhật:

```typescript
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/highptest1-36", label: "GitHub" },
  { icon: FaLinkedin, href: "YOUR_LINKEDIN", label: "LinkedIn" },
  // ...
];
```

### 5.2. Update GitHub Profile README

Thêm link đến portfolio:
```markdown
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue)](https://highptest1-36.github.io/myself_web)
```

hoặc nếu dùng Vercel:
```markdown
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue)](https://your-site.vercel.app)
```

---

## ✨ Kết Quả Cuối Cùng

Sau khi hoàn thành, bạn sẽ có:

1. ✅ **GitHub Profile** chuyên nghiệp tại: https://github.com/highptest1-36
   - Typing animation
   - Tech stack với badges
   - GitHub stats và graphs
   - Featured projects
   - Publications showcase

2. ✅ **Portfolio Website** live tại:
   - GitHub Pages: https://highptest1-36.github.io/myself_web
   - Hoặc Vercel: https://your-name.vercel.app

3. ✅ **Repository Code** tại: https://github.com/highptest1-36/myself_web

---

## 🎯 Next Steps

1. ✅ Tạo repository `highptest1-36` cho profile README
2. ✅ Copy nội dung từ `GITHUB_PROFILE_README.md`
3. ✅ Deploy website lên Vercel hoặc GitHub Pages
4. ✅ Pin repositories quan trọng
5. ✅ Cập nhật thông tin liên hệ thật
6. ✅ Thêm screenshots cho các projects
7. ✅ Link portfolio và GitHub lẫn nhau

---

## 📧 Support

Nếu cần hỗ trợ:
1. Check documentation tại README files
2. Xem GitHub Pages settings
3. Kiểm tra build logs

**Chúc mừng! Bạn đã có một GitHub profile chuyên nghiệp! 🎉**

---

**Made with ❤️ for Cao Phúc Hà**
