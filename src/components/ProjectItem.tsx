import Image from 'next/image'

interface ProjectItemProps {
  id: string
  status: string
  title: string
  description: string
  footnote?: string
  tags: string[]
  image: { src: string; alt: string }
}

export default function ProjectItem({ id, status, title, description, footnote, tags, image }: ProjectItemProps) {
  return (
    <div className="w-full border border-white flex flex-col md:flex-row">
      <div className="border-b md:border-b-0 md:border-r border-black p-2 flex md:flex-col justify-between items-center bg-black text-white font-mono text-[9px] uppercase tracking-tighter">
        <span className="[writing-mode:vertical-lr] rotate-180 hidden md:block">Project_ID: {id}</span>
        <span className="md:hidden">ID: {id}</span>
        <span className="[writing-mode:vertical-lr] rotate-180 hidden md:block">Status: {status}</span>
        <span className="md:hidden">Stat: {status}</span>
      </div>
      <div className="p-6 flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-4 border-b border-black pb-2">
            <h4 className="text-3xl font-bold">{title}</h4>
          </div>
          <p className="text-sm md:text-base leading-tight tracking-tight text-justify">
            {description}
            {footnote && <><br /><br />{footnote}</>}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="border border-white px-2 py-0.5 font-mono text-[9px] uppercase">{t}</span>
            ))}
          </div>
        </div>
        <div className="md:w-64 shrink-0 flex items-center">
          <div className="border border-white bg-white">
            <Image src={image.src} alt={image.alt} width={256} height={192} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
