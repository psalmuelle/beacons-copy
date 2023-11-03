import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({subsets: ['latin'], weight: ["400",'600', "700",'800']})

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
      <body className={poppins.className} >{children}</body>
    </html>
  )
}
