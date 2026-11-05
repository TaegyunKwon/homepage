import localFont from 'next/font/local'
import type { Metadata } from 'next'
import Header from '../components/Header'
import '../styles/globals.css'

const geist = localFont({ src: './fonts/GeistVF.woff', variable: '--font-geist-sans', display: 'swap' })
const geistMono = localFont({ src: './fonts/GeistMonoVF.woff', variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  title: "Taegyun Kwon — Music, Technology & Art",
  description: "MIR researcher and interdisciplinary creator exploring music, technology, and art.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
