export const PROJECTS = [
  {
    id: 1,
    title: 'ResumeAI Studio',
    tagline: 'Generador de CVs optimizados para ATS',
    description:
      'Editor en tiempo real con esquemas JSON personalizados y renderizado dinámico de componentes. Optimización automática para rastreadores de candidatos (ATS).',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Joselito-informatico/resumai-studio',
    live: 'https://cv-creator-one-sigma.vercel.app',
  },
  {
    id: 2,
    title: 'DnD App',
    tagline: 'PWA offline-first para D&D 5e',
    description:
      'Motor de reglas SRD 5.2 completo, gestión de inventario y compendio híbrido con Open5e API. Dados 3D integrados. Arquitectura monorepo con NPM Workspaces.',
    tech: ['React', 'Vite', 'PWA', 'NPM Workspaces'],
    github: 'https://github.com/Joselito-informatico/DnD-app',
    live: 'https://dnd-app-player.vercel.app',
  },
  {
    id: 3,
    title: 'Sistema de Tickets',
    tagline: 'Plataforma MERN de gestión de incidencias',
    description:
      'Desarrollado en práctica profesional (TI-Impulso). Chatbot inteligente integrado, esquemas NoSQL optimizados y dashboard de métricas operativas en tiempo real.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Joselito-informatico/SistemaTickets',
    live: null,
  },
  {
    id: 4,
    title: 'MTG Marketplace',
    tagline: 'Marketplace de singles Magic: The Gathering',
    description:
      'Plataforma de compraventa de cartas individuales con integración a Scryfall API para datos y precios en tiempo real. Carrito, historial de transacciones y panel de vendedor.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Scryfall API'],
    github: null,
    live: null,
    wip: true,
  },
]