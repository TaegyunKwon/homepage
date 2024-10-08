import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Art.module.css';
import { artProjects } from './artProjectsData';

export default function Art() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          {artProjects.map((project) => (
            <Link href={`/art/${project.id}`} key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src={project.images[0]} alt={project.title} layout="fill" objectFit="cover" />
                <div className={styles.overlay}>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                  <p>{project.date}</p>
                  <p>{project.venue}</p>
                  {project.shortdescription && <p>{project.shortdescription}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}