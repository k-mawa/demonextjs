import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "信濃酒造 - 長野県の伝統的な日本酒とワインの酒蔵",
  description:
    "長野県の自然に囲まれた信濃酒造は、代々受け継がれる伝統的な日本酒の製法と、新しい挑戦としてのワイン造りを融合させた酒蔵です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
