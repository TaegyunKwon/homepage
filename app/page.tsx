import Link from 'next/link';
import styles from '../styles/Home.module.css';

const destinations = [
  { number: '01', title: 'About', detail: 'A little about me and what I do.', href: '/about' },
  { number: '02', title: 'Publications', detail: 'Research in music, intelligence, and expression.', href: '/publications' },
  { number: '03', title: 'Projects', detail: 'Ideas explored through code and sound.', href: '/projects' },
  { number: '04', title: 'Art', detail: 'Experiments beyond the screen.', href: '/art' },
];

export default function Home() {
  return (
    <main className={styles.main} id="main-content">
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.artwork} aria-hidden="true">
          <pre className={styles.code}>{`// studies in sound & structure\n\nconst practice = {\n  medium: ["music", "code", "art"],\n  method: "listen, explore, create"\n};\n\nfunction resonate(time, frequency) {\n  return Math.sin(time * frequency);\n}`}</pre>
          <svg className={styles.waves} viewBox="0 0 720 520" fill="none">
            {Array.from({ length: 32 }, (_, i) => (
              <path key={i} d={`M -40 ${230 + i * 6} C 160 ${250 + i * 4}, 200 ${30 + i * 11}, 360 ${80 + i * 10} S 540 ${530 - i * 8}, 760 ${150 + i * 5}`} />
            ))}
          </svg>
          <span className={styles.artCaption}>FIG. 01 — SOUND, EXPRESSED AS CODE</span>
        </div>
        <div className={styles.intro}>
          <p className={styles.eyebrow}><span /> MUSIC · TECHNOLOGY · ART</p>
          <h1 className={styles.title} id="home-title">Taegyun<br />Kwon<span className={styles.period}>.</span></h1>
          <p className={styles.role}>MIR researcher &amp;<br />interdisciplinary creator.</p>
          <p className={styles.description}>Exploring how we understand, perform,<br className={styles.desktopBreak} /> and create music through technology.</p>
          <Link href="/about" className={styles.aboutLink}>More about me <span aria-hidden="true">↗</span></Link>
        </div>
        <span className={styles.marginNote} aria-hidden="true">PORTFOLIO / TAEGYUN KWON</span>
      </section>
      <section className={styles.directory} aria-labelledby="explore-title">
        <div className={styles.sectionLabel}><h2 id="explore-title">Explore</h2><span>SELECTED PATHS / 01—04</span></div>
        <div className={styles.links}>
          {destinations.map(item => (
            <Link href={item.href} className={styles.destination} key={item.href}>
              <span className={styles.number}>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <footer className={styles.footer}><span>Taegyun Kwon</span><span>Research. Create. Repeat.</span><a href="https://github.com/TaegyunKwon">GitHub ↗</a></footer>
    </main>
  );
}
