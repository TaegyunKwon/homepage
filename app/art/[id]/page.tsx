import React from 'react';
import Image from 'next/image';
import { artProjects } from '../artProjectsData';
import styles from '../../../styles/ArtProject.module.css';

export default function ArtProjectDetail({ params }: { params: { id: string } }) {
  const project = artProjects.find(p => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const hasNews = project.media?.some(item => item.type === 'news');
  const hasVideos = project.media?.some(item => item.type === 'video');
  const hasLinks = project.media?.some(item => item.type === 'link');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      
      <section className={styles.imageSection}>
        {project.images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image 
              src={image} 
              alt={`${project.title} - Image ${index + 1}`} 
              width={800} 
              height={600} 
              layout="responsive"
              objectFit="contain"
            />
          </div>
        ))}
      </section>
      
      {project.date && project.venue && (
        <section className={styles.infoSection}>
          {project.date && <p><strong>Date:</strong> {project.date}</p>}
          {project.venue && <p><strong>Venue:</strong> {project.venue}</p>}
        </section>
      )}
      
      {project.description && (
        <section className={styles.descriptionSection}>
          <h2>Project Description</h2>
          <p>{project.description}</p>
        </section>
      )}
      
      {project.detailedRole && (
        <section className={styles.roleSection}>
          <h2>My Role</h2>
          <p>{project.detailedRole}</p>
        </section>
      )}
      
      {project.media && project.media.length > 0 && (
        <section className={styles.mediaSection}>
          <h2>Media & News</h2>
          {hasNews && (
            <div>
              <h3>News</h3>
              <ul>
                {project.media.filter(item => item.type === 'news').map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      📰 {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasVideos && (
            <div>
              <h3>Videos</h3>
              <ul>
                {project.media.filter(item => item.type === 'video').map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      🎥 {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasLinks && (
            <div>
              <h3>Related Links</h3>
              <ul>
                {project.media.filter(item => item.type === 'link').map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      🔗 {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return artProjects.map((project) => ({
    id: project.id,
  }));
}
