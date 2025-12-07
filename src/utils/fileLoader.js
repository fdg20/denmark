// File loader utility for VS Code portfolio

const aboutContent = `# About Me

I'm **Denmark L. Dano**, a seasoned web developer with 9 years of experience specializing in WordPress and Shopify development. My journey spans 4 years with WordPress and 5 years with Shopify, complemented by a strong background as a Desktop and System Support Engineer.

## My Story

Based in **Negros Occidental, Philippines**, I've dedicated my career to creating exceptional digital solutions that drive business growth. My expertise includes HTML, CSS, C++, JavaScript, JSON, and Liquid templating, with particular strength in network, desktop, and system analysis.

I'm fully committed to meeting project deadlines and can dedicate full-time efforts when needed. My main strengths lie in providing virtual support and delivering high-quality solutions that exceed client expectations.

## Professional Journey

### Frontend / Backend Web Developer
**2016 - Present** | OnlineJobs.ph (Freelance)

- Successfully developed and launched numerous websites for diverse clients
- Specialized in WordPress and Shopify custom theme development
- Developed custom software solutions using C++, JavaScript, and other languages
- Managed multiple freelance projects with tight deadlines
- Provided expert guidance and delivered high-quality solutions

### Senior Developer/Support - Section Store Shopify App
**August 2024 - December 2025** | Section Store

- One of the senior developers/support for Section Store Shopify app with 1,000+ active merchants
- Handled support requests and troubleshooting for 1,000+ merchants
- Developed and maintained app features for Shopify store customization
- Provided technical support and resolved complex merchant issues
- Contributed to development team and app updates and improvements

### Senior WordPress Developer / Software Developer
**June 2023 - January 2024** | Stratedia

- Developed and maintained websites using WordPress with full project lifecycles
- Specialized in responsive, user-friendly websites with performance optimization
- Developed desktop applications using PHP and Laravel 9
- Engaged in troubleshooting, debugging, and code optimization

## Key Achievements

- **100+** stores managed
- **9+** years of experience
- **1,000+** merchants supported
- **5 years** Shopify expertise
- **4 years** WordPress expertise

## Location

📍 Negros Occidental, Philippines  
🌍 Available for remote work worldwide`

const skillsContent = `// Skills & Expertise - Denmark L. Dano
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
];`

const contactContent = `CONTACT INFORMATION
===================

Email: kramdano@gmail.com
Phone: +639096161671
Location: Negros Occidental, Philippines
Available: Remote work worldwide

SOCIAL LINKS
============

GitHub: https://github.com/fdg20
Portfolio: https://fdg20.github.io/denmark/

RESPONSE TIME
=============

I typically respond to all inquiries within 24 hours 
during business days.

SERVICES OFFERED
================

✓ Shopify Store Development
✓ Performance Optimization
✓ Mobile Optimization
✓ Custom Solutions
✓ Conversion Optimization
✓ Maintenance & Support

PROJECT TIMELINE
================

Most Shopify projects take 2-6 weeks depending on complexity.
I provide detailed timelines during our initial consultation.

WHAT'S INCLUDED
===============

- Development
- Testing
- Deployment
- Documentation
- 30 days of post-launch support`

import farmviewProject from '../data/portfolio/projects/farmview-market.json'
import swHackerProject from '../data/portfolio/projects/sw-hacker.json'
import flavorFettleProject from '../data/portfolio/projects/flavor-fettle.json'
import ruggableProject from '../data/portfolio/projects/ruggable.json'
import allbirdsProject from '../data/portfolio/projects/allbirds.json'
import earthBeerProject from '../data/portfolio/projects/earth-beer.json'
import briniWinesProject from '../data/portfolio/projects/brini-wines.json'
import bossOutdoorProject from '../data/portfolio/projects/boss-outdoor.json'
import kendamilProject from '../data/portfolio/projects/kendamil.json'

export const fileStructure = [
  {
    type: 'folder',
    name: 'portfolio',
    path: 'portfolio',
    children: [
      {
        type: 'file',
        name: 'about.md',
        path: 'portfolio/about.md'
      },
      {
        type: 'file',
        name: 'skills.ts',
        path: 'portfolio/skills.ts'
      },
      {
        type: 'file',
        name: 'contact.txt',
        path: 'portfolio/contact.txt'
      },
      {
        type: 'folder',
        name: 'projects',
        path: 'portfolio/projects',
        children: [
          {
            type: 'file',
            name: 'farmview-market.json',
            path: 'portfolio/projects/farmview-market.json'
          },
          {
            type: 'file',
            name: 'sw-hacker.json',
            path: 'portfolio/projects/sw-hacker.json'
          },
          {
            type: 'file',
            name: 'flavor-fettle.json',
            path: 'portfolio/projects/flavor-fettle.json'
          },
          {
            type: 'file',
            name: 'ruggable.json',
            path: 'portfolio/projects/ruggable.json'
          },
          {
            type: 'file',
            name: 'allbirds.json',
            path: 'portfolio/projects/allbirds.json'
          },
          {
            type: 'file',
            name: 'earth-beer.json',
            path: 'portfolio/projects/earth-beer.json'
          },
          {
            type: 'file',
            name: 'brini-wines.json',
            path: 'portfolio/projects/brini-wines.json'
          },
          {
            type: 'file',
            name: 'boss-outdoor.json',
            path: 'portfolio/projects/boss-outdoor.json'
          },
          {
            type: 'file',
            name: 'kendamil.json',
            path: 'portfolio/projects/kendamil.json'
          }
        ]
      }
    ]
  }
]

const fileContents = {
  'portfolio/about.md': aboutContent,
  'portfolio/skills.ts': skillsContent,
  'portfolio/contact.txt': contactContent,
  'portfolio/projects/farmview-market.json': JSON.stringify(farmviewProject, null, 2),
  'portfolio/projects/sw-hacker.json': JSON.stringify(swHackerProject, null, 2),
  'portfolio/projects/flavor-fettle.json': JSON.stringify(flavorFettleProject, null, 2),
  'portfolio/projects/ruggable.json': JSON.stringify(ruggableProject, null, 2),
  'portfolio/projects/allbirds.json': JSON.stringify(allbirdsProject, null, 2),
  'portfolio/projects/earth-beer.json': JSON.stringify(earthBeerProject, null, 2),
  'portfolio/projects/brini-wines.json': JSON.stringify(briniWinesProject, null, 2),
  'portfolio/projects/boss-outdoor.json': JSON.stringify(bossOutdoorProject, null, 2),
  'portfolio/projects/kendamil.json': JSON.stringify(kendamilProject, null, 2)
}

export const getFileContent = (filePath) => {
  return fileContents[filePath] || ''
}

export const getFileName = (filePath) => {
  return filePath.split('/').pop() || filePath
}

