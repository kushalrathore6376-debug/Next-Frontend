import type { Metadata } from "next";
import { Quicksand, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "TraceXero",
  description: "TraceXero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${quicksand.variable} ${lato.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
