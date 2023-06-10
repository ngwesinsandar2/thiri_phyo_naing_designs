import PageWrapper from './components/PageWrapper'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thiri Phyo Naing\'s designs',
  description: 'These are practices of Thiri Phyo Naing\'s designs',
  openGraph: {
    images: '/metaImg.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
