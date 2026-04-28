interface SkillSectionProps {
  title: string
  items: string[]
}

export default function SkillSection({ title, items }: SkillSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="border-b border-black pb-1 text-center">
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">{title}</span>
      </div>
      <ul className="font-mono text-sm leading-tight grid grid-cols-3 gap-1 justify-items-center">
        {items.map(s => <li key={s}>{s}</li>)}
      </ul>
    </div>
  )
}
