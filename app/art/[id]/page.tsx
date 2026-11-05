import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artProjects } from '../artProjectsData';
import styles from '../../../styles/ArtProject.module.css';

export default function ArtProjectDetail({ params }: { params: { id: string } }) {
  const project = artProjects.find(item => item.id === params.id);
  if (!project) notFound();

  return (
    <main className={styles.work}>
      <Link className={styles.back} href="/art">← All works</Link>
      <h1>{project.title}</h1>
      <p className={styles.meta}>{project.date} · {project.venue}</p>
      <section className={styles.credit} aria-label="My role">
        <h2>My role</h2>
        <p>{project.detailedRole}</p>
      </section>
      <div className={styles.gallery}>
        {project.images.map(({ src, width, height, alt }, index) => (
          <a key={src} href={src} aria-label={`View full image: ${alt}`}>
            <Image src={src} alt={alt}
              width={width} height={height} priority={index === 0}
              sizes={index === 0 ? '(max-width: 1200px) 100vw, 1200px' : '(max-width: 700px) 100vw, 600px'} />
          </a>
        ))}
      </div>
      <p className={styles.description}>{project.description}</p>
      {project.media?.length ? (
        <ul className={styles.media} aria-label="Related material">
          {project.media.map(item => (
            <li key={item.url}><a href={item.url}>{item.title} ↗</a></li>
          ))}
        </ul>
      ) : null}
      <Link className={styles.back} href="/art">← All works</Link>
    </main>
  );
}

export function generateStaticParams() {
  return artProjects.map(({ id }) => ({ id }));
}
