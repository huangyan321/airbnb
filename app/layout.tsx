import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
