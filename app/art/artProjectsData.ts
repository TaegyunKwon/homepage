export interface Media {
    type: 'news' | 'video' | 'link';
    title: string;
    url: string;
  }
  
  export interface ArtProject {
    id: string;
    title: string;
    role: string;
    date: string;
    venue: string;
    images: string[];
    shortdescription: string;
    description: string;
    detailedRole: string;
    media?: Media[];
  }

  export const artProjects: ArtProject[] = [
    {
      id: 'xspace',
      title: '⟨ X-Space ⟩ Co-creation of Daejeon Art Center and KAIST',
      role: 'Technical Director, AI Interaction',
      date: '28 Sep. 2024',
      venue: 'Concert, Daejeon Art Center',
      images: ['/images/art/X-Space.webp', '/images/art/X-Space2.webp', '/images/art/X-Space3.webp', 
          '/images/art/X-Space4.webp', '/images/art/X-Space5.webp', '/images/art/X-Space6.webp',
          '/images/art/X-Space7.webp', '/images/art/X-Space8.webp', '/images/art/X-Space9.webp', '/images/art/X-Space10.webp'],
      shortdescription: "X-Space is an interdisciplinary project that combines AI technology with artistic concert.",
      description: "X-Space is an interdisciplinary project that combines cutting-edge technology with artistic concert. Our team, MACLAB, developed a concert with four pieces utilizing real-time piano transcription and score following. We premiered a piece 'Dialogue in Resonance' by Hayoun Bang, specially written for integrating real-time piano transcription. The last piece 'Dance Macabre' utilized online DTW algorithm, enabled human-AI duet that can be synchronized in very precise (<30ms) timing.",
      detailedRole: "Planning & Directing. Technical Director, AI Interaction Development. I was responsible for general directing including music, visualization, and AI interaction development. I was also participated in creation of the 'Dialogue in Resonance', as a technical creator.",
      media: [
        { type: 'news', title: '대전예당, 과학기술·공연예술 결합한 공연 실험실 X-Space 개최', url: 'https://www.yna.co.kr/view/AKR20240926071500063' },
      ]
    },
    {
      id: 'neo-art',
      title: '⟨ 신체 비전 ⟩ Neo-art Project',
      role: 'Technical Director, Physical Simulation',
      date: '8 Aug. 2024',
      venue: 'Choreography, Ansan Art Center',
      images: ['/images/art/신체비전.webp', '/images/art/신체비전2.webp', '/images/art/신체비전3.webp'],
      shortdescription: "Contemporary Choreography, with technology.",
      description: "신체비전 is a Contemporary Choreography project directed by Kang Yoo-seop. We built a triple pendulum, which offers non-expectable motion for dancers. The choreography was inspired and composed following the motion of the pendulum.",
      detailedRole: "Technical Director, Physical Simulation Development. I was responsible for creating core concept which can be a bridge between choreography and the technology. I was involved in the making of the pendulum, and the pendulum simulation system.",
      media: [
          { type: 'news', title: '네오아트프로젝트 강요섭안무가 신작 신체비전', url: 'https://www.baccro.com/news/articleView.html?idxno=51143'},
          { type: 'link', title: 'Neo Art Project', url: 'https://neoartproject.creatorlink.net/'}
      ]
    },
    {
      id: 'con-amore',
      title: '⟨ Con Amore ⟩ 20th Anniversary of Daejeon Art Center',
      role: 'Technical Support',
      date: '5 Oct. 2023',
      venue: 'Concert, Daejeon Art Center',
      images: ['/images/art/Con-amore.webp'],
      shortdescription: "20th anniversary of Daejeon Art Center. We performed an AI piano piece with Flutist Jasmin Choi.",
      description: "Con Amore is a concert celebrating the 20th anniversary of Daejeon Art Center. We applied gesture recognition and cue triggering system to AI piano performance. It was performed with Flutist Jasmin Choi.",
      detailedRole: "Technical Support. I was involved in the system development and performance.",
      media: [
          { type: 'news', title: '미래세대 위한 예술의 메카 대전을 기대하세요', url: 'https://www.daejonilbo.com/news/articleView.html?idxno=2091079'},
          { type: 'news', title: '대전예술의전당, 향후 20년의 미래 선보여', url: 'https://www.ccnnews.co.kr/news/articleView.html?idxno=319896'}
      ]
    },
    {
      id: 'all-about-errors',
      title: '⟨ All About Errors ⟩',
      role: 'Music Director, Realtime Music-Motion Interaction',
      date: '26 Sep. 2023',
      venue: 'Concert, Gwangju Complex Cube',
      images: ['/images/art/AAE2.webp', '/images/art/AAE.webp', '/images/art/AAE3.webp', '/images/art/AAE4.webp', '/images/art/AAE5.webp', '/images/art/AAE6.webp'],
      shortdescription: "All About Errors is an interactive performance that explores the interdisciplinary creation involving music, motion, and AI.",
      description: "All About Errors is an interactive performance that explores the interdisciplinary creation involving music, motion, and AI.",
      detailedRole: "Music Director, Realtime Music-Motion Interaction. I directed the music and realtime music-motion interaction. I also developed the AI piano performance, and interaction.",
      media: [
          { type: 'link', title: 'Neo Harmonics', url: 'https://www.instagram.com/neo_harmonics/'}
      ]
    },
    {
      id: 'inovate-korea',
      title: '⟨ Inovate Korea ⟩ AI piano with Soprano Sumi Jo',
      role: 'AI piano performance generation, Performance planning, Development',
      date: '27 Jun. 2023',
      venue: 'Concert, KAIST Sports Complex',
      images: ['/images/art/이노베이트2022.webp'],
      shortdescription: "Inovate Korea is a concert that showcases the latest technologies in music and art.", 
      description: "Inovate Korea is a concert that showcases the latest technologies in music and art. We introduced interactive AI piano performance, and AI-generated expressive accompaniment.",
      detailedRole: "AI piano performance interaction, general planning, Development.",
      media: [
          { type: 'news', title: '세계 최초 놀라운 광경…천하의 조수미 "AI 아바타와 무대 나도 떨려"', url: 'https://biz.heraldcorp.com/view.php?ud=20230628000050'}
      ]
    },
    {
      id: 'haydn-avent',
      title: '⟨ Haydn Avent ⟩',
      role: 'Technical Director, AI Interaction',
      date: '15 Apr. 2022 - 17 Apr. 2022',
      venue: 'Concert, Daejeon Art Center Ensemble Hall',
      images: ['/images/art/하이든아벤트.webp'],
      shortdescription: "Haydn Avent is a concert involving AI piano performances",
      description: "Haydn Avent is a concert that features AI piano performances. We played three pieces, utilizing automatic transcription (Re-performance of Kun-woo Paik's Beethoven Sonata) and alignment technology.",
      detailedRole: "Technical Director, AI Interaction.",
      media: [
          { type: 'news', title: '대전예술의전당, 스프링페스티벌 "하이든 아벤트" 공연', url: 'https://www.news1.kr/local/daejeon-chungnam/4648413'},
      ]
    },
    {
      id: 'im-a-kaist',
      title: '⟨ I\'m a KAIST ⟩ collaboration with Sumi Jo',
      role: 'AI piano performance generation, planning',
      date: '6 Jan. 2022',
      venue: 'Concert, KAIST Auditorium',
      images: ['/images/art/imakaist.webp'],
      shortdescription: "AI piano performance with Soprano Sumi Jo.",
      description: "AI piano performance with Soprano Sumi Jo.",
      detailedRole: "AI piano performance generation, planning."
    },
    {
      id: 'interactive-ai-piano',
      title: '⟨ Interactive AI piano ⟩',
      role: 'AI piano installation, planning, development',
      date: '21 Sep. 2021 - Present',
      venue: 'Installation, Sinsegae Department Store Art& Science Nexperium',
      images: ['/images/art/신세계.webp'],
      shortdescription: "Interactive AI piano is an installation that allows visitors to interact with an AI piano.",
      description: "Interactive AI piano is an installation that allows visitors to interact with an AI piano.",
      detailedRole: "AI piano installation, planning, development." ,
      media: [
          { type: 'news', title: '신세계X카이스트 협업한 대전 신세계 넥스페리움 가 보니… "찐 과학"은 이런 것', url: 'https://m.joongdo.co.kr/view.php?key=20210908010001829'}
      ]
    },
    {
      id: 'ai-x-human',
      title: '⟨ AI X Human meet with piano ⟩ collaboration with Gimpo Philharmonic Orchestra',
      role: 'AI piano performance development',
      date: '21 Jul. 2021',
      venue: 'Recorded Concert, Gimpo Art Hall',
      images: ['/images/art/김포필하모닉.webp'],
      shortdescription: "AI X Human is a recorded concert that features an AI piano performance with the Gimpo Philharmonic Orchestra.",
      description: "AI X Human is a recorded concert that features an AI piano performance with the Gimpo Philharmonic Orchestra. We premiered a piano concerto for AI piano, and performed Poulenc's 'Concerto for Two Pianos in D Minor'.",
      detailedRole: "AI piano performance development.",
      media: [
          { type: 'news', title: '김포필하모닉, "AI x Human, 피아노로 만나다" 공연', url: 'https://www.yna.co.kr/view/AKR20210721000000063'}
      ]
    },
    {
      id: 'ai-piano-duet',
      title: '⟨ AI Piano Duet Performance ⟩ collaboration with Jongwha Park',
      role: 'AI piano performance development',
      date: '21 Feb. 2021',
      venue: 'Ceremony of the 50th anniversary of KAIST, KAIST Auditorium',
      images: ['/images/art/50주년.webp'],
      shortdescription: "AI Piano Duet Performance is a concert that features an AI piano performance with Jongwha Park.",
      description: "AI Piano Duet Performance is a concert that features an AI piano performance with Jongwha Park.",
      detailedRole: "AI piano performance development."
    },
    {
      id: 'alphago-badaga',
      title: '⟨ AlphaGo ⟩, ⟨ BadaGa ⟩, ⟨ B, A? ... C, H ⟩; collaboration with Hana Ryou',
      role: 'AI piano performance development',
      date: '13 Jan. 2021',
      venue: 'Recorded Concert, WhiteHall, Seocho, Seoul',
      images: ['/images/art/바다가.webp'],
      shortdescription: "AlphaGo, BadaGa, and B, A? ... C, H are recorded concerts that feature AI Technologies.",
      description: "AlphaGo, BadaGa, and B, A? ... C, H are recorded concerts that feature AI Technologies. We utilized DeepBach, and Virtuosonet to generate the AI piano performances.",
      detailedRole: "AI piano performance development.",
    },
    {
      id: 'deep-space-music',
      title: '⟨ Deep Space Music ⟩ collaboration with NOS VISUALS',
      role: 'AI piano performance development, installation',
      date: 'Nov. 2019 - Jan. 2020',
      venue: 'Exhibition `WAYS OF SEEING\', Daejeon Museum of Art',
      images: ['/images/art/Deepspace2.webp'],
      shortdescription: "Deep Space Music is an exhibition that features an AI piano installation and performances.",
      description: "Deep Space Music is an exhibition that features an AI piano installation and performances. We utilized Virtuosonet to generate expressive AI piano performances.",
      detailedRole: "AI piano performance development",
      media: [
          { type: 'news', title: '[어떻게 볼 것인가:WAYS OF SEEING] AI피아노가 보여주는 감각의 세계', url: 'https://m.joongdo.co.kr/view.php?key=20191203010001258'}
      ]
    },
  ];