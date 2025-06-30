import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'General Services App',
  description: 'General Telecommunicate Services App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
