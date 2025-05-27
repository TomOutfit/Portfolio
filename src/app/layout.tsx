import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({ 
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Bình An | Phát triển Website & Lập trình Sáng tạo",
  description:
    "Portfolio của Nguyễn Bình An – Frontend Developer và Creative Coder chuyên thiết kế giao diện đẹp, UX mượt với React, Next.js, và các công nghệ web hiện đại.",
  authors: [{ name: "Nguyễn Bình An", url: "https://github.com/TomOutfit" }],
  keywords: [
    "Nguyễn Bình An",
    "Frontend Developer",
    "Creative Coder",
    "React Developer Vietnam",
    "Next.js Developer",
    "Portfolio Cá Nhân",
    "Lập trình viên web",
    "Thiết kế giao diện",
    "UX/UI",
    "Tailwind CSS",
    "TypeScript",
    "Kinh nghiệm phát triển web",
    "Dự án sáng tạo",
  ],
  openGraph: {
    title: "Nguyễn Bình An | Phát triển Website & Lập trình Sáng tạo",
    description:
      "Khám phá portfolio cá nhân của Nguyễn Bình An – nơi kỹ thuật frontend gặp nghệ thuật thiết kế và trải nghiệm người dùng hiện đại.",
    type: "website",
    locale: "vi_VN",
    url: "https://an-portfolio.com", // Thay URL thật
    siteName: "Nguyễn Bình An Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio của Nguyễn Bình An - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Bình An | Phát triển Website & Lập trình Sáng tạo",
    description:
      "Khám phá portfolio cá nhân của Nguyễn Bình An – nơi kỹ thuật frontend gặp nghệ thuật thiết kế.",
    creator: "@your_twitter_handle", // Thay bằng Twitter của bạn
    images: ["/og-image.jpg"],
  },
  publisher: "Nguyễn Bình An",
  creator: "Nguyễn Bình An",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased relative min-h-screen bg-gradient-to-br from-fuchsia-100 via-blue-50 to-violet-100 text-[color:var(--foreground)]`}
      >
        {/* Background SVG decor */}
        <svg
          className="pointer-events-none fixed inset-0 w-full h-full z-0"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id="art-bg" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#a5b4fc" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fdf4ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#art-bg)" />
          <circle cx="80%" cy="20%" r="200" fill="#f472b6" fillOpacity="0.08" />
          <circle cx="20%" cy="80%" r="150" fill="#818cf8" fillOpacity="0.08" />
        </svg>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
