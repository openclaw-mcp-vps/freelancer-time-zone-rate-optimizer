import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreelanceRate — Optimize Rates by Time Zone',
  description: 'Analyze freelance rates across time zones and get optimal pricing strategies for every region and availability window.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="14639d72-02e9-4343-9661-597007111793"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
