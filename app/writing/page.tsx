import content from '../../content/writing.html?raw';

export const metadata = { title: 'Writing | Dr Zoe Hoare' };

export default function Page() {
  return <main id="main" className="writing-page" dangerouslySetInnerHTML={{ __html: content }} />;
}
