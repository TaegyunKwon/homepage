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
    context: 'Sejong Research Fellowship · 2024–2028',
    question: 'How can a practice tool respond to musical expression, beyond whether the notes are correct?',
    contribution: 'Research on conversational feedback, musical feedback data, and an interactive teaching system.',
    outcome: 'A research direction supported by the Sejong Research Fellowship. The focus is on developing and studying the feedback system.',
    evidence: 'Research programme', caption: 'A score-linked annotation interface for musical feedback.',
    links: [{ label: 'Research background', href: '/about#awards' }],
  },
  {
    id: 'real-time-audiovisual', number: '02', title: 'Listening and responding in real time',
    subtitle: 'Audiovisual processing for interactive AI performance',
    image: '/images/projects/Audiovisual.webp', period: '2023 — Present', tag: 'LIVE PERFORMANCE / INTERACTION',
    context: 'Collaboration with Jiyun Park, Jaeran Choi, and the MACLab performance team',
    question: 'How does an AI accompanist know when to start, and where the human performer is in the music?',
    contribution: 'Co-developed real-time gesture cue detection with Jaeran Choi and contributed to score-following research. My piano transcription model supported the AI pianist.',
    outcome: 'A gesture-responsive flute–piano ensemble system presented at the Daejeon Arts Center’s 20th anniversary concert and ISAIMP 2023.',
    evidence: 'Live performance systems', caption: 'Connecting musical input, real-time analysis, and performance interaction.',
    links: [{ label: 'Score following', href: 'https://mac.kaist.ac.kr/score_following/score_following.html' }, { label: 'Cue detection', href: 'https://mac.kaist.ac.kr/musical_cue_detection/musical_cue_detection.html' }],
  },
  {
    id: 'multi-modal-piano', number: '03', title: 'Understanding the pianist’s movement',
    subtitle: 'Multimodal piano performance data collection and generation',
    image: '/images/projects/Motion.webp', period: '2021 — Present', tag: 'MOTION / MULTIMODAL DATA',
    context: 'Collaboration with the MACLab multimodal performance team · YAMAHA collaboration from 2023',
    question: 'What can a pianist’s movement tell us that an audio recording alone cannot?',
    contribution: 'Contributed to multimodal performance data acquisition and analysis, including research on filling gaps in finger-motion capture.',
    outcome: 'Research outputs include motion-analysis studies and co-authored multimodal datasets: PianoVAM and SKY Piano.',
    evidence: 'Datasets & analysis', caption: 'Studying piano performance through motion capture and synchronized musical data.',
    links: [{ label: 'Project overview', href: 'https://mac.kaist.ac.kr/Pianist_Multimodal_Data_Acquisition_and_Generation/Pianist_Multimodal_Data_Acquisition_and_Generation.html' }, { label: 'Publications', href: '/publications' }],
  },
  {
    id: 'expressive-music', number: '04', title: 'From the score to an expressive performance',
    subtitle: 'Machine learning for expressive piano performance',
    image: '/images/projects/vnet.webp', period: '2018 — 2021', tag: 'EXPRESSION / GENERATION',
    context: 'Collaboration with Dasaem Jeong, MACLab, and Seoul National University',
    question: 'How can a machine turn a written score into an interpretation with timing, dynamics, and phrasing?',
    contribution: 'Co-contributed to expressive piano performance research, including VirtuosoNet and its hierarchical and graph-based score representations.',
    outcome: 'Published models and open-source code, with VirtuosoNet used in a piano duet with Jong Hwa Park at KAIST’s 50th anniversary ceremony.',
    evidence: 'Models, code & performance', caption: 'VirtuosoNet: connecting score structure with expressive performance features.',
    links: [{ label: 'Project overview', href: 'https://mac.kaist.ac.kr/expressive_piano_performance_rendering.html' }, { label: 'VirtuosoNet code', href: 'https://github.com/jdasam/virtuosoNet' }],
  },
];

export default function Projects() {
  return (
    <main className={styles.main}>
      <header className={styles.heading}><p className={styles.eyebrow}>SELECTED WORK / PRODUCT & RESEARCH</p><h1>From a musical question<br />to a working system.</h1><p className={styles.description}>From leading SORI to collaborative music AI research: tools and systems for listening, performing, and working with music.</p></header>
      <section className={styles.sori} id="sori" aria-labelledby="sori-title">
        <div className={styles.soriHeader}><p className={styles.eyebrow}>CURRENT / PRODUCT &amp; LEADERSHIP</p><span>CEO</span></div>
        <div className={styles.soriIntro}><h2 id="sori-title">SORI<span>.</span></h2><div><h3>Bringing music AI into the workflow.</h3><p>I lead SORI, working across transcription, alignment, music listening, and editing. This work connects my research in musical understanding with the practical tools people use to work with music.</p></div></div>
        <div className={styles.capabilities}>
          <div><span>01 / TRANSCRIBE</span><h3>From sound to notes</h3><p>Representing a recorded performance as musical note data.</p></div>
          <div><span>02 / ALIGN</span><h3>Connect sound and score</h3><p>Relating moments in a performance to their place in the music.</p></div>
          <div><span>03 / LISTEN</span><h3>Explore through listening</h3><p>Making listening part of how people understand and work with music.</p></div>
          <div><span>04 / EDIT</span><h3>Review and refine</h3><p>Giving people a way to inspect and edit musical material.</p></div>
        </div>
        <p className={styles.soriNote}>My role: CEO · Music AI and product development</p>
      </section>
      <div className={styles.researchHeading}><p className={styles.eyebrow}>RESEARCH / COLLABORATIONS</p><h2>Questions explored together.</h2><p>My contributions within collaborative research projects, and the papers, systems, and performances that resulted.</p></div>
      <nav className={styles.index} aria-label="Project index">{projects.map(p => <a key={p.id} href={`#${p.id}`}><span>{p.number}</span><strong>{p.title}</strong><small>{p.evidence} ↗</small></a>)}</nav>
      <div>{projects.map(project => <section className={styles.project} key={project.id} id={project.id} aria-labelledby={`${project.id}-title`}>
        <div className={styles.projectMeta}><span>{project.number} / {project.tag}</span><span>{project.period}</span></div>
        <div className={styles.projectBody}>
          <figure className={styles.figure}><div className={styles.image}><Image src={project.image} alt={project.subtitle} width={640} height={420} sizes="(max-width: 700px) 90vw, 50vw" /></div><figcaption>{project.caption}</figcaption></figure>
          <div className={styles.copy}><h2 id={`${project.id}-title`}>{project.title}</h2><p className={styles.subtitle}>{project.subtitle}</p><p className={styles.question}>{project.question}</p><dl className={styles.story}><div><dt>My contribution</dt><dd>{project.contribution}</dd></div><div><dt>What came out of it</dt><dd>{project.outcome}</dd></div></dl><p className={styles.context}>{project.context}</p><div className={styles.links}>{project.links.map(link => link.href.startsWith('/') ? <Link key={link.href} href={link.href}>{link.label} ↗</Link> : <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div></div>
        </div>
      </section>)}</div>
      <section className={styles.earlier} aria-labelledby="earlier-title"><p className={styles.eyebrow}>EARLIER EXPLORATIONS</p><h2 id="earlier-title">Other research projects</h2><div className={styles.earlierGrid}><article><span>2017 — 2018</span><h3>Guitar audio transcription</h3><p>A neural transcription system for guitar performance, developed with a small amount of labeled audio.</p></article><article><span>2016</span><h3>Score-based music visualization</h3><p>A web platform for classical music appreciation, using automatic audio-to-score alignment to connect listening with the score.</p><a href="https://jdasam.github.io/PerformScore/" target="_blank" rel="noopener noreferrer">PerformScore demo ↗</a></article></div></section>
      <footer className={styles.footer}><Link href="/publications">Read the publications ↗</Link><Link href="/art">Explore art &amp; performances ↗</Link></footer>
    </main>
  );
}
