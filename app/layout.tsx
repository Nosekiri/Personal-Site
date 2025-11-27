import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/shared/navbar/nav'
import { ThemeProvider } from './components/shared/navbar/theme-switch'
import { metaData } from './lib/config'
import Footer from './components/shared/footer/footer'
import { SizeIndicator } from './components/shared/sizeIndicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: metaData.name,
    card: 'summary_large_image'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <head>
        <link rel='alternate' type='application/rss+xml' href='/rss.xml' title='RSS Feed' />
        <link rel='alternate' type='application/atom+xml' href='/atom.xml' title='Atom Feed' />
        <link rel='alternate' type='application/feed+json' href='/feed.json' title='JSON Feed' />
      </head>
      <body className='pt-12 antialiased flex flex-col items-center justify-center mx-auto mb-12'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex-auto min-w-0 flex flex-col px-6 sm:px-4 md:px-0 max-w-[624px] w-full pt-1'>
            <Navbar />
            {children}
            <Footer />
            <SizeIndicator />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
