import Image from 'next/image';
import Link from 'next/link';
import { artProjects } from './artProjectsData';
import styles from '../../styles/Art.module.css';

export const metadata = { title: 'Art — Taegyun Kwon' };

export default function Art() {
  return (
    <main className={styles.gallery}>
      <h1>Performances &amp; installations</h1>
      <ul className={styles.grid}>
        {artProjects.map((project, index) => (
          <li key={project.id}>
            <Link href={`/art/${project.id}`}>
              <div className={styles.cover}>
                <Image src={project.images[0].src} alt="" fill priority={index === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 600px" />
              </div>
              <div className={styles.caption}>
                <h2>{project.title}</h2>
                <time>{project.date.match(/\d{4}/)?.[0]}</time>
              </div>
              <p><span className={styles.srOnly}>My role: </span>{project.role}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
