interface SkillSectionProps {
  title: string
  items: string[]
}

export default function SkillSection({ title, items }: SkillSectionProps) {
  return (
    <div className="flex items-center gap-6 py-3">
      <div className="w-36 shrink-0 border-r border-current pr-6 text-right">
        <span className="font-mono text-xs font-bold uppercase tracking-widest">{title}</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {items.map(s => (
          <span key={s} className="font-mono text-xs border border-current px-1.5 py-0.5 leading-none whitespace-nowrap hover:bg-black hover:text-white transition-colors group duration-250">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
