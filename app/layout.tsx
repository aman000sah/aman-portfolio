import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aman Kumar Sah - Software Engineer & Data Scientist",
  description:
    "Portfolio of Aman Kumar Sah - 3rd year CS student at IIMS College (Taylor's University) specializing in Data Science, AI/ML, and Software Engineering. CS Teacher & IT Department Head.",
  keywords: [
    "Software Engineer",
    "Data Scientist",
    "AI/ML",
    "Computer Science",
    "Portfolio",
    "Nepal",
    "IIMS College",
    "Taylor's University",
  ],
  authors: [{ name: "Aman Kumar Sah", url: "https://amanshah.com.np" }],
  creator: "Aman Kumar Sah",
  publisher: "Aman Kumar Sah",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanshah.com.np",
    siteName: "Aman Kumar Sah - Portfolio",
    title: "Aman Kumar Sah - Software Engineer & Data Scientist",
    description:
      "Explore the portfolio of Aman Kumar Sah - passionate about AI/ML, Data Science, and Software Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar Sah - Software Engineer & Data Scientist",
    description: "Portfolio of a passionate CS student specializing in Data Science and AI/ML",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
