import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);
export default Layout;
