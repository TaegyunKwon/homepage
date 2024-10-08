import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'My Portfolio' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Taegyun's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/art">Art</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  )
}
