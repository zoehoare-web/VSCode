import content from '../../content/research.html?raw';

export const metadata = { title: 'Research | Dr Zoe Hoare' };

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: content }} />;
}
