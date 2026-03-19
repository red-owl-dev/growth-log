interface SkillBadgeProps {
  skill: string;
  variant?: 'default' | 'mono' | 'ghost';
  icon?: React.ReactNode;
}

export function SkillBadge({ skill, variant = 'default', icon }: SkillBadgeProps) {
  const baseClasses = "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1.5";
  
  const variantClasses = variant === 'ghost' 
    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono hover:bg-blue-500/20"
    : variant === 'mono' 
    ? "bg-accent/10 text-accent border border-accent/20 font-mono"
    : "bg-primary/10 text-primary border border-primary/20";

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {skill}
    </span>
  );
}
