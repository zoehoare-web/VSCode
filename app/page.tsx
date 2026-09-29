import content from '../content/home.html?raw';

export default function Home() {
  return (
    <main id="main" className="home-layout">
      <img
        className="home-portrait"
        src="/cartoon-headshot.jpg"
        alt="Cartoon portrait of Zoe Hoare"
        width="400"
        height="400"
      />
      <div className="home-copy" dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}
