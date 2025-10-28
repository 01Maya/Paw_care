import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script, DM_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "PawCare - Expert Pet Care Services",
  description:
    "Where happy pets meet expert care. Professional veterinary services, grooming, and emergency care.",
  other: {
    "google-site-verification":
      "RTNgC8Wtic3EwXTqH6QM5pstESyqmOyu_IXWYH8IPTc",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
