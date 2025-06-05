import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>F1 Fan Site</title>
      </Head>
      <header style={{ padding: '1rem', backgroundColor: '#111', color: '#eee' }}>
        <h1>F1 Fan Hub</h1>
        <nav>
          <Link href="/drivers">Drivers</Link> |{' '}
          <Link href="/schedule">Schedule</Link> |{' '}
          <Link href="/standings">Standings</Link> |{' '}
          <Link href="/news">News</Link>
        </nav>
      </header>
      <main style={{ padding: '1rem', color: '#ddd', background: '#222', minHeight: '100vh' }}>
        <h2>Welcome to the F1 Fan Hub</h2>
        <p>This is a fan-made website inspired by Formula 1.</p>
      </main>
    </div>
  );
}