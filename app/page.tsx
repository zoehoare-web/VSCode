import content from '../content/home.html?raw';

export default function Home() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: content }} />;
}
