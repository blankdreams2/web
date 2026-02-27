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
    role: 'Software Engineer',
    company: 'New Harbor',
    duration: 'Sep 2024 - May 2025',
    location: 'Remote',
    description:
      'Building a cybersecurity platform. Full-stack work with modern Vue ecosystem.',
    logo: '/experience/newharbor_logo.jpg',
    technologies: ['TypeScript', 'Nuxt', 'Vue', 'Supabase', 'UX'],
  },
  {
    role: 'Lead Engineer',
    company: 'Cyber Clinic',
    duration: 'Feb 2024 - Dec 2025',
    location: 'Las Vegas, NV',
    description:
      'Led software development initiatives. Using PHP, Bootstrap, project management, etc.',
    logo: '/experience/cyberclinic.png',
    technologies: ['PHP', 'Bootstrap', 'Linux', 'Cloudflare'],
  },
  {
    role: 'Software Engineer I',
    company: 'DecentRE Labs',
    duration: 'Jan 2023 - Oct 2024',
    location: 'Remote',
    description:
      'End-to-end product engineering, UX/UI, API integration. Building and maintaining production systems.',
    logo: '/experience/decentrepx.png',
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
      'Worked on an online auction platform for residential real estate.',
    logo: '/experience/decentrepx.png',
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
    role: 'Teaching Assistant',
    company: 'University of Nevada, Las Vegas',
    duration: '2025',
    location: 'Las Vegas, NV',
    description:
      'Assisted with object-oriented programming courses. C++, Linux, Python.',
    logo: '/experience/unlv.jpg',
    technologies: ['C++', 'Python', 'Java'],
  },
  {
    role: 'Tutor',
    company: 'University of Nevada, Las Vegas',
    duration: '2025',
    location: 'Las Vegas, NV',
    description: 'Helped faculty and students with computer science topics.',
    logo: '/experience/unlv.jpg',
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
    company: 'IIS Lab, University of Nevada, Las Vegas',
    duration: '2025',
    location: 'Las Vegas, NV',
    description:
      'Helped with research on deep learning and generative AI in cybersecurity.',
    logo: '/experience/iislab.png',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Keras'],
  },
]
