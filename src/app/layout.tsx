import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Edison Wang',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="bg-[rgba(170,170,170,1)] bg-[linear-gradient(0deg,rgba(240,240,240,1)_70%,rgba(170,170,170,1)_100%)]">
        {children}
      </body>
    </html>
  )
}
