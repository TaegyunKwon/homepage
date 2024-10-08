import React from 'react';
import styles from '../../styles/Publications.module.css';

interface PublicationItemProps {
  title: string;
  authors: string;
  venue: string;
  links?: { text: string; url: string }[];
  category: 'peer-reviewed' | 'abstract-workshop';
}

const PublicationItem: React.FC<PublicationItemProps> = ({ title, authors, venue, links }) => (
  <li className={styles.publicationItem}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.authors} dangerouslySetInnerHTML={{
      __html: authors.replace('Taegyun Kwon', '<strong>Taegyun Kwon</strong>')
    }} />
    <p className={styles.venue}><em>{venue}</em></p>
    {links && (
      <div className={styles.links}>
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            [{link.text}]
          </a>
        ))}
      </div>
    )}
  </li>
);

export default function Publications() {
  const publications: PublicationItemProps[] = [
    {
      title: "A Real-time Lyrics Alignment System Using Chroma and Phonetic Features For Classical Vocal Performance",
      authors: "Jiyun Park, Sangeon Yong, Taegyun Kwon, and Juhan Nam",
      venue: "International Conference on Acoustics, Speech Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2024",
      links: [
        { text: "Pdf", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10445926" },
      ],
      category: 'peer-reviewed'
    },
    {
      title: "A Study of Audio Mixing Methods for Piano Transcription in Violin-Piano Ensembles",
      authors: "Hyemi Kim, Jiyun Park, Taegyun Kwon, Dasaem Jeong, and Juhan Nam",
      venue: "Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023",
      links: [
        { text: "Pdf", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10095061" },
      ],
      category: 'peer-reviewed'
    },
    {
      title: "YM2413-MDB: A Multi-Instrumental FM Video Game Music Dataset with Emotion Annotations",
      authors: "Choi Eunjin, Yoonjin Chung, Seolhee Lee, Jongik Jeon, Taegyun Kwon and Juhan Nam",
      venue: "Proceedings of the 23th International Society for Music Information Retrieval Conference (ISMIR), 2022",
      links: [
        { text: "Pdf", url: "https://archives.ismir.net/ismir2022/paper/000011.pdf" },
        { text: "Project Page", url: "https://github.com/jech2/YM2413-MDB" },
      ],
      category: 'peer-reviewed'
    },
    {
      title: "Polyphonic Piano Transcription Using Autoregressive Multi-State Note Model",
      authors: "Taegyun Kwon, Dasaem Jeong, and Juhan Nam",
      venue: "Proceedings of the 21th International Society for Music Information Retrieval Conference (ISMIR), 2020",
      links: [
        { text: "Pdf", url: "https://arxiv.org/abs/2010.01104" },
        { text: "Project Page", url: "https://TaegyunKwon.github.io/ar_multi_transcription" },
        { text: "AI:UM Demo(Korean)", url: "https://TaegyunKwon.github.io/reperform_sci_festival" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "Note Intensity Estimation of Piano Recordings Using Coarsely-aligned MIDI Score",
      authors: "Dasaem Jeong, Taegyun Kwon, and Juhan Nam",
      venue: "Journal of the Audio Engineering Society, 68 (1/2), 34-47, 2019.",
      links: [
        { text: "Pdf", url: "http://www.aes.org/e-lib/browse.cfm?elib=20716" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "Hierarchical RNN-based System for Modeling Expressive Piano Performance",
      authors: "Dasaem Jeong, Taegyun Kwon, Yoojin Kim, Kyogu Lee, and Juhan Nam",
      venue: "Proceedings of the 20th International Society for Music Information Retrieval Conference (ISMIR), 2019",
      links: [
        { text: "Pdf", url: "http://archives.ismir.net/ismir2019/paper/000112.pdf" },
        { text: "Code", url: "https://github.com/jdasam/virtuosoNet" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "A Cross-Scape Plot Representation for Visualizing Symbolic Melodic Similarity",
      authors: "Saebyul Park, Taegyun Kwon, Jongpil Lee, Jeounghoon Kim, and Juhan Nam",
      venue: "Proceedings of the 20th International Society for Music Information Retrieval Conference (ISMIR), 2019",
      links: [
        { text: "Pdf", url: "http://archives.ismir.net/ismir2019/paper/000050.pdf" },
        { text: "Code", url: "https://github.com/saebyulpark/cross_scape_plot" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "Graph Neural Network for Music Score Data and Modeling Expressive Piano Performance",
      authors: "Dasaem Jeong, Taegyun Kwon, Yoojin Kim, and Juhan Nam",
      venue: "Proceedings of the 36th International Conference on Machine Learning (ICML), 2019",
      links: [
        { text: "Pdf", url: "http://proceedings.mlr.press/v97/jeong19a/jeong19a.pdf" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "A Timbre-based Approach to Estimate Key Velocity from Polyphonic Piano Recordings",
      authors: "Dasaem Jeong, Taegyun Kwon, and Juhan Nam",
      venue: "Proceedings of the 19th International Society for Music Information Retrieval Conference (ISMIR), 2018",
      links: [
        { text: "Pdf", url: "http://ismir2018.ircam.fr/doc/pdfs/196_Paper.pdf" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "Audio-to-Score Alignment Of Piano Music Using RNN-based Automatic Music Transcription",
      authors: "Taegyun Kwon, Dasaem Jeong and Juhan Nam",
      venue: "Proceedings of the 14th Sound and Music Computing Conference (SMC), 2017",
      links: [
        { text: "Pdf", url: "https://arxiv.org/pdf/1711.04480" },
        { text: "Demo", url: "https://mac.kaist.ac.kr/~ilcobo2/alignWithAMT/" }
      ],
      category: 'peer-reviewed'
    },
    {
      title: "Multivariate Kinematic Analysis of Piano Performance: A Case Study of A Professional Pianist",
      authors: "Dawon Park, Taegyun Kwon, Joonhyung Bae, Jongwha Park, Juhan Nam and Jaebum Park",
      venue: "International Society of Biomechanics (ISB), 2023",
      links: [
        { text: "Pdf", url: "https://mac.kaist.ac.kr/pubs/park-isbjsb2023.pdf" },
      ],
      category: 'abstract-workshop'
    },
    {
      title: "Automated Gap-Filing Algorithm for Kinetic Data of Finger Movement: Pianist Hand Motion Cleaning using Spatio-Temporal Imputation",
      authors: "Taegyun Kwon, Dawon Park, Joonhyung Bae, Jongwha Park, Juhan Nam and Jaebum Park",
      venue: "International Society of Biomechanics (ISB), 2023",
      links: [
        { text: "Pdf", url: "https://mac.kaist.ac.kr/pubs/kwon-isbjsb2023.pdf" },
      ],
      category: 'abstract-workshop'
    },
    {
      title: "Emotion Classification and Analysis of Expressive Performances in Classical Piano Music",
      authors: "Yoojin Kim, Jeongmi Park, Dasaem Jeong, Taegyun Kwon, Jonghwa Park, Juhan Nam",
      venue: "Proceedings of the 16th International Conference on Music Perception and Cognition (ICMPC16), 2021",
      links: [],
      category: 'abstract-workshop'
    },
    {
      title: "TräumerAI: Dreaming Music with StyleGAN",
      authors: "Dasaem Jeong, Seungheon Doh, and Taegyun Kwon",
      venue: "Workshop on Machine Learning for Creativity and Design, Neural Information Processing Systems (NeurIPS), 2020",
      links: [
        { text: "Pdf", url: "https://arxiv.org/abs/2102.04680" },
        { text: "Project Page", url: "https://jdasam.github.io/traeumerAI_demo/" },
      ],
      category: 'abstract-workshop'
    },
    {
      title: "Score and Performance Features for Rendering Expressive Music Performances",
      authors: "Dasaem Jeong, Taegyun Kwon, Yoojin Kim, and Juhan Nam",
      venue: "Proceedings of the Music Encoding Conference (MEC), 2019",
      links: [
        { text: "Pdf", url: "https://music-encoding.org/conference/abstracts/abstracts_mec2019/Dasaem%20Jeong%20Music%20Encoding%20Conference%202019.pdf" },
      ],
      category: 'abstract-workshop'
    },
    {
      title: "VirtuosoNet: A Hierarchical Attention RNN for Generating Expressive Piano Performance from Music Score",
      authors: "Dasaem Jeong, Taegyun Kwon, and Juhan Nam",
      venue: "Workshop on Machine Learning for Creativity and Design, Neural Information Processing Systems (NeurIPS), 2018",
      links: [
        { text: "Pdf", url: "https://mac.kaist.ac.kr/pubs/JeongKwonNam-neurips2018.pdf" },
      ],
      category: 'abstract-workshop'
    },
    {
      title: "PerformScore: Toward Performance Visualization With the Score on the Web Browser",
      authors: "Dasaem Jeong, Taegyun Kwon, Chaelin Park, and Juhan Nam",
      venue: "Late Breaking Demo in the 18th International Society for Musical Information Retrieval Conference (ISMIR), 2017",
      links: [],
      category: 'abstract-workshop'
    },
    {
      title: "Automatic DJ Mix Generation Using Highlight Detection",
      authors: "Adrian Kim, Soram Park, Jangyeon Park, Jung-Woo Ha, Taegyun Kwon and Juhan Nam",
      venue: "Late Breaking Demo in the 18th International Society for Musical Information Retrieval Conference (ISMIR), 2017",
      links: [],
      category: 'abstract-workshop'
    },
  ];

  const peerReviewedPublications = publications.filter(pub => pub.category === 'peer-reviewed');
  const abstractWorkshopPublications = publications.filter(pub => pub.category === 'abstract-workshop');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Publications</h1>
        
        <h2 className={styles.sectionTitle}>Peer-reviewed Publications</h2>
        <ul className={styles.publicationList}>
          {peerReviewedPublications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
        </ul>

        <h2 className={styles.sectionTitle}>Peer-reviewed Abstract & Workshop Articles</h2>
        <ul className={styles.publicationList}>
          {abstractWorkshopPublications.map((pub, index) => (
            <PublicationItem key={index} {...pub} />
          ))}
        </ul>
      </main>
    </div>
  );
}
