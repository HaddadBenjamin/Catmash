import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Mash",
  description: "Voter pour votre chat préféré",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
