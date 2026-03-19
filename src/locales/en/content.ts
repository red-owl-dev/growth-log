// Import interfaces from main content file
import type { SiteContent } from "@/content/siteContent";

export const softwareDeveloperContent: SiteContent = {
  profession: "Software Developer",
  fullName: "Your Name",
  headline: "Full-Stack Developer & Software Engineer",
  tagline: "Building scalable web applications with modern technologies and clean code",
  
  techStack: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "JavaScript", "HTML"],
    backend: ["C#", ".NET", ".NET Core", "ASP.NET MVC", "Node.js", "Python", "JWT", "OAuth 2.0"],
    database: ["SQL Server", "PostgreSQL", "Oracle", "MongoDB", "Redis"],
    architecture: ["Clean Architecture", "SOLID", "CQRS", "Repository", "Strategy", "Observer", "MVC/MVVM", "DTOs"],
    devops: ["Docker", "CI/CD", "Azure Pipelines", "IIS", "Git", "TFS", "AWS", "Azure"],
    quality: ["Clean Code", "Unit Testing", "xUnit", "MSTest", "Mocks"],
    mobile: ["React Native", "React Mobile"],
    ai: ["Generative AI", "Python AI", "LLMs", "Intelligent Agents"],
    methodologies: ["Scrum", "Agile"]
  },
  
  about: {
    title: "About Me",
    description: "I'm a passionate software developer with expertise in building robust, scalable web applications. I combine strong technical skills with a user-centered approach to create solutions that solve real-world problems.",
    experience: "5+ years of professional experience developing web applications, RESTful APIs, and cloud-based solutions for startups and established companies.",
    credentials: [
      "Bachelor of Science in Computer Science",
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Certification",
      "MongoDB Certified Developer"
    ]
  },
  
  experience: [
    {
      id: "exp-1",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of enterprise SaaS platform serving 10K+ users. Architected microservices infrastructure, implemented CI/CD pipelines, and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      skills: ["System Architecture", "Team Leadership", "Agile Development", "Cloud Migration"]
    },
    {
      id: "exp-2",
      title: "Full-Stack Developer", 
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects including e-commerce platforms and data analytics dashboards. Optimized application performance by 40%.",
      technologies: ["Next.js", "Python", "MongoDB", "Redis"],
      skills: ["Performance Optimization", "Database Design", "API Development", "Client Communication"]
    },
    {
      id: "exp-3",
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Built RESTful APIs and responsive web applications for various startup clients. Implemented authentication systems and payment integrations.",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      skills: ["API Design", "Authentication", "Payment Integration", "Version Control"]
    }
  ],
  
  services: [
    {
      id: "full-stack-development",
      title: "Full-Stack Web Development",
      description: "End-to-end web application development from frontend UI to backend architecture and deployment."
    },
    {
      id: "api-development",
      title: "API Development & Integration",
      description: "RESTful API design, development, and third-party service integration for scalable applications."
    },
    {
      id: "cloud-architecture",
      title: "Cloud Architecture & DevOps",
      description: "Cloud infrastructure design, deployment automation, and scalable system architecture."
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      description: "Application performance analysis, optimization, and monitoring for improved user experience."
    }
  ],
  
  articles: [
    {
      id: "microservices-guide",
      title: "Building Scalable Microservices: A Complete Guide",
      excerpt: "Learn how to design, implement, and deploy microservices architecture for modern applications.",
      category: "Architecture",
      readTime: "12 min read",
      date: "March 2024",
      repositoryUrl: "https://github.com/yourname/microservices-guide",
      technologies: ["Node.js", "Docker", "Kubernetes", "AWS"]
    },
    {
      id: "react-performance",
      title: "React Performance Optimization Techniques",
      excerpt: "Advanced strategies for optimizing React applications for better user experience and Core Web Vitals.",
      category: "Frontend",
      readTime: "8 min read",
      date: "February 2024",
      repositoryUrl: "https://github.com/yourname/react-performance",
      technologies: ["React", "Next.js", "TypeScript", "Web Vitals"]
    },
    {
      id: "cloud-best-practices",
      title: "Cloud Deployment Best Practices for 2024",
      excerpt: "Modern approaches to cloud deployment, monitoring, and cost optimization for production applications.",
      category: "DevOps",
      readTime: "10 min read",
      date: "January 2024",
      repositoryUrl: "https://github.com/yourname/cloud-deployment",
      demoUrl: "https://cloud-demo.yourname.dev",
      technologies: ["AWS", "Terraform", "GitHub Actions", "Docker"]
    }
  ],
  
  testimonials: [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      content: "Outstanding developer who consistently delivers high-quality code and innovative solutions. Led our platform rewrite that increased performance by 300%.",
      rating: 5
    },
    {
      id: "testimonial-2",
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Digital Solutions",
      content: "Exceptional problem-solving skills and ability to architect complex systems. Great team player who elevates everyone around them.",
      rating: 5
    }
  ],
  
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourname",
    calendar: "https://calendly.com/yourname"
  },
  
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourname"
    },
    {
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/yourprofile"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourname"
    }
  ],
  
  cta: {
    primary: "View My Projects",
    secondary: "Download Resume"
  },
  
  seo: {
    title: "Your Name - Software Developer | Full-Stack Engineer | Portfolio",
    description: "Software developer specializing in React, Node.js, and cloud technologies. Building scalable web applications and APIs.",
    keywords: ["software developer", "full-stack developer", "react developer", "node.js", "web development", "api development", "cloud architecture", "typescript"]
  }
};
