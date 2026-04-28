interface SectionHeaderProps {
  label: string
  inverted?: boolean
}

export default function SectionHeader({ label, inverted = false }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 ${inverted ? 'bg-white' : 'bg-black'}`} />
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{label}</h2>
    </div>
  )
}
