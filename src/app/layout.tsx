import type { Metadata } from "next";
import { Inter, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Kantumruy_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gus Jabung Al Fiansyah — Software Engineer Frontend",
  description:
    "Hello, My name Gus Jabung Al Fiansyah and I'm a Software Engineer Frontend!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
