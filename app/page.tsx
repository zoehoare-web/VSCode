import content from '../content/home.html?raw';

export default function Home() {
  return (
    <main id="main" className="home-layout">
      <div className="home-copy" dangerouslySetInnerHTML={{ __html: content }} />
      <img
        className="home-portrait"
        src="/cartoon-headshot.jpg"
        alt="Cartoon portrait of Zoe Hoare"
        width="400"
        height="400"
      />
    </main>
  );
}
