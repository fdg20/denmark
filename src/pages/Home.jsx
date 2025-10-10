import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import SkillsPreview from '../components/SkillsPreview'
import ProjectsPreview from '../components/ProjectsPreview'
import ContactPreview from '../components/ContactPreview'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <ContactPreview />
    </div>
  )
}

export default Home
