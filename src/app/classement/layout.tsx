import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Mash - Classement des chats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
