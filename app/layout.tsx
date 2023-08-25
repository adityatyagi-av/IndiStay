import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IndiStay',
  description: 'Stay wherever you want to',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
