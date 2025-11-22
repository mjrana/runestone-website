import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Runestone Intelligence · AI, Data & Governance Consultancy",
  description:
    "Runestone Intelligence is a DIFC-licensed AI consultancy connecting Dubai, the Nordics and Dhaka through responsible AI, data platforms and nearshore delivery pods."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
