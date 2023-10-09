import BaseNavbar from '@/components/Base/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import BaseFooter from '@/components/Base/Footer'

const poppin = Poppins({
  weight: '400',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Nodewave',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppin.className} h-screen overflow-x-hidden w-full`}>
        <BaseNavbar />
        <main className=''>
          {children}
        </main>
        <BaseFooter />
      </body>
    </html>
  )
}
