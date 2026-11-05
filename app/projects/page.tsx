import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

export const metadata: Metadata = { title: 'Projects — Taegyun Kwon' };

const projects = [
  {
    id: 'ai-feedback', number: '01', title: 'Learning through musical dialogue',
    subtitle: 'Conversational AI feedback for expressive music performance',
    image: '/images/projects/세종.webp', period: '2024 — Present', tag: 'MUSIC EDUCATION / AI',
    description: 'Exploring conversational feedback for expressive music performance learning. The project combines language models trained on musical feedback with an interactive human–machine teaching system.',
    context: 'Sejong Research Fellowship · 2024–2028',
    links: [{ label: 'Research background', href: '/about#awards' }],
  },
  {
    id: 'real-time-audiovisual', number: '02', title: 'Listening and responding in real time',
    subtitle: 'Audiovisual processing for interactive AI performance',
    image: '/images/projects/Audiovisual.webp', period: '2023 — Present', tag: 'LIVE PERFORMANCE / INTERACTION',
    description: 'Building real-time systems that connect human performers and machines through synchronization, visual feedback, and machine listening. Score following and gesture cue detection help AI systems respond to an unfolding performance.',
    context: 'Music information retrieval · Human–computer interaction',
    links: [{ label: 'Score following', href: 'https://mac.kaist.ac.kr/score_following/score_following.html' }, { label: 'Cue detection', href: 'https://mac.kaist.ac.kr/musical_cue_detection/musical_cue_detection.html' }],
  },
  {
    id: 'multi-modal-piano', number: '03', title: 'Understanding the pianist’s movement',
    subtitle: 'Multimodal piano performance data collection and generation',
    image: '/images/projects/Motion.webp', period: '2021 — Present', tag: 'MOTION / MULTIMODAL DATA',
    description: 'Acquiring, analyzing, and generating expressive piano performance motion with precise 3D data. This work explores performance through both sound and movement, with a collaboration with YAMAHA beginning in 2023.',
    context: 'Related publications: SKY Piano · PianoVAM',
    links: [{ label: 'Project overview', href: 'https://mac.kaist.ac.kr/Pianist_Multimodal_Data_Acquisition_and_Generation/Pianist_Multimodal_Data_Acquisition_and_Generation.html' }, { label: 'Publications', href: '/publications' }],
  },
  {
    id: 'expressive-music', number: '04', title: 'From the score to an expressive performance',
    subtitle: 'Machine learning for expressive piano performance',
    image: '/images/projects/vnet.webp', period: '2018 — 2021', tag: 'EXPRESSION / GENERATION',
    description: 'Modeling human-like expressive piano performance with machine learning. In collaboration with the Music Department at Seoul National University, this project explores how the structure of a score can inform its interpretation.',
    context: 'Related work: VirtuosoNet · Hierarchical RNNs · Graph neural networks',
    links: [{ label: 'Project overview', href: 'https://mac.kaist.ac.kr/expressive_piano_performance_rendering.html' }, { label: 'VirtuosoNet code', href: 'https://github.com/jdasam/virtuosoNet' }],
  },
];

export default function Projects() {
  return (
    <main className={styles.main}>
      <header className={styles.heading}><p className={styles.eyebrow}>RESEARCH / PROJECTS</p><h1>Ideas made<br />audible.</h1><p className={styles.description}>Exploring musical expression through code, sound, and movement.<br />{' '}Selected research projects and collaborations.</p></header>
      <nav className={styles.index} aria-label="Project index">{projects.map(p => <a key={p.id} href={`#${p.id}`}><span>{p.number}</span>{p.tag.split(' / ')[0]}</a>)}</nav>
      <div>{projects.map(project => <section className={styles.project} key={project.id} id={project.id} aria-labelledby={`${project.id}-title`}>
        <div className={styles.projectMeta}><span>{project.number} / {project.tag}</span><span>{project.period}</span></div>
        <div className={styles.projectBody}>
          <div className={styles.image}><Image src={project.image} alt={project.subtitle} width={640} height={420} sizes="(max-width: 700px) 90vw, 50vw" /></div>
          <div className={styles.copy}><h2 id={`${project.id}-title`}>{project.title}</h2><p className={styles.subtitle}>{project.subtitle}</p><p>{project.description}</p><p className={styles.context}>{project.context}</p><div className={styles.links}>{project.links.map(link => link.href.startsWith('/') ? <Link key={link.href} href={link.href}>{link.label} ↗</Link> : <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div></div>
        </div>
      </section>)}</div>
      <section className={styles.earlier} aria-labelledby="earlier-title"><p className={styles.eyebrow}>EARLIER EXPLORATIONS</p><h2 id="earlier-title">Other research projects</h2><div className={styles.earlierGrid}><article><span>2017 — 2018</span><h3>Guitar audio transcription</h3><p>A neural transcription system for guitar performance, developed with a small amount of labeled audio.</p></article><article><span>2016</span><h3>Score-based music visualization</h3><p>A web platform for classical music appreciation, using automatic audio-to-score alignment to connect listening with the score.</p><a href="https://jdasam.github.io/PerformScore/" target="_blank" rel="noopener noreferrer">PerformScore demo ↗</a></article></div></section>
      <footer className={styles.footer}><Link href="/publications">Read the publications ↗</Link><Link href="/art">Explore art &amp; performances ↗</Link></footer>
    </main>
  );
}
