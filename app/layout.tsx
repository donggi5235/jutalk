import { ThemeProvider } from "@/providers/themeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LeftMenu from "@/components/LeftMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jutalk",
  description: "인생술집, 즐거운 술 한잔 이야기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            <LeftMenu />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
