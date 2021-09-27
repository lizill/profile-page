import Head from 'next/head';
import Hello from '../components/hello';

import Intro from '../components/intro';
import Skills from '../components/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dong's Portfolio</title>
        <meta name="description" content="Dong's first portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* intro */}
      <Intro/>
      <Hello/>

      {/* skills */}
      <Skills/>

      {/* about */}

      {/* projects */}

      {/* contact */}
    </div>
  )
}
