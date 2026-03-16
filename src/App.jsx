import CustomCursor    from './components/CustomCursor'
import NavBar          from './components/NavBar'
import HeroSection     from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection    from './components/AboutSection'
import SkillsSection   from './components/SkillsSection'
import ContactSection  from './components/ContactSection'

function App() {
  return (
    <>
      <CustomCursor />
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App