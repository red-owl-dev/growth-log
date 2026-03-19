import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGit,
  FaGithub,
  FaWindows,
  FaHtml5,
  FaJs
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSharp,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiPostman,
  SiJenkins,
  SiAngular
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Icon configuration
const ICON_SIZE = 18;
const DEFAULT_CLASS = "text-current";

// Normalized tech name mapping
const normalizeTechName = (tech: string): string => {
  return tech.toLowerCase().trim().replace(/\s+/g, '');
};

// Icon mapping with variations
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  // Frontend
  'react': FaReact,
  'nextdotjs': SiNextdotjs,
  'next.js': SiNextdotjs,
  'next': SiNextdotjs,
  'typescript': SiTypescript,
  'ts': SiTypescript,
  'tailwindcss': SiTailwindcss,
  'tailwind': SiTailwindcss,
  'angular': SiAngular,
  'javascript': FaJs,
  'js': FaJs,
  'html': FaHtml5,
  'html5': FaHtml5,
  
  // Backend
  'c#': SiSharp,
  'csharp': SiSharp,
  'dotnet': SiDotnet,
  '.net': SiDotnet,
  'nodejs': FaNodeJs,
  'node': FaNodeJs,
  'node.js': FaNodeJs,
  'python': FaPython,
  'py': FaPython,
  'jwt': FaAws,
  'oauth': FaAws,
  'oauth2.0': FaAws,
  
  // Database
  'postgresql': SiPostgresql,
  'postgres': SiPostgresql,
  'sqlserver': SiMysql,
  'sql': SiMysql,
  'mysql': SiMysql,
  'mongodb': SiMongodb,
  'mongo': SiMongodb,
  'redis': SiRedis,
  'oracle': SiMysql,
  
  // Architecture & Design
  'cleanarchitecture': SiSharp,
  'solid': SiSharp,
  'cqrs': SiSharp,
  'repository': SiSharp,
  'strategy': SiSharp,
  'observer': SiSharp,
  'mvc': SiSharp,
  'mvvm': SiSharp,
  'dtos': SiSharp,
  
  // DevOps & Infrastructure
  'docker': FaDocker,
  'aws': FaAws,
  'amazonwebservices': FaAws,
  'azure': FaAws,
  'microsoftazure': FaAws,
  'googlecloud': SiGooglecloud,
  'gcp': SiGooglecloud,
  'googlecloudplatform': SiGooglecloud,
  'ci/cd': FaDocker,
  'cicd': FaDocker,
  'azurepipelines': FaAws,
  'iis': FaWindows,
  'git': FaGit,
  'tfs': FaGit,
  
  // Quality & Testing
  'cleancode': SiSharp,
  'testesunitários': SiSharp,
  'xunit': SiSharp,
  'mstest': SiSharp,
  'unittesting': SiSharp,
  'mocks': SiSharp,
  'pruebasunitarias': SiSharp,
  
  // Mobile
  'reactnative': FaReact,
  'reactmobile': FaReact,
  
  // AI & Innovation
  'generativeai': FaPython,
  'pythonia': FaPython,
  'llms': FaPython,
  'intelligentagents': FaPython,
  'agentesinteligentes': FaPython,
  
  // Methodologies
  'scrum': SiSharp,
  'agile': SiSharp,
  
  // Tools
  'github': FaGithub,
  'vscode': VscVscode,
  'visualstudiocode': VscVscode,
  'vsc': VscVscode,
  'postman': SiPostman,
  'jenkins': SiJenkins,
  'windows': FaWindows,
  'microsoft': FaWindows
};

export function getTechIcon(tech: string): React.ReactNode {
  if (!tech || typeof tech !== 'string') {
    return null;
  }

  const normalizedTech = normalizeTechName(tech);
  const IconComponent = iconMap[normalizedTech];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={ICON_SIZE} className={DEFAULT_CLASS} />;
}
