import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Mash - Classement des chats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
