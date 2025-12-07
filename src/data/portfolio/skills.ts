// Skills & Expertise - Denmark L. Dano
// Comprehensive technical skills and professional expertise

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  years: number;
  description: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const coreSkills: Skill[] = [
  {
    name: 'Shopify Development',
    level: 'Expert',
    years: 5,
    description: 'Custom theme development, Liquid templating, API integration, store migration, performance optimization'
  },
  {
    name: 'Section Store App Development',
    level: 'Expert',
    years: 2,
    description: 'Senior developer/support for Shopify app with 1,000+ active merchants, technical troubleshooting, app feature development'
  },
  {
    name: 'WordPress Development',
    level: 'Expert',
    years: 4,
    description: 'Custom theme development, plugin development, PHP & MySQL integration, responsive design'
  },
  {
    name: 'Performance Optimization',
    level: 'Expert',
    years: 5,
    description: 'Page speed optimization, SEO best practices, Core Web Vitals, conversion rate optimization'
  },
  {
    name: 'Custom Solutions',
    level: 'Advanced',
    years: 5,
    description: 'Third-party API integrations, custom app development, database design, automation workflows'
  }
];

export const additionalSkills: SkillCategory[] = [
  {
    category: 'Design & UX',
    skills: [
      { name: 'UI/UX Design', level: 'Advanced', years: 4, description: '' },
      { name: 'Figma', level: 'Advanced', years: 3, description: '' },
      { name: 'Adobe Creative Suite', level: 'Intermediate', years: 2, description: '' },
      { name: 'Wireframing', level: 'Advanced', years: 4, description: '' },
      { name: 'Prototyping', level: 'Advanced', years: 3, description: '' }
    ]
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 'Advanced', years: 3, description: '' },
      { name: 'PHP', level: 'Expert', years: 4, description: '' },
      { name: 'MySQL', level: 'Advanced', years: 4, description: '' },
      { name: 'MongoDB', level: 'Intermediate', years: 2, description: '' },
      { name: 'REST APIs', level: 'Expert', years: 5, description: '' }
    ]
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', years: 5, description: '' },
      { name: 'VS Code', level: 'Expert', years: 5, description: '' },
      { name: 'Shopify CLI', level: 'Expert', years: 4, description: '' },
      { name: 'Webpack', level: 'Advanced', years: 3, description: '' },
      { name: 'Docker', level: 'Intermediate', years: 2, description: '' }
    ]
  },
  {
    category: 'E-commerce Platforms',
    skills: [
      { name: 'Shopify Plus', level: 'Expert', years: 5, description: '' },
      { name: 'WooCommerce', level: 'Advanced', years: 3, description: '' },
      { name: 'Magento', level: 'Intermediate', years: 2, description: '' },
      { name: 'BigCommerce', level: 'Intermediate', years: 2, description: '' },
      { name: 'Shopify Markets', level: 'Expert', years: 4, description: '' }
    ]
  }
];

export const technologies: string[] = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Liquid',
  'PHP', 'Node.js', 'React', 'Vue.js', 'Laravel',
  'MySQL', 'MongoDB', 'REST APIs', 'GraphQL',
  'Shopify', 'WordPress', 'WooCommerce',
  'Git', 'Docker', 'Webpack', 'Vite'
];

export const certifications = [
  {
    name: 'Shopify Partner Certification',
    year: 2023,
    description: 'Certified Shopify Partner with proven track record'
  },
  {
    name: 'Performance Optimization Specialist',
    year: 2023,
    description: 'Expert in Core Web Vitals and page speed optimization'
  },
  {
    name: 'Conversion Rate Optimization',
    year: 2022,
    description: 'Certified in CRO strategies and A/B testing'
  }
];

