import type { Metadata } from 'next'
import "@/styles/globals.scss"


export const metadata: Metadata = {
    title: 'Taylor Burrows',
    description: 'The Personal website of Taylor Burrows - Self Taught Software Engineer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
        <html lang="en">
            <body className="bg-black">
                {children}
            </body>
        </html>
    )
}
