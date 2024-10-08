import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

interface Project {
  id: string;
  title: string;
  image: string;
  period: string;
}

const projects: Project[] = [
  {
    id: 'ai-feedback',
    title: 'Conversational AI Feedback System for Expressive Music Performance Learning',
    image: '/images/projects/세종.webp',
    period: 'May. 2024 - Present'
  },
  {
    id: 'real-time-audiovisual',
    title: 'Real-time audiovisual music information processing for interactive AI performance systems',
    image: '/images/projects/Audiovisual.webp',
    period: 'Mar. 2023 - Present'
  },
  {
    id: 'multi-modal-piano',
    title: 'Multi-Modal Piano Performance Data Collection and Generation',
    image: '/images/projects/Motion.webp',
    period: 'Sep. 2021 - Present'
  },
  {
    id: 'expressive-music',
    title: 'Expressive music performance creation system using machine learning',
    image: '/images/projects/vnet.webp',
    period: 'Jul. 2018 - May. 2021'
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className={styles.card}>
              <Image src={project.image} alt={project.title} width={300} height={200} />
              <h3>{project.title}</h3>
              <p>{project.period}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
