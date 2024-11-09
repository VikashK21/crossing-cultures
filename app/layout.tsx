import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rakkas } from "next/font/google"
import "./globals.css";
import Navbar from "./components/navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const rakkas = Rakkas({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Crossing Cultures; To The World, From India",
  description: "The flows of people outer India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${rakkas.className} ${geistSans.variable} ${geistMono.variable} antialiased text-gray-700`}
      >
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
