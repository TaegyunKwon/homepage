import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>Taegyun Kwon</Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/publications" className={styles.link}>Publications</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/art" className={styles.link}>Art</Link>
      </nav>
    </header>
  )
}
