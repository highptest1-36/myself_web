# 🚀 Portfolio Website - Cao Phúc Hà

Portfolio chuyên nghiệp cho AI Engineer & Robotics Researcher được xây dựng với **Next.js 14**, **TailwindCSS**, và **Framer Motion**.

![Portfolio Preview](./preview.png)

## ✨ Tính năng

- 🎨 **Modern Design**: Thiết kế hiện đại, chuyên nghiệp với animations mượt mà
- 🌓 **Dark/Light Mode**: Chuyển đổi theme dễ dàng
- 📱 **Fully Responsive**: Tối ưu cho mọi thiết bị
- ⚡ **Performance**: Tối ưu tốc độ tải trang và SEO
- 🎭 **Animations**: Framer Motion cho hiệu ứng chuyển động đẹp mắt
- ✨ **Particles Background**: Hiệu ứng hạt tương tác
- 📊 **Project Showcase**: Hiển thị dự án với hình ảnh và mô tả chi tiết
- 📚 **Publications**: Danh sách nghiên cứu và bài báo khoa học
- 🏆 **Awards**: Timeline các giải thưởng và chứng chỉ
- 📧 **Contact Form**: Form liên hệ đẹp mắt và dễ sử dụng

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Particles**: TSParticles
- **Theme**: next-themes
- **Language**: TypeScript

## 📦 Cài đặt

### 1. Cài đặt Node.js

Tải và cài đặt Node.js từ: https://nodejs.org/ (phiên bản LTS)

### 2. Clone hoặc sử dụng project này

Bạn đã có folder `c:\poforlio_web` với tất cả các file cần thiết.

### 3. Cài đặt dependencies

Mở PowerShell trong folder `c:\poforlio_web` và chạy:

\`\`\`bash
npm install
\`\`\`

### 4. Chạy development server

\`\`\`bash
npm run dev
\`\`\`

Website sẽ chạy tại: http://localhost:3000

## 🎨 Tùy chỉnh nội dung

### 1. Thông tin cá nhân

Chỉnh sửa trong các file component:

- `components/Hero.tsx` - Trang chủ, giới thiệu
- `components/About.tsx` - Thông tin cá nhân, kỹ năng
- `components/Contact.tsx` - Thông tin liên hệ

### 2. Projects

Chỉnh sửa mảng `projects` trong `components/Projects.tsx`:

\`\`\`typescript
const projects = [
  {
    title: "Tên dự án",
    description: "Mô tả ngắn gọn",
    tech: ["Tech1", "Tech2"],
    image: "/image/project.jpg",
    github: "link github",
    demo: "link demo",
    badges: ["Badge1", "Badge2"],
  },
  // Thêm project khác...
];
\`\`\`

### 3. Publications

Chỉnh sửa mảng `publications` trong `components/Publications.tsx`

### 4. Awards

Chỉnh sửa mảng `awards` trong `components/Awards.tsx`

### 5. Hình ảnh

- Thêm/thay thế hình ảnh trong folder `image/`
- Ảnh đại diện: `image/author1.jpg`
- Ảnh projects: các file trong `image/`

## 📤 Build và Deploy

### Build cho production

\`\`\`bash
npm run build
\`\`\`

Folder `out/` sẽ được tạo ra với static files.

### Deploy lên GitHub Pages

1. **Tạo repository mới trên GitHub**

2. **Push code lên GitHub**:

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
\`\`\`

3. **Cấu hình GitHub Pages**:
   - Vào Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (sẽ tạo sau khi deploy)

4. **Cài đặt gh-pages**:

\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

5. **Thêm scripts vào `package.json`**:

\`\`\`json
"scripts": {
  "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
}
\`\`\`

6. **Deploy**:

\`\`\`bash
npm run deploy
\`\`\`

Website sẽ có tại: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Deploy lên Vercel (Khuyến nghị)

1. Tạo tài khoản tại https://vercel.com
2. Import repository từ GitHub
3. Vercel sẽ tự động build và deploy
4. Website sẽ có domain miễn phí: `your-project.vercel.app`

### Deploy lên Netlify

1. Tạo tài khoản tại https://netlify.com
2. Drag & drop folder `out/` sau khi build
3. Hoặc connect với GitHub để auto-deploy

## 🎯 Cấu trúc thư mục

\`\`\`
poforlio_web/
├── app/
│   ├── layout.tsx          # Layout chính
│   ├── page.tsx            # Trang chủ
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects section
│   ├── Publications.tsx    # Publications section
│   ├── Awards.tsx          # Awards section
│   ├── Contact.tsx         # Contact section
│   ├── ParticlesBackground.tsx
│   └── ThemeProvider.tsx   # Theme provider
├── image/                  # Hình ảnh
├── public/                 # Static files
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
\`\`\`

## 🔧 Troubleshooting

### Port 3000 đã được sử dụng

\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Lỗi khi build

Xóa folder `.next` và `node_modules`, sau đó:

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📝 License

MIT License - Free to use for personal and commercial projects.

## 📧 Contact

- **Email**: caophuc@example.com
- **GitHub**: https://github.com/caophuc
- **LinkedIn**: https://linkedin.com/in/caophuc

---

**Built with ❤️ by Cao Phúc Hà**

Bridging Deep Learning and Control Theory 🤖
