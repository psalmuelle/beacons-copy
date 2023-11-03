import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Joe Furniture',
  description: 'Welcome to our Furniture Haven, where style meets comfort! Explore curated collections, crafted with quality and personalized just for you. Elevate your space with our timeless pieces and exceptional service. Redefine your home effortlessly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        {children}
        </body>
    </html>
  )
}
