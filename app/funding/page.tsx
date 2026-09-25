import content from '../../content/funding.html?raw';

export const metadata = { title: 'Grant funding | Dr Zoe Hoare' };

export default function Page() {
  return <main id="main" dangerouslySetInnerHTML={{ __html: content }} />;
}
