// Import interfaces from main content file
import type { SiteContent } from "@/content/siteContent";

export const softwareDeveloperContent: SiteContent = {
  profession: "Desarrollador de Software",
  fullName: "Tu Nombre",
  headline: "Desarrollador Full-Stack & Ingeniero de Software",
  tagline: "Construyendo aplicaciones web escalables con tecnologías modernas y código limpio",
  
  techStack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "JavaScript", "HTML"],
    backend: ["C#", ".NET", ".NET Core", "ASP.NET MVC", "Node.js", "Python", "JWT", "OAuth 2.0"],
    database: ["SQL Server", "PostgreSQL", "Oracle", "MongoDB", "Redis"],
    architecture: ["Clean Architecture", "SOLID", "CQRS", "Repository", "Strategy", "Observer", "MVC/MVVM", "DTOs"],
    devops: ["Docker", "CI/CD", "Azure Pipelines", "IIS", "Git", "TFS", "AWS", "Azure"],
    quality: ["Clean Code", "Pruebas Unitarias", "xUnit", "MSTest", "Mocks"],
    mobile: ["React Native", "React Mobile"],
    ai: ["Generative AI", "Python IA", "LLMs", "Agentes Inteligentes"],
    methodologies: ["Scrum", "Agile"]
  },
  
  about: {
    title: "Sobre Mí",
    description: "Soy un desarrollador de software apasionado con experiencia en construir aplicaciones robustas y escalables. Combino fuertes habilidades técnicas con un enfoque centrado en el usuario para crear soluciones que resuelven problemas del mundo real.",
    experience: "5+ años de experiencia profesional desarrollando aplicaciones web, APIs RESTful y soluciones basadas en la nube para startups y empresas establecidas.",
    credentials: [
      "Licenciatura en Ciencias de la Computación",
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Certification",
      "MongoDB Certified Developer"
    ]
  },
  
  experience: [
    {
      id: "exp-1",
      title: "Desarrollador Full-Stack Senior",
      company: "Tech Innovations Inc.",
      period: "2022 - Presente",
      description: "Lideré el desarrollo de plataforma SaaS empresarial sirviendo a 10K+ usuarios. Arquitecté infraestructura de microservicios, implementé pipelines CI/CD y orienté a desarrolladores juniors.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      skills: ["Arquitectura de Sistema", "Liderazgo de Equipo", "Desarrollo Ágil", "Migración a la Nube"]
    },
    {
      id: "exp-2",
      title: "Desarrollador Full-Stack", 
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Desarrollé y mantuve múltiples proyectos de clientes incluyendo plataformas e-commerce y dashboards de análisis de datos. Optimicé el rendimiento de la aplicación en 40%.",
      technologies: ["Next.js", "Python", "MongoDB", "Redis"],
      skills: ["Optimización de Rendimiento", "Diseño de Base de Datos", "Desarrollo de API", "Comunicación con Cliente"]
    },
    {
      id: "exp-3",
      title: "Desarrollador Junior",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Construí APIs RESTful y aplicaciones web responsivas para varios clientes de startup. Implementé sistemas de autenticación e integraciones de pago.",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      skills: ["Diseño de API", "Autenticación", "Integración de Pago", "Control de Versión"]
    }
  ],
  
  services: [
    {
      id: "full-stack-development",
      title: "Desarrollo Web Full-Stack",
      description: "Desarrollo de aplicaciones web de extremo a extremo, desde la interfaz de usuario hasta la arquitectura de backend e implementación."
    },
    {
      id: "api-development",
      title: "Desarrollo & Integración de APIs",
      description: "Diseño, desarrollo e integración de APIs RESTful para aplicaciones escalables."
    },
    {
      id: "cloud-architecture",
      title: "Arquitectura de Nube & DevOps",
      description: "Diseño de infraestructura de nube, automatización de implementación y arquitectura de sistema escalable."
    },
    {
      id: "performance-optimization",
      title: "Optimización de Rendimiento",
      description: "Análisis de rendimiento de aplicación, optimización y monitoreo para mejor experiencia del usuario."
    }
  ],
  
  articles: [
    {
      id: "microservices-guide",
      title: "Construyendo Microservicios Escalables: Una Guía Completa",
      excerpt: "Aprende cómo diseñar, implementar e implementar arquitectura de microservicios para aplicaciones modernas.",
      category: "Arquitectura",
      readTime: "12 min de lectura",
      date: "Marzo 2024",
      repositoryUrl: "https://github.com/tunombre/microservices-guide",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS"]
    },
    {
      id: "react-performance",
      title: "Técnicas de Optimización de Rendimiento en React",
      excerpt: "Estrategias avanzadas para optimizar aplicaciones React para mejor experiencia del usuario y Core Web Vitals.",
      category: "Frontend",
      readTime: "8 min de lectura",
      date: "Febrero 2024",
      repositoryUrl: "https://github.com/tunombre/react-performance",
      technologies: ["React", "Next.js", "TypeScript", "Web Vitals"]
    },
    {
      id: "cloud-best-practices",
      title: "Mejores Prácticas de Implementación en Nube para 2024",
      excerpt: "Enfoques modernos para implementación en nube, monitoreo y optimización de costos para aplicaciones de producción.",
      category: "DevOps",
      readTime: "10 min de lectura",
      date: "Enero 2024",
      repositoryUrl: "https://github.com/tunombre/cloud-deployment",
      demoUrl: "https://cloud-demo.tunombre.dev",
      technologies: ["AWS", "Terraform", "GitHub Actions", "Docker"]
    }
  ],
  
  testimonials: [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      content: "Desarrollador excepcional que consistentemente entrega código de alta calidad y soluciones innovadoras. Lideró nuestra reescritura de plataforma que aumentó el rendimiento en 300%.",
      rating: 5
    },
    {
      id: "testimonial-2",
      name: "Michael Chen",
      role: "Desarrollador Senior",
      company: "Digital Solutions",
      content: "Habilidades excepcionales de resolución de problemas y capacidad de arquitectar sistemas complejos. Excelente jugador de equipo que eleva a todos al rededor.",
      rating: 5
    }
  ],
  
  contact: {
    email: "tu.email@ejemplo.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/tuperfil",
    github: "https://github.com/tunombre",
    calendar: "https://calendly.com/tunombre"
  },
  
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/tunombre"
    },
    {
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/tuperfil"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/tunombre"
    }
  ],
  
  cta: {
    primary: "Ver Mis Proyectos",
    secondary: "Descargar Currículo"
  },
  
  seo: {
    title: "Tu Nombre - Desarrollador de Software | Ingeniero Full-Stack | Portafolio",
    description: "Desarrollador de software especializado en React, Node.js y tecnologías de nube. Construyendo aplicaciones web escalables y APIs.",
    keywords: ["desarrollador de software", "desarrollador full-stack", "desarrollador react", "node.js", "desarrollo web", "desarrollo de api", "arquitectura de nube", "typescript"]
  }
};
