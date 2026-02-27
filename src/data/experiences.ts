export type Experience = {
  role: string
  company: string
  duration: string
  location: string
  description: string
  logo?: string
  technologies?: string[]
}

// from linkedin - you can fix/edit these
export const EXPERIENCES: Experience[] = [
  {
    role: 'Head of Software Development Committee',
    company: 'Cyber Clinic',
    duration: 'Feb 2024 - Dec 2025',
    location: 'Las Vegas, NV',
    description:
      'Led software development initiatives. PHP, Bootstrap, project management.',
    technologies: ['PHP', 'Bootstrap', 'Linux', 'Cloudflare'],
  },
  {
    role: 'Software Engineer',
    company: 'New Harbor',
    duration: 'Sep 2024 - May 2025',
    location: 'Remote',
    description:
      'Building a cybersecurity platform. Full-stack work with modern Vue ecosystem.',
    technologies: ['TypeScript', 'Nuxt', 'Vue', 'Supabase', 'UX'],
  },
  {
    role: 'Software Engineer I',
    company: 'DecentRE Labs',
    duration: 'Jan 2023 - Oct 2024',
    location: 'Remote',
    description:
      'Full-stack development, user experience, API integration. Building and maintaining production systems.',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Express',
      'MongoDB',
      'Docker',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'DecentRE Labs',
    duration: 'Dec 2022 - Jun 2023',
    location: 'Hybrid',
    description:
      'Got hands-on with full-stack development, Zapier integrations, and real-world dev processes.',
    technologies: ['TypeScript', 'React', 'Zapier', 'Firebase', 'Blockchain'],
  },
  // {
  //   role: 'President',
  //   company: 'UNLV Association for Computing Machinery',
  //   duration: '2025',
  //   location: 'Las Vegas, NV',
  //   description:
  //     'Leadership, project management, campus outreach. Leading the ACM chapter.',
  // },
  {
    role: 'CS Teaching Assistant',
    company: 'University of Nevada, Las Vegas',
    duration: '2025',
    location: 'Las Vegas, NV',
    description:
      'Teaching assistant for object-oriented programming courses. C++, Linux, Python.',
    technologies: ['C++', 'Python', 'Java'],
  },
  {
    role: 'Computer Science Tutor',
    company: 'University of Nevada, Las Vegas',
    duration: '2025',
    location: 'Las Vegas, NV',
    description: 'Support falculty and students with computer science topics.',
    technologies: [
      'C/C++',
      'Python',
      'Java',
      'Rust',
      'JavaScript',
      'HTML',
      'CSS',
      'Linux',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'University of Nevada, Las Vegas',
    duration: '2025',
    location: 'Las Vegas, NV',
    description: 'Assist in research on deep learning & cybersecurity.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Keras'],
  },
]
