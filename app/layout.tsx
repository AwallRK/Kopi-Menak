import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Kopi Menak — Premium Coffee Experience in Jatinangor",
  description:
    "Experience the finest coffee at Kopi Menak. Located in Jatinangor, we serve premium coffee with a cozy atmosphere perfect for work and relaxation.",
  generator: "v0.app",
  alternates: {
    canonical: "https://kopimenak.example/",
  },
  openGraph: {
    siteName: "Kopi Menak",
    title: "Premium Coffee Experience in Jatinangor | Kopi Menak",
    description:
      "Experience the finest coffee at Kopi Menak. Located in Jatinangor, we serve premium coffee with a cozy atmosphere perfect for work and relaxation.",
    type: "website",
    url: "https://kopimenak.example/",
    images: [
      {
        url: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487099/DeWatermark.ai_1757486017919_1_nw43v8.jpg",
        alt: "Kopi Menak — Premium coffee shop in Jatinangor",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Coffee Experience in Jatinangor | Kopi Menak",
    description:
      "Experience the finest coffee at Kopi Menak. Located in Jatinangor, we serve premium coffee with a cozy atmosphere perfect for work and relaxation.",
    images: [
      {
        url: "https://res.cloudinary.com/dabfgxhyk/image/upload/v1757487099/DeWatermark.ai_1757486017919_1_nw43v8.jpg",
        alt: "Kopi Menak — Premium coffee shop in Jatinangor",
      },
    ],
    site: "@kopimenak",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/flavicon.ico" type="image/x-icon" />
      </head>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
