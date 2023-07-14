import './globals.css'
import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin-ext'],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: 'Felipe Oliveira',
  description: "Hi, I\'m a software developer 😁",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
