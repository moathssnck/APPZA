import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Telecommunication system',
  description: 'General Telecommunication system Services App',
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar">
   
      <body>{children}</body>
    </html>
  )
}
