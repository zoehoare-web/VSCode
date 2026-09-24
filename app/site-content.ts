// Add your details below. Each item can contain a title and description.
// Example: items: [{ title: 'Project title', description: 'A short summary.' }]
type Section = { id: string; title: string; description: string; placeholder: string; items: { title: string; titleUrl?: string; description: string; link?: { label: string; url: string } }[] };
export const sections: Section[] = [
  {
    id: 'research',
    title: 'Research',
    description: 'Understanding how metabolism and mitochondrial function shape heart disease.',
    placeholder: 'Research projects',
    items: [],
  },
  {
    id: 'interests',
    title: 'Interests',
    description: 'Ideas, questions and interests beyond individual research projects.',
    placeholder: 'Interests & explorations',
    items: [
      {
        title: 'Solving aging by fixing mitochondrial dysfunction',
        description: 'The importance of bioenergetics in age-related disease is clear, but the tools to develop a cure do not exist.',
      },
      {
        title: 'Improving sustainable energy technologies',
        description: 'I trained for a Level 3 Award in the Rational Use of Sustainable Energy in association with the',
        link: { label: '2041 Foundation', url: 'https://2041foundation.org/robert-swan/' },
      },
    ],
  },
  {
    id: 'funding',
    title: 'Grant funding',
    description: 'I have experience in research grant management as part of the International Programmes team at the British Heart Foundation, where I contributed to the management of the following programmes.',
    placeholder: 'Research programmes',
    items: [
      {
        title: 'CureHeart',
        titleUrl: 'https://www.bhf.org.uk/cureheart',
        description: 'An international research programme developing genetic therapies for inherited heart muscle diseases. CureHeart aims to correct or silence disease-causing genes, with the goal of preventing or curing genetic cardiomyopathies.',
      },
      {
        title: 'AI in Cardiovascular Health Grand Challenge',
        titleUrl: 'https://www.bhf.org.uk/what-we-do/our-research/cardiovascular-grand-challenges/artificial-intelligence',
        description: 'A British Heart Foundation initiative bringing together expertise across disciplines to harness artificial intelligence for cardiovascular health. The challenge aims to transform how heart and circulatory diseases are predicted, prevented, diagnosed and treated.',
      },
      {
        title: 'Wellcome Leap VISIBLE programme',
        titleUrl: 'https://wellcomeleap.org/programs/visible/',
        description: 'A programme focused on improving the diagnosis and treatment of coronary microvascular disease in women with stable angina. VISIBLE aims to develop scalable diagnostic tools and treatments informed by the underlying mechanisms of disease.',
      },
    ],
  },
];
