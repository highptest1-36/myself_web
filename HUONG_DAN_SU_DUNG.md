# 🎉 PORTFOLIO WEBSITE ĐÃ SẴN SÀNG!

## ✅ Website đã được xây dựng thành công!

**URL:** http://localhost:3000

## 🌟 Tính năng chính

✨ **6 Sections đầy đủ:**
1. **Hero** - Giới thiệu với typing animation và particle background
2. **About** - Thông tin cá nhân, skills, timeline học vấn
3. **Projects** - Showcase 6 dự án với hình ảnh thật
4. **Publications** - 3 bài báo khoa học đã được accept
5. **Awards** - 6 giải thưởng và certifications từ Google Cloud
6. **Contact** - Form liên hệ và thông tin liên lạc

🎨 **Animations chuyên nghiệp:**
- Particle background tương tác
- Typing animation cho tiêu đề
- Smooth scroll giữa các sections
- Hover effects trên cards
- Fade in/slide up animations
- Dark/Light mode toggle

📱 **Fully Responsive** - Tối ưu cho mọi thiết bị

## 📝 Tùy chỉnh nội dung

### 1. Thông tin cá nhân và Contact

Mở file `components/Hero.tsx` và `components/Contact.tsx` để cập nhật:
- Email, số điện thoại, địa chỉ
- Links GitHub, LinkedIn, Google Scholar
- Thông tin cá nhân

### 2. Thay đổi hình ảnh

**Ảnh đại diện (author photo):**
- Thay file `public/author1.jpg` bằng ảnh của bạn
- Hoặc cập nhật đường dẫn trong `components/Hero.tsx`

**Ảnh projects:**
- Các ảnh đã được copy từ folder `image/` sang `public/`  
- Update đường dẫn trong `components/Projects.tsx` và `components/Awards.tsx`

### 3. Cập nhật Projects

File: `components/Projects.tsx`

```typescript
const projects = [
  {
    title: "Tên dự án của bạn",
    description: "Mô tả ngắn gọn",
    tech: ["Tech1", "Tech2", "Tech3"],
    image: "/author1.jpg",  // Đường dẫn ảnh
    github: "https://github.com/yourname/repo",
    demo: "https://demo-link.com",
    badges: ["Badge1", "Badge2"],
  },
];
```

### 4. Cập nhật Publications

File: `components/Publications.tsx`

### 5. Cập nhật Awards

File: `components/Awards.tsx`

## 🚀 Các lệnh cơ bản

```bash
# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production build
npm start
```

## 📤 Deploy lên Internet MIỄN PHÍ

### Cách 1: Vercel (Khuyến nghị - Dễ nhất)

1. Tạo tài khoản tại https://vercel.com
2. Click "New Project"
3. Import repository từ GitHub
4. Vercel tự động build và deploy
5. Nhận domain miễn phí: `ten-ban.vercel.app`

### Cách 2: GitHub Pages

```bash
# 1. Cài gh-pages
npm install --save-dev gh-pages

# 2. Thêm vào package.json -> scripts:
"deploy": "next build && next export && gh-pages -d out"

# 3. Deploy
npm run deploy
```

Website sẽ có tại: `https://username.github.io/ten-repo`

### Cách 3: Netlify

1. Build website: `npm run build`
2. Vào https://netlify.com
3. Drag & drop folder `out/`
4. Nhận domain miễn phí

## 🎨 Tùy chỉnh màu sắc và theme

File: `tailwind.config.ts`

Thay đổi màu gradient chính:
```typescript
colors: {
  primary: {
    // Thay đổi các giá trị này
    500: '#0ea5e9',
    600: '#0284c7',
  },
},
```

## 🔧 Fix lỗi thường gặp

### 1. Port 3000 đã được sử dụng
```bash
npm run dev -- -p 3001
```

### 2. Hình ảnh không hiển thị
- Kiểm tra ảnh có trong folder `public/`
- Đường dẫn phải bắt đầu bằng `/` (ví dụ: `/author1.jpg`)

### 3. Lỗi khi build
```bash
# Xóa cache
rm -rf .next node_modules
npm install
npm run dev
```

## 📧 Liên hệ và Support

Nếu cần hỗ trợ hoặc muốn tùy chỉnh thêm, hãy liên hệ!

---

## 🎯 Next Steps (Các bước tiếp theo)

1. ✅ Cập nhật thông tin cá nhân của bạn
2. ✅ Thay thế hình ảnh
3. ✅ Deploy lên Vercel hoặc Netlify
4. ✅ Chia sẻ link portfolio với nhà tuyển dụng

**Chúc may mắn với công việc tìm kiếm của bạn! 🚀**

---

**Built with ❤️ using Next.js 14, TailwindCSS, and Framer Motion**
