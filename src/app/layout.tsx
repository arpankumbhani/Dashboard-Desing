import './globals.css'
import ClientLayoutShell from '@/components/ClientLayoutShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="relative overflow-hidden text-white">
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  )
}


