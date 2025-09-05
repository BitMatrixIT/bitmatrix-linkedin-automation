import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BitMatrix LinkedIn Automation',
  description: 'AI-powered LinkedIn content automation for UK dental IT solutions',
  keywords: 'linkedin automation, dental technology, AI content generation, social media management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gradient-to-br from-blue-50 to-indigo-100`}>
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
