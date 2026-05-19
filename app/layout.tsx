import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ColumnFlow - CSV列変換専門ツール",
  description: "CSVの列名変更と列順変更だけに特化したブラウザ完結ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
