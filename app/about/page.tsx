import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

export const metadata: Metadata = { title: 'About — Taegyun Kwon' };

const interests = ['Music information retrieval', 'Automatic music transcription & alignment', 'Expressive performance modeling', 'Human–computer interaction in performance', 'Deep learning', 'Audio signal processing'];
const experience = [
  { year: 'Current', role: 'CEO', place: 'SORI', detail: 'Leading work on music transcription, alignment, listening, and editing.' },
  { year: '2024 — 2025', role: 'Postdoctoral Researcher', place: 'KAIST · Graduate School of Culture Technology', detail: 'Music performance interaction, transcription, and multimodal performance analysis.' },
  { year: '2023', role: 'Co-founder', place: 'AudAI', detail: 'AI co-creation tools focused on singing voice generation.' },
  { year: '2019 — 2020', role: 'Research Intern', place: 'SK Telecom · T-brain', detail: 'Music AI applications, multi-instrument transcription, and source separation.' },
  { year: '2017', role: 'Research Intern', place: 'NAVER · Clova', detail: 'AI-DJ development for the NAVER music service.' },
];
const education = [
  { year: '2018 — 2024', degree: 'Ph.D. in Culture Technology', detail: 'Music and Audio Computing Lab · Advisor: Juhan Nam' },
  { year: '2016 — 2018', degree: 'M.S. in Culture Technology', detail: 'Music and Audio Computing Lab · Advisor: Juhan Nam' },
  { year: '2011 — 2016', degree: 'B.S. in Physics', detail: 'Department of Physics' },
];
const awards = [
  { year: '2024 — 2028', title: 'Sejong Research Fellowship', detail: 'Research Foundation of Korea · Conversational AI feedback for expressive music performance learning.' },
  { year: '2023', title: 'APE-CAMP · Best Presentation', detail: 'Arts Council Korea · Neo Harmonics, with an overseas research trip award.', url: 'https://www.aitimes.com/news/articleView.html?idxno=147866' },
  { year: '2022', title: 'E*5 KAIST · 4th Prize', detail: 'Student Entrepreneurship Support Program · Team Rednose.' },
  { year: '2019', title: 'KAIST NAVER Clova AI Workshop · Best Poster', detail: 'Hierarchical RNN-based System for Modeling Expressive Piano Performance.', url: 'https://ct.kaist.ac.kr/boards/view/news_board/1615/180/' },
];

export default function About() {
  return (
    <main className={styles.main}>
      <p className={styles.eyebrow}>ABOUT / TAEGYUN KWON</p>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.intro}>
          <h1 id="about-title">A researcher.<br />A builder.<br />A pianist.</h1>
          <p className={styles.lead}>I lead SORI, bringing music AI research into tools for listening to and working with music.</p>
          <p>As CEO of SORI, I work across music transcription, alignment, listening, and editing. My research background is in music information retrieval and expressive performance—how machines can understand the music people make.</p>
          <p>Previously, I was a postdoctoral researcher at KAIST&apos;s Music and Audio Computing Lab (2024–2025), following my Ph.D. in Culture Technology. I also create art projects with music and AI—from interactive piano performances to collaborations across sound, movement, and visuals. I&apos;m also an amateur pianist.</p>
          <div className={styles.actions}><a href="/pdf/TGK_Resume.pdf" target="_blank" rel="noopener noreferrer">Download CV ↗</a><Link href="/projects#sori">My work at SORI ↗</Link></div>
        </div>
        <figure className={styles.portrait}><Image src="/images/about/프로필.webp" alt="Taegyun Kwon" width={400} height={500} priority sizes="(max-width: 700px) 80vw, 320px" /><figcaption>TAEGYUN KWON / 권태균</figcaption></figure>
      </section>
      <section className={styles.section} aria-labelledby="interests"><div className={styles.sectionLabel}><span>01</span><h2 id="interests">Research interests</h2></div><ul className={styles.interests}>{interests.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className={styles.section} aria-labelledby="experience"><div className={styles.sectionLabel}><span>02</span><h2 id="experience">Experience</h2></div><ol className={styles.rows}>{experience.map(item => <li key={item.place}><span className={styles.year}>{item.year}</span><div><h3>{item.role}</h3><p className={styles.place}>{item.place}</p><p>{item.detail}</p></div></li>)}</ol></section>
      <section className={styles.section} aria-labelledby="education"><div className={styles.sectionLabel}><span>03</span><h2 id="education">Education</h2></div><ol className={styles.rows}>{education.map(item => <li key={item.degree}><span className={styles.year}>{item.year}</span><div><h3>{item.degree}</h3><p className={styles.place}>KAIST</p><p>{item.detail}</p></div></li>)}</ol></section>
      <section className={styles.section} aria-labelledby="awards"><div className={styles.sectionLabel}><span>04</span><h2 id="awards">Selected awards</h2></div><ol className={styles.rows}>{awards.map(item => <li key={item.title}><span className={styles.year}>{item.year}</span><div><h3>{item.title}</h3><p>{item.detail}</p>{item.url && <a className={styles.news} href={item.url} target="_blank" rel="noopener noreferrer">News ↗</a>}</div></li>)}</ol></section>
      <footer className={styles.footer}><Link href="/publications">Explore publications ↗</Link><Link href="/projects">View projects ↗</Link></footer>
    </main>
  );
}
