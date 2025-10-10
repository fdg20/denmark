# Shopify Developer Portfolio

A modern, animated portfolio website built with React and Vite, showcasing Shopify development skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Shopify Focus**: Specialized content highlighting Shopify development expertise
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Display**: Comprehensive skills section with progress indicators

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with modern features

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navigation.jsx    # Main navigation component
│   ├── Hero.jsx         # Hero section component
│   ├── AboutPreview.jsx # About section preview
│   ├── SkillsPreview.jsx# Skills section preview
│   ├── ProjectsPreview.jsx # Projects section preview
│   └── ContactPreview.jsx # Contact section preview
├── pages/               # Page components
│   ├── Home.jsx         # Home page with previews
│   ├── About.jsx        # Detailed about page
│   ├── Skills.jsx       # Detailed skills page
│   ├── Projects.jsx     # Detailed projects page
│   └── Contact.jsx      # Contact page with form
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Contact details**: Update email addresses and social links in:
  - `src/components/Hero.jsx`
  - `src/components/ContactPreview.jsx`
  - `src/pages/Contact.jsx`

- **About content**: Customize your story and experience in:
  - `src/components/AboutPreview.jsx`
  - `src/pages/About.jsx`

- **Skills**: Update your skills and expertise in:
  - `src/components/SkillsPreview.jsx`
  - `src/pages/Skills.jsx`

- **Projects**: Add your actual projects in:
  - `src/components/ProjectsPreview.jsx`
  - `src/pages/Projects.jsx`

### Styling

- **Colors**: Update the color scheme by modifying CSS custom properties
- **Fonts**: Change fonts by updating the font-family in CSS files
- **Animations**: Customize animations in Framer Motion components

### Images

Replace placeholder content with your actual:
- Profile photos
- Project screenshots
- Company logos
- Certifications

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized images and assets

## 🎭 Animations

The portfolio uses Framer Motion for:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations
- Staggered content reveals

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Happy coding! 🎉**
