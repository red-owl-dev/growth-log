// Import interfaces from main content file
import type { SiteContent } from "@/content/siteContent";

export const softwareDeveloperContent: SiteContent = {
  profession: "Desenvolvedor de Software",
  fullName: "Seu Nome",
  headline: "Desenvolvedor Full-Stack & Engenheiro de Software",
  tagline: "Construindo aplicações web escaláveis com tecnologias modernas e código limpo",
  
  techStack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "JavaScript", "HTML"],
    backend: ["C#", ".NET", ".NET Core", "ASP.NET MVC", "Node.js", "Python", "JWT", "OAuth 2.0"],
    database: ["SQL Server", "PostgreSQL", "Oracle", "MongoDB", "Redis"],
    architecture: ["Clean Architecture", "SOLID", "CQRS", "Repository", "Strategy", "Observer", "MVC/MVVM", "DTOs"],
    devops: ["Docker", "CI/CD", "Azure Pipelines", "IIS", "Git", "TFS", "AWS", "Azure"],
    quality: ["Clean Code", "Testes Unitários", "xUnit", "MSTest", "Mocks"],
    mobile: ["React Native", "React Mobile"],
    ai: ["Generative AI", "Python IA", "LLMs", "Agentes Inteligentes"],
    methodologies: ["Scrum", "Agile"]
  },
  
  about: {
    title: "Sobre Mim",
    description: "Sou um desenvolvedor de software apaixonado com expertise em construir aplicações robustas e escaláveis. Combino fortes habilidades técnicas com uma abordagem centrada no usuário para criar soluções que resolvem problemas do mundo real.",
    experience: "5+ anos de experiência profissional desenvolvendo aplicações web, APIs RESTful e soluções baseadas em nuvem para startups e empresas estabelecidas.",
    credentials: [
      "Bacharelado em Sistemas de Informação",
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Certification",
      "MongoDB Certified Developer"
    ]
  },
  
  experience: [
    {
      id: "exp-1",
      title: "Desenvolvedor Full-Stack Sênior",
      company: "Tech Innovations Inc.",
      period: "2022 - Presente",
      description: "Liderei o desenvolvimento de plataforma SaaS empresarial servindo 10K+ usuários. Arquitetei infraestrutura de microsserviços, implementei pipelines CI/CD e orientei desenvolvedores juniores.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      skills: ["Arquitetura de Sistema", "Liderança de Equipe", "Desenvolvimento Ágil", "Migração para Nuvem"]
    },
    {
      id: "exp-2",
      title: "Desenvolvedor Full-Stack", 
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Desenvolvi e mantive múltiplos projetos de clientes incluindo plataformas e-commerce e dashboards de análise de dados. Otimizei o desempenho da aplicação em 40%.",
      technologies: ["Next.js", "Python", "MongoDB", "Redis"],
      skills: ["Otimização de Desempenho", "Design de Banco de Dados", "Desenvolvimento de API", "Comunicação com Cliente"]
    },
    {
      id: "exp-3",
      title: "Desenvolvedor Júnior",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Construí APIs RESTful e aplicações web responsivas para vários clientes de startup. Implementei sistemas de autenticação e integrações de pagamento.",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      skills: ["Design de API", "Autenticação", "Integração de Pagamento", "Controle de Versão"]
    }
  ],
  
  services: [
    {
      id: "full-stack-development",
      title: "Desenvolvimento Web Full-Stack",
      description: "Desenvolvimento de aplicações web de ponta a ponta, da interface do usuário à arquitetura de backend e implantação."
    },
    {
      id: "api-development",
      title: "Desenvolvimento & Integração de APIs",
      description: "Design, desenvolvimento e integração de APIs RESTful para aplicações escaláveis."
    },
    {
      id: "cloud-architecture",
      title: "Arquitetura de Nuvem & DevOps",
      description: "Design de infraestrutura de nuvem, automação de implantação e arquitetura de sistema escalável."
    },
    {
      id: "performance-optimization",
      title: "Otimização de Desempenho",
      description: "Análise de desempenho de aplicação, otimização e monitoramento para melhor experiência do usuário."
    }
  ],
  
  articles: [
    {
      id: "microservices-guide",
      title: "Construindo Microsserviços Escaláveis: Um Guia Completo",
      excerpt: "Aprenda como projetar, implementar e implantar arquitetura de microsserviços para aplicações modernas.",
      category: "Arquitetura",
      readTime: "12 min de leitura",
      date: "Março 2024",
      repositoryUrl: "https://github.com/seunome/microservices-guide",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS"]
    },
    {
      id: "react-performance",
      title: "Técnicas de Otimização de Performance em React",
      excerpt: "Estratégias avançadas para otimizar aplicações React para melhor experiência do usuário e Core Web Vitals.",
      category: "Frontend",
      readTime: "8 min de leitura",
      date: "Fevereiro 2024",
      repositoryUrl: "https://github.com/seunome/react-performance",
      technologies: ["React", "Next.js", "TypeScript", "Web Vitals"]
    },
    {
      id: "cloud-best-practices",
      title: "Melhores Práticas de Implantação em Nuvem para 2024",
      excerpt: "Abordagens modernas para implantação em nuvem, monitoramento e otimização de custos para aplicações de produção.",
      category: "DevOps",
      readTime: "10 min de leitura",
      date: "Janeiro 2024",
      repositoryUrl: "https://github.com/seunome/cloud-deployment",
      demoUrl: "https://cloud-demo.seunome.dev",
      technologies: ["AWS", "Terraform", "GitHub Actions", "Docker"]
    }
  ],
  
  testimonials: [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      content: "Desenvolvedor excepcional que consistentemente entrega código de alta qualidade e soluções inovadoras. Liderou nossa reescrita de plataforma que aumentou o desempenho em 300%.",
      rating: 5
    },
    {
      id: "testimonial-2",
      name: "Michael Chen",
      role: "Desenvolvedor Sênior",
      company: "Digital Solutions",
      content: "Habilidades excepcionais de resolução de problemas e capacidade de arquitetar sistemas complexos. Ótimo jogador de equipe que eleva todos ao redor.",
      rating: 5
    }
  ],
  
  contact: {
    email: "seu.email@exemplo.com",
    phone: "+55 (11) 9876-5432",
    address: "São Paulo, SP, Brasil",
    linkedin: "https://linkedin.com/in/seuperfil",
    github: "https://github.com/seunome",
    calendar: "https://calendly.com/seunome"
  },
  
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/seunome"
    },
    {
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/seuperfil"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/seunome"
    }
  ],
  
  cta: {
    primary: "Ver Meus Projetos",
    secondary: "Baixar Currículo"
  },
  
  seo: {
    title: "Seu Nome - Desenvolvedor de Software | Engenheiro Full-Stack | Portfólio",
    description: "Desenvolvedor de software especializado em React, Node.js e tecnologias de nuvem. Construindo aplicações web escaláveis e APIs.",
    keywords: ["desenvolvedor de software", "desenvolvedor full-stack", "desenvolvedor react", "node.js", "desenvolvimento web", "desenvolvimento de api", "arquitetura de nuvem", "typescript"]
  }
};
