// Add your details below. Each item can contain a title and description.
// Example: items: [{ title: 'Project title', description: 'A short summary.' }]
type Section = { id: string; title: string; description: string; placeholder: string; items: { title: string; description: string; link?: { label: string; url: string } }[] };
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
    description: 'Support for the science.',
    placeholder: 'Grants & awards',
    items: [],
  },
];
