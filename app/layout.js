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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <div className="min-h-dvh">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
