import type { Metadata } from "next";
import "./globals.css";

const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Zoe's Portfolio | 曾依 Zoe Zeng",
  description:
    "曾依的个人作品集，展示海外 SEO 内容增长、AI 工作流、Offer Cat 求职管理工作台、AI 译文质量评估与项目运营经历。",
  openGraph: {
    title: "Zoe's Portfolio",
    description:
      "Content strategy, AI workflow, product operations, and research-driven project work.",
    type: "website",
  },
  icons: {
    icon: `${assetBase}/assets/portfolio/wood_house_web.png`,
    shortcut: `${assetBase}/assets/portfolio/wood_house_web.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
