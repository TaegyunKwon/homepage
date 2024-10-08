import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/about/프로필.webp"
              alt="Taegyun Kwon"
              width={400}
              height={500}
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2>Taegyun Kwon</h2>
            <p className={styles.affiliation}>
              Postdoctoral Researcher at the Department of Graduate School of Culture Technology, KAIST
            </p>
            <p className={styles.introduction}>
            I&apos;m a Postdoctoral Researcher at MACLAB, KAIST, working on MIR and AI. I&apos;m also passionate about making Art projects with Music and AI. Amateur Pianist.
            </p>
            <h3>Research Interests</h3>
            <ul className={styles.interests}>
              <li>Music Information Retrieval</li>
              <li>Automatic Music Transcription & Alignment</li>
              <li>Expressive Music Performance Modeling</li>
              <li>Computer - Human Interaction in Performance</li>
              <li>Deep Learning</li>
              <li>Audio Signal Processing</li>
            </ul>
            <h3>Awards</h3>
            <ul className={styles.awards}>
              <li>
                <strong>Sejong Research Fellowship</strong> - Research Foundation of Korea, 2024-2028
                <p>Conversational AI Feedback System for Expressive Music Performance Learning.</p>
              </li>
              <li>
                <strong>APE-CAMP: Art Performance Academy Program</strong> - Arts Council Korea, 2023
                <p>Best Presentation: <em>Neo Harmonics</em>. Including Overseas Research Trip Award <a href="https://www.aitimes.com/news/articleView.html?idxno=147866" target="_blank" rel="noopener noreferrer">[News]</a></p>
              </li>
              <li>
                <strong>E*5 KAIST Student Entrepreneurship Support Program</strong> - KAIST, 2022
                <p>4th Prize: <em>Team Rednose</em></p>
              </li>
              <li>
                <strong>KAIST NAVER Clova AI Workshop</strong> - NAVER Corp, 2019
                <p>Best Poster: &ldquo;Hierarchical RNN-based System for Modeling Expressive Piano Performance&ldquo; <a href="https://ct.kaist.ac.kr/boards/view/news_board/1615/180/" target="_blank" rel="noopener noreferrer">[News]</a></p>
              </li>
            </ul>
            <a href="/pdf/TGK_Resume.pdf" className={styles.cvButton} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
