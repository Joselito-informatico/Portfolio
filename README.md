# José Le Blanc — Portfolio

Personal portfolio built with React + Vite + Tailwind v4. Live at **[joseleblanc.dev](https://portfolio-three-mauve-g2pw10q0al.vercel.app/)**.

## Stack

| Layer      | Tech                                  |
| ---------- | ------------------------------------- |
| UI         | React 18.3 + Vite 5.4                 |
| Styles     | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion 11                      |
| Icons      | Lucide React                          |
| Routing    | React Router DOM 6                    |
| Deploy     | Vercel (auto-deploy on `main`)        |

## Project structure

```
src/
├── components/
│   ├── NavBar.jsx           # Fixed nav with scroll detection + mobile menu
│   ├── HeroSection.jsx      # Typewriter effect, dot-grid background
│   ├── ProjectsSection.jsx  # Featured + 2-col grid layout
│   ├── ProjectCard.jsx      # Featured and normal card variants
│   ├── AboutSection.jsx     # Photo, bio, credentials, availability
│   ├── SkillsSection.jsx    # Grouped tech chips
│   └── ContactSection.jsx   # Email copy-to-clipboard, social links, footer
├── hooks/
│   └── useTypewriter.js     # Cycle through words with write/delete effect
├── constants/
│   ├── projects.js          # Static project data
│   └── skills.js            # Static skills grouped by category
├── App.jsx
├── main.jsx
└── index.css                # CSS variables + @import "tailwindcss"
```

## Local setup

```bash
git clone https://github.com/Joselito-informatico/portfolio.git
cd portfolio
npm install
npm run dev
```

Requires Node >= 18.

## Branch strategy

```
main      → production (auto-deploy to Vercel)
develop   → active development
feat/*    → feature branches
```

## Deploy

Every push to `main` triggers an automatic Vercel deployment.

To publish changes from `develop`:

```bash
git checkout main && git merge develop && git push origin main && git checkout develop
```

---

Built by [José Le Blanc](https://www.linkedin.com/in/j-leblanc-ing/) — Ingeniero Civil en Computación e Informática, Universidad de Tarapacá 2025.
