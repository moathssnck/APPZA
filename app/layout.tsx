import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Telecommunication system',
  description: 'General Telecommunication system Services App',
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable:false
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

      </head>
      <body>{children}</body>
    </html>
  )
}
