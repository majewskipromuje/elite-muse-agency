import './globals.css'
import { Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Elite Muse Agency',
  description: 'Luxury personal branding for exceptional women.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
