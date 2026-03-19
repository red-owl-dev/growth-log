"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { getTechIcon } from "@/components/ui/TechIcons";
import type { Experience } from "@/content/siteContent";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="hover-lift bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 h-full p-6">
      <CardHeader className="pb-4 px-0">
        {/* Title - Strong emphasis */}
        <div className="text-xl font-bold text-white mb-3">
          {experience.title}
        </div>
        
        {/* Company and Period on same line */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-slate-400 text-sm font-medium">
            {experience.company}
          </div>
          <div className="text-slate-400 text-sm">
            {experience.period}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 px-0">
        {/* Description */}
        <p className="text-slate-300 leading-relaxed mb-6">
          {experience.description}
        </p>
        
        {/* Technology Badges - More compact */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-6">
            <div className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
              Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-mono font-medium border border-blue-500/20 flex items-center gap-1.5 hover:bg-blue-500/20 transition-colors duration-300"
                >
                  {getTechIcon(tech) && (
                    <span className="w-3.5 h-3.5 flex items-center justify-center">
                      {getTechIcon(tech)}
                    </span>
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Skills - Simple list format */}
        {experience.skills && experience.skills.length > 0 && (
          <div>
            <div className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wide">
              Skills
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              {experience.skills.map((skill: string, skillIndex: number) => (
                <span key={skillIndex}>
                  {skill}
                  {skillIndex < experience.skills!.length - 1 && " • "}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
