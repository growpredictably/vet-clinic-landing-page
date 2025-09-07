import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VetCare Plus - Professional Veterinary Clinic in Bucharest",
  description: "Your trusted family veterinary clinic providing comprehensive healthcare services for all your beloved pets. Professional care, modern facilities, and experienced veterinarians in Bucharest.",
  keywords: "veterinary clinic, pet care, animal hospital, Bucharest, veterinarian, pet health, emergency care",
  authors: [{ name: "VetCare Plus" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "VetCare Plus - Professional Veterinary Clinic",
    description: "Caring for your beloved pets with professional excellence. Book an appointment today.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}