// Add your details below. Each item can contain a title and description.
// Example: items: [{ title: 'Project title', description: 'A short summary.' }]
type Section = { id: string; title: string; description: string; placeholder: string; items: { title: string; description: string }[] };
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
    items: [],
  },
  {
    id: 'funding',
    title: 'Grant funding',
    description: 'Support for the science.',
    placeholder: 'Grants & awards',
    items: [],
  },
];
