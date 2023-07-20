import React, {ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({children, title = 'This is the default title'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex gap-x-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/users">Users List</Link>
        <Link href="/api/users">Users API</Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&lsquo;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
