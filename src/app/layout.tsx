import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gus Jabung Al Fiansyah — Software Engineer Frontend',
  description: 'Gus Jabung Al Fiansyah Portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950`}>
          <Header/>
          {children}
        </body>
    </html>
  )
}
