

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import  { useThemeContext } from './context/theme'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full h-full inline-block z-0 bg-[#f7f1e3] `}>
        <useThemeContext>
          <Navbar />
          {children}
          <Footer />
        </useThemeContext>
      </body>
    </html>
  )
}
