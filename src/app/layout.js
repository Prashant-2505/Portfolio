

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeContextProvider, ThemeProvider } from './context/theme'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full h-full inline-block z-0 bg-[#f7f1e3] `}>
        <ThemeContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
