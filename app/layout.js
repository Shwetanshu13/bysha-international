import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Bysha Internationals",
    template: "%s | Bysha Internationals",
  },
  description:
    "Bysha Internationals is a global trading and sourcing partner for Amazon-ready B2C products and export-focused B2B bulk supply.",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Bysha Internationals",
    description:
      "Global Trade. Quality Products. Trusted Partnerships.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-50 via-white to-emerald-50 text-slate-900`}
      >
        <div className="relative min-h-dvh overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="pointer-events-none absolute top-40 -left-28 h-80 w-80 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="relative z-10">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
