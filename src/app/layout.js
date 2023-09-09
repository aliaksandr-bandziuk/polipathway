import './globals.css'
import { Rubik } from 'next/font/google'

import { TheHeader } from '@/components/TheHeader'
import { TheFooter } from '@/components/TheFooter'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Polish education Consultancy',
  description: 'Polish education Consultancy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  )
}
