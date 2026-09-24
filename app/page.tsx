import { sections } from './site-content';
import { Research } from './research';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Dr Zoe Hoare home">Zoe Hoare</a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a><a href="#writing">Writing</a><a href="#interests">Interests</a><a href="#funding">Grant funding</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="eyebrow"><span className="dot" /> CARDIAC METABOLISM & MITOCHONDRIAL FUNCTION</div>
          <h1>Dr Zoe Hoare.</h1>
          <p className="headline">Cardiac metabolism scientist interested in fixing <span>mitochondrial dysfunction.</span></p>
          <div className="hero-bottom">
            <p className="intro">I study how metabolism and mitochondrial function shape heart disease, and how a clearer understanding of both might open new therapeutic paths.</p>
            <a className="explore" href="#research">Explore my research <span aria-hidden="true">↘</span></a>
          </div>
          <div className="hero-foot"><span>METABOLISM</span><span className="rule"/><span>MITOCHONDRIA</span><span className="rule"/><span>HEART DISEASE</span></div>
        </section>
        <div className="sections">
          {sections.map((section, index) => (
            <section className="content-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
              <div className="section-label"><span className="number">0{index + 1}</span><h2 id={`${section.id}-title`}>{section.title}</h2></div>
              <div className="section-body">
                <p className="section-description">{section.description}</p>
                {section.id === 'research' ? <Research /> : section.items.length ? section.items.map((item, i) => <article className="entry" key={i}><h3>{item.titleUrl ? <a href={item.titleUrl}>{item.title}</a> : item.title}</h3><p>{item.description}{item.link && <> <a href={item.link.url}>{item.link.label}</a>.</>}</p></article>) : <div className="placeholder"><span className="placeholder-mark" aria-hidden="true">+</span><div><h3>{section.placeholder}</h3><p>Details forthcoming.</p></div></div>}
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer><a href="#home">Dr Zoe Hoare.</a><span>Cardiac metabolism · Mitochondrial function</span><a className="back-top" href="#home">Back to top ↑</a></footer>
    </>
  );
}
