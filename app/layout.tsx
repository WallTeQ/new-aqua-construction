import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Aqualia Construction Company (NACOC) | Engineering Excellence",
  description:
    "New Aqualia Construction Company - A professionally structured construction and engineering firm delivering technically compliant, safe, and durable infrastructure solutions across Liberia.",
  keywords: [
    "construction",
    "engineering",
    "Liberia",
    "civil engineering",
    "building construction",
    "infrastructure",
  ],
  authors: [{ name: "New Aqualia Construction Company" }],
  openGraph: {
    title: "New Aqualia Construction Company (NACOC)",
    description: "Engineering Excellence | Quality Construction | Reliable Delivery",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Aqualia Construction Company (NACOC)",
    description: "Engineering Excellence | Quality Construction | Reliable Delivery",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEFEFE" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar shows on ALL pages */}
          <Navbar />

          {/* Page content */}
          <main>{children}</main>

          {/* Footer shows on ALL pages */}
          <Footer />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
