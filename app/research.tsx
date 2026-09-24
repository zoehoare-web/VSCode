const publications = [
  { year: '2026', journal: 'British Journal of Pharmacology', title: 'Diltiazem N-oxide, a novel ischaemia-activated prodrug, prevents ischaemia-induced ventricular fibrillation without off-target adverse effects', url: 'https://doi.org/10.1111/bph.70463', authors: 'Hesketh LM, Watson GA, Mazzacuva F, Hoare Z, Eykyn TR & Curtis MJ.' },
  { year: '2024', journal: 'Cancer & Metabolism', title: 'Disrupting Na+ ion homeostasis and Na+/K+ ATPase activity in breast cancer cells directly modulates glycolysis in vitro and in vivo', url: 'https://doi.org/10.1186/s40170-024-00343-5', authors: 'Michaels AM, Zoccarato A, Hoare Z, et al.' },
  { year: '2024', journal: 'Nature Communications', title: 'Elevated Na is a dynamic and reversible modulator of mitochondrial metabolism in the heart', url: 'https://doi.org/10.1038/s41467-024-48474-z', authors: 'Chung YJ, Hoare Z, Baark F, et al.' },
  { year: '2023', journal: 'Nature Communications', title: 'Discovery of a novel cardiac-specific myosin modulator using artificial intelligence-based virtual screening', url: 'https://doi.org/10.1038/s41467-023-43538-y', authors: 'Parijat P, Attili S, Hoare Z, Shattock M, Kenyon V & Kampourakis T.' },
];

export function Research() {
  return <div className="research-content">
    <nav className="research-nav" aria-label="Research sections"><a href="#phd">PhD</a><a href="#imperial">Imperial</a><a href="#aria">ARIA</a><a href="#publications">Publications</a></nav>
    <article className="research-project" id="phd">
      <p className="project-kicker">PhD · King’s College London</p>
      <h2><a href="https://kclpure.kcl.ac.uk/portal/en/studentTheses/targeting-elevated-intracellular-sodium-and-metabolic-reprogrammi/">Targeting Elevated Intracellular Sodium and Metabolic Reprogramming in Heart Failure</a></h2>
      <p>My PhD investigated how elevated intracellular sodium alters cardiac metabolism, and whether lowering sodium could help reverse metabolic reprogramming in heart failure. Using isolated hearts, cell models and optogenetic tools, I explored the relationship between sodium homeostasis, mitochondrial function and cardiac energetics.</p>
      <dl className="project-details"><div><dt>Advisors</dt><dd>Prof Michael Shattock &amp; Dr Thomas Eykyn<br/><span>King’s College London</span></dd></div></dl>
      <h3>Collaborations</h3>
      <ul className="collaborators">
        <li><a href="https://www.mrc-mbu.cam.ac.uk/research-groups/murphy-group">Prof Michael Murphy</a><span>MRC Mitochondrial Biology Unit, University of Cambridge</span></li>
        <li><a href="https://herzzentrum.umg.eu/forschung/arbeitsgruppen/vegetative-optogenetik/">Prof Tobias Bruegmann</a><span>Optogenetics · University of Göttingen</span></li>
        <li><a href="https://medicine.uky.edu/departments/internalmedicine/users/tka265">Prof Thomas Kampourakis</a><span>Molecular biophysics · University of Kentucky</span></li>
      </ul>
      <a className="research-link" href="https://kclpure.kcl.ac.uk/portal/en/studentTheses/targeting-elevated-intracellular-sodium-and-metabolic-reprogrammi/">Read my PhD thesis <span aria-hidden="true">↗</span></a>
    </article>
    <section className="research-project" id="imperial" aria-labelledby="imperial-title">
      <p className="project-kicker">Imperial College London</p>
      <h2 id="imperial-title">Research projects</h2>
      <article className="imperial-project"><h3>Investigating the role of autoantibodies in heart failure</h3><p>Research in <a href="https://profiles.imperial.ac.uk/s.sattler">Prof Susanne Sattler’s lab</a>, exploring the role of autoantibodies in heart failure.</p></article>
      <article className="imperial-project"><h3>Investigating the role of gut microbiome metabolites in cardiometabolic disease</h3><p>Research with <a href="https://profiles.imperial.ac.uk/m.dumas">Prof Marc-Emmanuel Dumas</a>, investigating how metabolites produced by the gut microbiome relate to cardiometabolic disease.</p></article>
    </section>
    <article className="research-project" id="aria">
      <p className="project-kicker">ARIA · Precision Mitochondria</p>
      <h2>Engineering the mitochondrial genome</h2>
      <p>I am part of a project within ARIA’s Precision Mitochondria programme, developing tools to engineer the mitochondrial genome.</p>
      <p>Led by Prof Hansong Ma at the University of Birmingham, the project brings together expertise in nanotechnology, vesicle engineering and mitochondrial genetics. The team aims to develop ways to deliver genetic instructions into mitochondria, express them and maintain them over time, enabling new approaches to studying mitochondrial function.</p>
      <a className="research-link" href="https://www.birmingham.ac.uk/news/2026/new-aria-funding-to-build-toolkit-for-engineering-the-mitochondrial-genome">Read about the ARIA project <span aria-hidden="true">↗</span></a>
    </article>
    <section className="research-project publications" id="publications" aria-labelledby="publications-title">
      <p className="project-kicker">Research outputs</p><h2 id="publications-title">Publications</h2>
      <ol>{publications.map(p => <li key={p.url}><p className="publication-meta">{p.year} <span aria-hidden="true">·</span> {p.journal}</p><h3><a href={p.url}>{p.title}</a></h3><p className="publication-authors">{p.authors}</p></li>)}</ol>
      <a className="research-link" href="https://www.linkedin.com/in/zoe-hoare-882910268/">View my LinkedIn profile <span aria-hidden="true">↗</span></a>
    </section>
  </div>;
}
