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
    images: { src: string; width: number; height: number; alt: string }[];
    shortdescription: string;
    description: string;
    detailedRole: string;
    media?: Media[];
  }

  export const artProjects: ArtProject[] = [
    {
      id: 'xspace',
      title: "X-Space",
      role: "Technical direction & AI interaction",
      date: '28 Sep. 2024',
      venue: 'Concert, Daejeon Art Center',
      images: [
        {src: "/images/art/X-Space7.webp", width: 1200, height: 675, alt: "A pianist at the keyboard under blue stage lighting"},
        {src: "/images/art/X-Space2.webp", width: 1200, height: 693, alt: "The X-Space title projected above two pianos"},
        {src: "/images/art/X-Space3.webp", width: 1200, height: 642, alt: "Two pianos lit in magenta and blue"},
        {src: "/images/art/X-Space4.webp", width: 1200, height: 656, alt: "Interlocking rings of light on the stage floor"},
        {src: "/images/art/X-Space5.webp", width: 1200, height: 698, alt: "Performers and pianos in overlapping circles of light"},
        {src: "/images/art/X-Space6.webp", width: 1200, height: 900, alt: "A technician working at a monitor beside the stage"},
        {src: "/images/art/X-Space.webp", width: 1200, height: 652, alt: "Two pianos in a pool of violet light"},
        {src: "/images/art/X-Space8.webp", width: 1199, height: 900, alt: "Two musicians at the keyboards in blue light"},
        {src: "/images/art/X-Space9.webp", width: 1200, height: 900, alt: "A wide view of the X-Space concert stage"},
        {src: "/images/art/X-Space10.webp", width: 1200, height: 818, alt: "A page from the X-Space concert program"}
      ],
      shortdescription: "X-Space is an interdisciplinary project that combines AI technology with artistic concert.",
      description: "X-Space is an interdisciplinary project that combines cutting-edge technology with artistic concert. Our team, MACLAB, developed a concert with four pieces utilizing real-time piano transcription and score following. We premiered a piece 'Dialogue in Resonance' by Hayoun Bang, specially written for integrating real-time piano transcription. The last piece 'Dance Macabre' utilized online DTW algorithm, enabled human-AI duet that can be synchronized in very precise (<30ms) timing.",
      detailedRole: "I directed the music, visuals, and AI interaction for the concert and contributed to the technical creation of Dialogue in Resonance.",
      media: [
        { type: 'news', title: '대전예당, 과학기술·공연예술 결합한 공연 실험실 X-Space 개최', url: 'https://www.yna.co.kr/view/AKR20240926071500063' },
      ]
    },
    {
      id: 'neo-art',
      title: "신체 비전",
      role: "Technical direction & physical simulation",
      date: '8 Aug. 2024',
      venue: 'Choreography, Ansan Art Center',
      images: [
        {src: "/images/art/신체비전.webp", width: 1200, height: 675, alt: "A performer beneath a suspended green projection"},
        {src: "/images/art/신체비전2.webp", width: 900, height: 900, alt: "Green and white poster for 신체 비전"},
        {src: "/images/art/신체비전3.webp", width: 900, height: 900, alt: "Figures moving through a light-filled room"}
      ],
      shortdescription: "Contemporary Choreography, with technology.",
      description: "신체비전 is a Contemporary Choreography project directed by Kang Yoo-seop. We built a triple pendulum, which offers non-expectable motion for dancers. The choreography was inspired and composed following the motion of the pendulum.",
      detailedRole: "I helped design and build the triple pendulum and developed the simulation that connected its motion to the choreography.",
      media: [
          { type: 'news', title: '네오아트프로젝트 강요섭안무가 신작 신체비전', url: 'https://www.baccro.com/news/articleView.html?idxno=51143'},
          { type: 'link', title: 'Neo Art Project', url: 'https://neoartproject.creatorlink.net/'}
      ]
    },
    {
      id: 'con-amore',
      title: "Con Amore",
      role: "Gesture cue detection & performance support",
      date: '5 Oct. 2023',
      venue: 'Concert, Daejeon Art Center',
      images: [
        {src: "/images/art/Con-amore.webp", width: 1090, height: 900, alt: "A flutist onstage with a live video feed above"}
      ],
      shortdescription: "20th anniversary of Daejeon Art Center. We performed an AI piano piece with Flutist Jasmin Choi.",
      description: "Con Amore is a concert celebrating the 20th anniversary of Daejeon Art Center. We applied gesture recognition and cue triggering system to AI piano performance. It was performed with Flutist Jasmin Choi.",
      detailedRole: "I contributed to the gesture cue system that let flutist Jasmin Choi signal the AI piano, and helped run it in performance.",
      media: [
          { type: 'news', title: '미래세대 위한 예술의 메카 대전을 기대하세요', url: 'https://www.daejonilbo.com/news/articleView.html?idxno=2091079'},
          { type: 'news', title: '대전예술의전당, 향후 20년의 미래 선보여', url: 'https://www.ccnnews.co.kr/news/articleView.html?idxno=319896'}
      ]
    },
    {
      id: 'all-about-errors',
      title: "All About Errors",
      role: "Music direction & interactive piano",
      date: '26 Sep. 2023',
      venue: 'Concert, Gwangju Complex Cube',
      images: [
        {src: "/images/art/AAE4.webp", width: 1200, height: 798, alt: "A pianist silhouetted against a grid of illuminated panels"},
        {src: "/images/art/AAE.webp", width: 636, height: 900, alt: "Graphic score in green, black, and white"},
        {src: "/images/art/AAE3.webp", width: 598, height: 900, alt: "Two dancers caught in a pool of light"},
        {src: "/images/art/AAE2.webp", width: 1200, height: 798, alt: "A dark stage facing a brightly lit wall of images"},
        {src: "/images/art/AAE5.webp", width: 1200, height: 798, alt: "A dancer seated against a projected backdrop"},
        {src: "/images/art/AAE6.webp", width: 675, height: 900, alt: "The technical crew at their monitors"}
      ],
      shortdescription: "All About Errors is an interactive performance that explores the interdisciplinary creation involving music, motion, and AI.",
      description: "All About Errors is an interactive performance that explores the interdisciplinary creation involving music, motion, and AI.",
      detailedRole: "I directed the music and developed the AI piano system that linked the music to the dancers’ movements in real time.",
      media: [
          { type: 'link', title: 'Neo Harmonics', url: 'https://www.instagram.com/neo_harmonics/'}
      ]
    },
    {
      id: 'inovate-korea',
      title: "Inovate Korea",
      role: "Concert planning & AI piano development",
      date: '27 Jun. 2023',
      venue: 'Concert, KAIST Sports Complex',
      images: [
        {src: "/images/art/이노베이트2022.webp", width: 1200, height: 696, alt: "A singer onstage with a projected figure and keyboard"},
        {src: "/images/art/이노베이트2022-2.webp", width: 1200, height: 683, alt: "A singer and piano in front of a projected keyboard"}
      ],
      shortdescription: "Inovate Korea is a concert that showcases the latest technologies in music and art.", 
      description: "Inovate Korea is a concert that showcases the latest technologies in music and art. We introduced interactive AI piano performance, and AI-generated expressive accompaniment.",
      detailedRole: "I helped plan the performance with soprano Sumi Jo and developed the interactive AI piano accompaniment.",
      media: [
          { type: 'news', title: '세계 최초 놀라운 광경…천하의 조수미 "AI 아바타와 무대 나도 떨려"', url: 'https://biz.heraldcorp.com/view.php?ud=20230628000050'}
      ]
    },
    {
      id: 'haydn-avent',
      title: "Haydn Avent",
      role: "Technical direction & AI interaction",
      date: '15 Apr. 2022 - 17 Apr. 2022',
      venue: 'Concert, Daejeon Art Center Ensemble Hall',
      images: [
        {src: "/images/art/하이든아벤트.webp", width: 1200, height: 775, alt: "A lit piano beneath a projection in a dark hall"}
      ],
      shortdescription: "Haydn Avent is a concert involving AI piano performances",
      description: "Haydn Avent is a concert that features AI piano performances. We played three pieces, utilizing automatic transcription (Re-performance of Kun-woo Paik's Beethoven Sonata) and alignment technology.",
      detailedRole: "I directed the technical work on piano transcription and alignment for the concert.",
      media: [
          { type: 'news', title: '대전예술의전당, 스프링페스티벌 "하이든 아벤트" 공연', url: 'https://www.news1.kr/local/daejeon-chungnam/4648413'},
      ]
    },
    {
      id: 'im-a-kaist',
      title: "I’m a KAIST",
      role: "Concert planning & AI piano generation",
      date: '6 Jan. 2022',
      venue: 'Concert, KAIST Auditorium',
      images: [
        {src: "/images/art/imakaist.webp", width: 640, height: 360, alt: "Sheet music projected across the concert stage"}
      ],
      shortdescription: "AI piano performance with Soprano Sumi Jo.",
      description: "AI piano performance with Soprano Sumi Jo.",
      detailedRole: "I helped plan the concert with soprano Sumi Jo and generated the AI piano performance.",
    },
    {
      id: 'interactive-ai-piano',
      title: "Interactive AI Piano",
      role: "Installation planning & development",
      date: '21 Sep. 2021 - Present',
      venue: 'Installation, Sinsegae Department Store Art& Science Nexperium',
      images: [
        {src: "/images/art/신세계.webp", width: 1200, height: 900, alt: "A grand piano and visitor interface inside Nexperium"}
      ],
      shortdescription: "Interactive AI piano is an installation that allows visitors to interact with an AI piano.",
      description: "Interactive AI piano is an installation that allows visitors to interact with an AI piano.",
      detailedRole: "I helped plan, develop, and install the piano that visitors could interact with at Nexperium.",
      media: [
          { type: 'news', title: '신세계X카이스트 협업한 대전 신세계 넥스페리움 가 보니… "찐 과학"은 이런 것', url: 'https://m.joongdo.co.kr/view.php?key=20210908010001829'}
      ]
    },
    {
      id: 'ai-x-human',
      title: "AI × Human, Meet with Piano",
      role: "AI piano development",
      date: '21 Jul. 2021',
      venue: 'Recorded Concert, Gimpo Art Hall',
      images: [
        {src: "/images/art/김포필하모닉.webp", width: 1200, height: 675, alt: "Two grand pianos in front of the orchestra"}
      ],
      shortdescription: "AI X Human is a recorded concert that features an AI piano performance with the Gimpo Philharmonic Orchestra.",
      description: "AI X Human is a recorded concert that features an AI piano performance with the Gimpo Philharmonic Orchestra. We premiered a piano concerto for AI piano, and performed Poulenc's 'Concerto for Two Pianos in D Minor'.",
      detailedRole: "I developed the AI piano performance for the recorded concert with the Gimpo Philharmonic Orchestra.",
      media: [
          { type: 'news', title: '김포필하모닉, "AI x Human, 피아노로 만나다" 공연', url: 'https://www.yna.co.kr/view/AKR20210721000000063'}
      ]
    },
    {
      id: 'ai-piano-duet',
      title: "AI Piano Duet",
      role: "AI piano development",
      date: '21 Feb. 2021',
      venue: 'Ceremony of the 50th anniversary of KAIST, KAIST Auditorium',
      images: [
        {src: "/images/art/50주년.webp", width: 1200, height: 675, alt: "A pianist and two grand pianos beneath a band of colored lights"}
      ],
      shortdescription: "AI Piano Duet Performance is a concert that features an AI piano performance with Jongwha Park.",
      description: "AI Piano Duet Performance is a concert that features an AI piano performance with Jongwha Park.",
      detailedRole: "I developed the AI piano part for the duet with pianist Jongwha Park at KAIST’s 50th anniversary.",
    },
    {
      id: 'alphago-badaga',
      title: "AlphaGo · BadaGa · B, A? … C, H",
      role: "AI piano development",
      date: '13 Jan. 2021',
      venue: 'Recorded Concert, WhiteHall, Seocho, Seoul',
      images: [
        {src: "/images/art/바다가.webp", width: 1121, height: 900, alt: "A painting in muted blue, pink, and green"}
      ],
      shortdescription: "AlphaGo, BadaGa, and B, A? ... C, H are recorded concerts that feature AI Technologies.",
      description: "AlphaGo, BadaGa, and B, A? ... C, H are recorded concerts that feature AI Technologies. We utilized DeepBach, and Virtuosonet to generate the AI piano performances.",
      detailedRole: "I developed the AI piano performances for this collaboration with Hana Ryou using DeepBach and VirtuosoNet.",
    },
    {
      id: 'deep-space-music',
      title: "Deep Space Music",
      role: "AI piano development & installation",
      date: 'Nov. 2019 - Jan. 2020',
      venue: 'Exhibition `WAYS OF SEEING\', Daejeon Museum of Art',
      images: [
        {src: "/images/art/Deepspace2.webp", width: 800, height: 450, alt: "A grand piano silhouetted against orange and green projections"},
        {src: "/images/art/Deepspace.webp", width: 800, height: 450, alt: "A grand piano surrounded by projected polygon outlines"},
        {src: "/images/art/Deepspace3.webp", width: 540, height: 405, alt: "A figure standing beside the piano inside the projection"}
      ],
      shortdescription: "Deep Space Music is an exhibition that features an AI piano installation and performances.",
      description: "Deep Space Music is an exhibition that features an AI piano installation and performances. We utilized Virtuosonet to generate expressive AI piano performances.",
      detailedRole: "I developed and installed the AI piano for this collaboration with NOS VISUALS, using VirtuosoNet to generate its expressive performances.",
      media: [
          { type: 'news', title: '[어떻게 볼 것인가:WAYS OF SEEING] AI피아노가 보여주는 감각의 세계', url: 'https://m.joongdo.co.kr/view.php?key=20191203010001258'}
      ]
    },
  ];