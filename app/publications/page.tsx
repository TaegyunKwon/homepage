import Link from 'next/link';
import publications from '../../data/publications.json';
import styles from '../../styles/Publications.module.css';

const groups = [
  { category: 'peer-reviewed', label: 'Journal & conference papers' },
  { category: 'abstract-workshop', label: 'Abstracts, workshops & demos' },
  { category: 'domestic', label: 'Domestic publications' },
];

export default function Publications() {
  return (
    <main className={styles.main}>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>RESEARCH / PUBLICATIONS</p>
        <h1>Listening. Learning.<br />Understanding music.</h1>
        <div className={styles.introduction}><p>Papers on music information retrieval, expressive performance,<br />and the interaction between people and machines.</p><Link href="/pdf/TGK_Resume.pdf">Download CV ↗</Link></div>
      </header>
      <nav className={styles.index} aria-label="Publication categories">{groups.map(group => <a href={`#${group.category}`} key={group.category}>{group.label} <span>{publications.filter(pub => pub.category === group.category).length}</span></a>)}</nav>
      {groups.map(group => (
        <section key={group.category} id={group.category} className={styles.section}>
          <h2>{group.label}</h2>
          <ol className={styles.list}>
            {publications.filter(pub => pub.category === group.category).map(pub => (
              <li className={styles.publication} key={pub.title}>
                <span className={styles.year}>{pub.year}</span>
                <article>
                  <h3>{pub.title}</h3>
                  <p className={styles.authors}>{pub.authors.split('Taegyun Kwon').map((part, i) => <span key={i}>{i > 0 && <strong>Taegyun Kwon</strong>}{part}</span>)}</p>
                  <p className={styles.venue}>{pub.venue}</p>
                  <div className={styles.links}>{pub.links?.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.text === 'Pdf' ? 'Paper' : link.text} <span aria-hidden="true">↗</span></a>)}</div>
                </article>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <footer className={styles.footer}><Link href="/">← Back home</Link><span>Updated November 2026</span></footer>
    </main>
  );
}
