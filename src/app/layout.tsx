import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Mash - Voter pour votre chat préféré",
  description: "Voter pour votre chat préféré",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" cz-shortcut-listen="true">
      <body>{children}</body>
    </html>
  );
}
