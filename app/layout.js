import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});


const leMurmure = localFont({
  src: "../public/fonts/le-murmure.otf",
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Iza — Photography & Art",
  description: "Personal art and commercial photography.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable} ${leMurmure.variable} min-h-full flex flex-col bg-[#F5F2ED] text-neutral-900 antialiased font-sans`}
>
        <Header />
        <div className="flex-1 pt-32 md:pt-40">{children}</div>
        <Footer />
      </body>
    </html>
  );
}