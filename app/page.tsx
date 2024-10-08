import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css';

const BackgroundSlideshow = dynamic(() => import('../components/BackgroundSlideshow'), { ssr: false })

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundSlideshow />
      <h1 className={styles.title}>Taegyun's Homepage</h1>
      <p className={styles.description}>
        MIR researcher / Interdisciplinary Creator.
      </p>
      {/* 기타 홈페이지 내용 */}
    </main>
  );
}

