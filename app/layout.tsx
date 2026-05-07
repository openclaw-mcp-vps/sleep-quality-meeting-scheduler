import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SleepSched — Schedule Meetings Based on Sleep Quality',
  description: 'Automatically decline or reschedule meetings when your sleep quality is poor. Integrates with Fitbit, Oura, Google Calendar, and Outlook.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b27ad9ae-8ca7-4ec7-bae1-05b8d5610ef6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
