import { sections } from './site-content';
import { Research } from './research';

export function SectionPage({ id }: { id: string }) {
  const section = sections.find(section => section.id === id);
  if (!section) return null;
  return <main id="main">
    <h1>{section.title}</h1>
    <p>{section.description}</p>
    {id === 'research' ? <Research /> : section.items.map(item => <article className="entry" key={item.title}>
      <h2>{item.titleUrl ? <a href={item.titleUrl}>{item.title}</a> : item.title}</h2>
      <p>{item.description}{item.link && <> <a href={item.link.url}>{item.link.label}</a>.</>}</p>
    </article>)}
  </main>;
}
