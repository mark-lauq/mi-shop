import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小米商城 - Xiaomi 15、REDMI K80、MIX Fold 4，小米电视官方网站",
  description:
    "小米官网直营小米公司旗下所有产品，包括Xiaomi手机系列Xiaomi 14、MIX、Redmi 红米系列、Redmi Note 13、K70、电视、笔记本、米家智能家居等，同时提供小米官方服务及售后支持.",
  keywords: [
    "Xiaomi",
    "redmi",
    "Xiaomi14",
    "Redmi Note 13",
    "Xiaomi MIX Alpha",
    "小米商城",
  ],
};

export const viewport: Viewport = {
  width: 1226,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
