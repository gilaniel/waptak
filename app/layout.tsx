import type { Metadata } from "next";
import { Lato, Kodchasan, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-kod",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Waptak",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${inter.variable} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
