import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hello from '../components/hello';

import Intro from '../components/intro';
import Skills from '../components/skills';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY));
    window.addEventListener('mousemove', (e) => setMouseX(e.clientX - window.innerWidth / 2));
    return () => {
      window.removeEventListener('scroll', () => setScrollY(window.scrollY));
      window.removeEventListener('mousemove', (e) => setMouseX(e.clientX - window.innerWidth / 2));
    }
  }, [scrollY]);

  return (
    <div>
      <Head>
        <title>Dong's Portfolio</title>
        <meta name="description" content="Dong's first portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* intro */}
      <Intro scrollY={scrollY} mouseX={mouseX}/>
      <Hello/>

      {/* skills */}
      <Skills scrollY={scrollY} mouseX={mouseX}/>

      {/* about */}

      {/* projects */}

      {/* contact */}
    </div>
  )
}
