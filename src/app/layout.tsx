import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Topbar from '@/Components/header/Topbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rick And Morty',
  description: 'Rick And Morty API.',
    icons: {
    icon: '/favicon.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {


  return (
    <html lang='en' suppressContentEditableWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#00160d] to-slate-950 relative`}
      >
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="portal animate-spin-slow w-[700px] h-[400px] rounded-full opacity-70 blur-2xl"></div>
          </div>
        <div className='z-10 relative'>
          
          <Topbar />
          {children}

        </div>
      </body>
    </html>
  )
}
