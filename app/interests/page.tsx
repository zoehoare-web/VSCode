import content from '../../content/interests.html?raw';

export const metadata = { title: 'Interests | Dr Zoe Hoare' };

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: content }} />;
}
