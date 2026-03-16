import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'

// Próximas secciones:
// import AboutSection from './components/AboutSection'
// import AboutSection from './components/AboutSection'
// import SkillsSection from './components/SkillsSection'
// import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />

        <ProjectsSection />

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <p style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
            AboutSection — próximamente
          </p>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <p style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
            SkillsSection — próximamente
          </p>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <p style={{ color: 'var(--color-muted)', fontFamily: 'DM Sans, sans-serif' }}>
            ContactSection — próximamente
          </p>
        </section>
      </main>
    </>
  )
}

export default App