'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.css';

const pages = [['/', 'Home'], ['/about', 'About'], ['/publications', 'Publications'], ['/projects', 'Projects'], ['/art', 'Art']];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>tk<span>.</span></Link>
      <nav className={styles.nav} aria-label="Main navigation">
        {pages.map(([href, label]) => <Link key={href} href={href} className={styles.link} aria-current={(href === '/' ? pathname === '/' : pathname.startsWith(href)) ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <a className={styles.cv} href="/pdf/TGK_Resume.pdf" target="_blank" rel="noopener noreferrer">CV <span aria-hidden="true">↗</span></a>
    </header>
  );
}
