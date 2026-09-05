import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'Epic Cafe | Premium Chicken Burgers & Fast Food in Chennai',
  description: 'Epic Cafe - Chennai\'s favorite destination for premium chicken burgers, loaded fries, chicken popcorn, wings, and milkshakes. 100% Halal certified. Order now via WhatsApp!',
  keywords: 'Epic Cafe, chicken burger Chennai, loaded fries, halal food Chennai, fast food Chennai, chicken popcorn, milkshakes',
  openGraph: {
    title: 'Epic Cafe | Premium Chicken Burgers & Fast Food in Chennai',
    description: 'Epic Cafe - Chennai\'s favorite destination for premium chicken burgers, loaded fries, and more. 100% Halal certified.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#DC2626',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
