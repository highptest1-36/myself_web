"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.awards": "Awards",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role1": "AI Engineer",
    "hero.role2": "Robotics Researcher",
    "hero.role3": "Computer Vision Expert",
    "hero.role4": "NLP Enthusiast",
    "hero.description": "Passionate AI Engineering student specializing in Computer Vision, NLP, and Robotics. Building intelligent systems that bridge deep learning and control theory.",
    "hero.viewProjects": "View Projects",
    "hero.downloadCV": "Download CV",
    
    // About
    "about.title": "About Me",
    "about.subtitle": "Bridging Deep Learning and Control Theory",
    "about.intro": "AI & Robotics student with strong hands-on experience in computer vision, NLP, and embedded systems. I build real-time AI applications on Jetson platforms (Nano/Orin) for autonomous control, lane-keeping, and intelligent assistants, focusing on efficient, deployable systems that bridge research and practice to highlighting my work at the intersection of control theory and computer vision. I'm motivated to contribute to impactful robotics and embedded-AI projects while continually refining on-edge optimization and system integration skills.",
    "about.experience": "Years of Experience",
    "about.projects": "Projects Completed",
    "about.publications": "Research Publications",
    "about.education": "Education",
    "about.university": "Ho Chi Minh City University of Technology (VNU-HCM)",
    "about.degree": "Bachelor of Engineering in Control Engineering and Automation",
    "about.gpa": "GPA: 8.45/10",
    "about.interests": "Research Interests",
    "about.interest1": "Computer Vision & Object Detection",
    "about.interest2": "Natural Language Processing",
    "about.interest3": "Robotics & Autonomous Systems",
    "about.interest4": "Embedded AI & Edge Computing",
    
    // Skills
    "skills.title": "Skills & Expertise",
    "skills.subtitle": "Technical arsenal for building intelligent systems",
    "skills.tab1": "Technical Skills",
    "skills.tab2": "Academic Profile",
    "skills.tab3": "Certifications",
    "skills.chart.title": "Skill Proficiency Radar",
    "skills.ai": "AI & Machine Learning",
    "skills.cv": "Computer Vision",
    "skills.robotics": "Robotics & Control",
    "skills.nlp": "NLP & LLMs",
    "skills.embedded": "Embedded Systems",
    "skills.cloud": "Cloud & MLOps",
    
    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "From concept to deployment - Real-world AI solutions",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",
    "projects.closeVideo": "Close Video",
    
    // Publications
    "publications.title": "Research Publications",
    "publications.subtitle": "Contributing to the AI research community",
    
    // Awards
    "awards.title": "Honors & Awards",
    "awards.subtitle": "Recognition for excellence in AI and innovation",
    "awards.certifications": "Certifications",
    
    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's discuss opportunities in AI, robotics, or research collaboration",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.connect": "Connect With Me",
    "contact.available": "Available for Opportunities",
    "contact.availableDesc": "Open to internships, research collaborations, and full-time positions in AI & Robotics",
    "contact.name": "Your Name",
    "contact.yourEmail": "Your Email",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project or opportunity...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.sent": "Message Sent! ✓",
    "contact.footer": "Built with Next.js & TailwindCSS",
    "contact.tagline": "Bridging Deep Learning and Control Theory 🤖",
    
    // Butterfly Control
    "butterfly.toggle": "Toggle Butterflies",
  },
  vi: {
    // Navbar
    "nav.home": "Trang Chủ",
    "nav.about": "Giới Thiệu",
    "nav.skills": "Kỹ Năng",
    "nav.projects": "Dự Án",
    "nav.publications": "Nghiên Cứu",
    "nav.awards": "Giải Thưởng",
    "nav.contact": "Liên Hệ",
    
    // Hero
    "hero.greeting": "Xin chào, tôi là",
    "hero.role1": "Kỹ Sư AI",
    "hero.role2": "Nhà Nghiên Cứu Robotics",
    "hero.role3": "Chuyên Gia Computer Vision",
    "hero.role4": "Đam Mê NLP",
    "hero.description": "Sinh viên Kỹ thuật AI đam mê chuyên về Computer Vision, NLP và Robotics. Xây dựng các hệ thống thông minh kết hợp deep learning và lý thuyết điều khiển.",
    "hero.viewProjects": "Xem Dự Án",
    "hero.downloadCV": "Tải CV",
    
    // About
    "about.title": "Về Tôi",
    "about.subtitle": "Kết Nối Deep Learning và Lý Thuyết Điều Khiển",
    "about.intro": "Sinh viên AI & Robotics với kinh nghiệm thực hành vững chắc về computer vision, NLP và hệ thống nhúng. Tôi xây dựng ứng dụng AI thời gian thực trên nền tảng Jetson (Nano/Orin) cho điều khiển tự động, giữ làn đường và trợ lý thông minh, tập trung vào các hệ thống hiệu quả, có thể triển khai, kết nối nghiên cứu và thực tiễn để làm nổi bật công việc của tôi ở giao điểm của lý thuyết điều khiển và computer vision. Tôi có động lực đóng góp cho các dự án robotics và embedded-AI có tác động lớn trong khi liên tục hoàn thiện kỹ năng tối ưu hóa on-edge và tích hợp hệ thống.",
    "about.experience": "Năm Kinh Nghiệm",
    "about.projects": "Dự Án Hoàn Thành",
    "about.publications": "Công Trình Nghiên Cứu",
    "about.education": "Học Vấn",
    "about.university": "Đại học Bách Khoa TP.HCM (ĐHQG-HCM)",
    "about.degree": "Cử nhân Kỹ thuật Điều khiển và Tự động hóa",
    "about.gpa": "GPA: 8.45/10",
    "about.interests": "Lĩnh Vực Nghiên Cứu",
    "about.interest1": "Computer Vision & Phát hiện Đối tượng",
    "about.interest2": "Xử lý Ngôn ngữ Tự nhiên",
    "about.interest3": "Robotics & Hệ thống Tự động",
    "about.interest4": "Embedded AI & Edge Computing",
    
    // Skills
    "skills.title": "Kỹ Năng & Chuyên Môn",
    "skills.subtitle": "Kho vũ khí kỹ thuật để xây dựng hệ thống thông minh",
    "skills.tab1": "Kỹ Năng Kỹ Thuật",
    "skills.tab2": "Hồ Sơ Học Thuật",
    "skills.tab3": "Chứng Chỉ",
    "skills.chart.title": "Biểu Đồ Kỹ Năng",
    "skills.ai": "AI & Machine Learning",
    "skills.cv": "Computer Vision",
    "skills.robotics": "Robotics & Điều Khiển",
    "skills.nlp": "NLP & LLMs",
    "skills.embedded": "Hệ Thống Nhúng",
    "skills.cloud": "Cloud & MLOps",
    
    // Projects
    "projects.title": "Dự Án Nổi Bật",
    "projects.subtitle": "Từ ý tưởng đến triển khai - Giải pháp AI thực tế",
    "projects.viewCode": "Xem Code",
    "projects.liveDemo": "Demo Trực Tiếp",
    "projects.closeVideo": "Đóng Video",
    
    // Publications
    "publications.title": "Công Trình Nghiên Cứu",
    "publications.subtitle": "Đóng góp cho cộng đồng nghiên cứu AI",
    
    // Awards
    "awards.title": "Danh Hiệu & Giải Thưởng",
    "awards.subtitle": "Công nhận sự xuất sắc trong AI và đổi mới",
    "awards.certifications": "Chứng Chỉ",
    
    // Contact
    "contact.title": "Liên Hệ",
    "contact.subtitle": "Hãy thảo luận về cơ hội trong AI, robotics hoặc hợp tác nghiên cứu",
    "contact.info": "Thông Tin Liên Hệ",
    "contact.email": "Email",
    "contact.phone": "Điện Thoại",
    "contact.location": "Địa Chỉ",
    "contact.connect": "Kết Nối Với Tôi",
    "contact.available": "Sẵn Sàng Cho Cơ Hội",
    "contact.availableDesc": "Mở cho thực tập, hợp tác nghiên cứu và vị trí toàn thời gian trong AI & Robotics",
    "contact.name": "Tên Của Bạn",
    "contact.yourEmail": "Email Của Bạn",
    "contact.message": "Tin Nhắn",
    "contact.messagePlaceholder": "Cho tôi biết về dự án hoặc cơ hội của bạn...",
    "contact.send": "Gửi Tin Nhắn",
    "contact.sending": "Đang gửi...",
    "contact.sent": "Đã gửi! ✓",
    "contact.footer": "Xây dựng với Next.js & TailwindCSS",
    "contact.tagline": "Kết nối Deep Learning và Lý thuyết Điều khiển 🤖",
    
    // Butterfly Control
    "butterfly.toggle": "Bật/Tắt Bướm",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "vi")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
