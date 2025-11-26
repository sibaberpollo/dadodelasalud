import type { Metadata } from "next";
import { Geist, Geist_Mono, Gochi_Hand } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegistration } from "./components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gochiHand = Gochi_Hand({
  weight: "400",
  variable: "--font-gochi-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dado de la Salud",
  description: "Juego educativo sobre salud cardiovascular",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dado Salud",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dado Salud" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gochiHand.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
