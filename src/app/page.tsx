import Image from 'next/image'
import DateDisplay from '@/components/DateDisplay'
import MemoryAddress from '@/components/MemoryAddress'
import ProjectItem from '@/components/ProjectItem'
import RegistrationMarks from '@/components/RegistrationMarks'
import SectionHeader from '@/components/SectionHeader'
import SkillSection from '@/components/SkillSection'
import SocialLinks from '@/components/SocialLinks'

const navLink = "p-4 md:border-r border-b md:border-b-0 border-black hover:bg-black hover:text-white transition-colors duration-250"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 font-sans selection:bg-amber-400 animate-boot opacity-0">

      <div className="max-w-6xl mx-auto border border-black min-h-[90vh] flex flex-col bg-white backdrop-blur-sm">
        <div className="fixed top-0 right-0">
          <div className="w-72 h-24 bg-[linear-gradient(90deg,rgba(255,255,255,1)_28%,rgba(254,189,48,1)_66%,rgba(240,20,0,1)_100%)]" />
          <div className="absolute top-4 right-4 text-[10px] font-mono leading-tight text-white text-right">
            ::::::::: <br />
            :::::::::::::: <br />
            ::::::::::::::::::::::::::::::: <br />
            ::::::: <br />
            ::::::::::
          </div>
        </div>

        <section className="grow flex flex-col items-center justify-center p-4 gap-2 border-b border-black relative overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mt-auto">
            EDISON WANG
          </h1>
          <div className="w-full mt-auto flex justify-between items-end">
            <div className="border border-black p-2 flex flex-col gap-1">
              <span className="text-[10px] font-bold leading-none uppercase">Norm ISO/IEC</span>
              <DateDisplay />
            </div>
            <RegistrationMarks />
          </div>
        </section>

        <nav className="grid grid-cols-1 md:grid-cols-4 border-b border-black font-mono text-xs font-bold uppercase">
          <a href="#about" className={navLink}>01. Identity</a>
          <a href="#skills" className={navLink}>02. Capability</a>
          <a href="#projects" className={navLink}>03. Repository</a>
          <div className="p-4 flex items-center justify-between">
            <span>Rec. WF/LR2-4337H</span>
            <div className="w-3 h-3 bg-black" />
          </div>
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-12 grow">
          <div className="md:col-span-4 p-6 flex flex-col justify-between items-center gap-8">
            <div className="space-y-4">
              <Image src="/headshot.png" alt="Me!" width={400} height={400} className="w-full h-auto" />
              <div className="text-[10px] font-mono uppercase leading-tight">
                <span>All contribution produced and performed by Eddie. </span>
                <span>(P) & (C) 2030 UW CS. Design by Intent.</span>
              </div>
              <div className="h-8 bg-[linear-gradient(67deg,rgba(250,13,0,1)_0%,rgba(254,189,48,1)_39%,rgba(230,239,242,1)_64%,rgba(125,205,255,1)_92%)]" />
            </div>
          </div>
          <div className="md:col-span-8 px-6 pb-6 md:p-6 gap-6 md:border-l border-black flex flex-col justify-between">
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight">
              Computer Science student at UWaterloo.
              Backend Developer and Reviewer at satellite design team, UW Orbital.
              Currently building mission-critical ground station systems.
              Dedicated to creating web applications to improve everyday life.
            </p>
            <SocialLinks />
          </div>
        </section>

        <section className="hidden md:grid border-t border-black bg-[linear-gradient(17deg,rgba(255,255,255,1)_70%,rgba(98,171,245,1)_85%,rgba(151,45,196,1)_100%)] backdrop-blur-sm h-40" />

        <section id="about" className="p-6 flex flex-col gap-4 bg-white/50 backdrop-blur-sm">
          <SectionHeader label="Section_01 // Identity" />
          <h3 className="text-2xl md:text-4xl font-bold">About Me</h3>
          <p className="text-lg md:text-xl leading-tight text-black text-justify">
            I'm a CS student here at UWaterloo, and a backend developer and reviewer at UW Orbital, UWaterloo's only
            satellite design team. In addition to implementing core API features, I review PRs to the codebase, as well
            as document software architecture and system integration. You can catch me staying up late studying for classes
            and working on personal projects, and regularly participating in hackathons. What really motivates me is the
            process and result of developing software to solve everyday problems and reduce common frictions. I care greatly
            about ensuring that my applications are secure, performant, and most importantly user-oriented. 
          </p>
        </section>

        <section id="skills" className="p-6 flex flex-col gap-4 bg-white text-black">
          <SectionHeader label="Section_02 // Capability" />
          <h3 className="text-2xl md:text-4xl font-bold">Technical Skills</h3>
          <div className="flex flex-col">
            <SkillSection title="Languages" items={['Python', 'JavaScript', 'TypeScript', 'C', 'SQL', 'HTML/CSS', 'Bash', 'LaTeX', 'Racket']} />
            <SkillSection title="Frameworks & Libraries" items={['FastAPI', 'Django', 'Django REST Framework', 'Pytest', 'Flask', 'Streamlit', 'Tailwind CSS', 'Bootstrap', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'Fastify']} />
            <SkillSection title="Databases" items={['PostgreSQL', 'MySQL', 'Supabase', 'MongoDB', 'Redis', 'SQLite']} />
            <SkillSection title="Tools & Technologies" items={['Git', 'GitHub', 'Docker', 'Celery', 'Postman', 'Insomnia', 'VS Code', 'Vercel', 'Render', 'Claude Code et al.']} />
          </div>
        </section>

        <section className="hidden md:grid bg-[linear-gradient(197deg,rgba(255,255,255,1)_70%,rgba(98,171,245,1)_85%,rgba(151,45,196,1)_100%)] backdrop-blur-sm h-40" />

        

        <section id="projects" className="border-t border-black p-6 flex flex-col gap-4 bg-black text-white">
          <SectionHeader label="Section_03 // Repository" inverted />
          <div className="flex justify-between items-center">
            <h3 className="text-2xl md:text-4xl font-bold">My Projects</h3>
            <MemoryAddress />
          </div>
          <p>A collection of the projects I've been working on.</p>
          <ProjectItem
            id="001"
            status="Finalized"
            title="Hivemind"
            description="Git meets Notion meets Democracy. Hivemind is a note-taking application centred around collaboration through version control and vote-based features, targeting students and startups alike. In informal group environments, many ideas gain verbal consensus but never solidify. Important proposals often fade out of the collective memory before being formally documented. With Hivemind, create a shared note-taking space where contributors can independently draft, review, and vote on changes before they are merged into an official record."
            footnote="Built at Hack The Valley X @ U of T Scarborough"
            tags={['React', 'Tailwind_CSS', 'Django', 'Django_REST_Framework', 'PostgreSQL']}
            image={{ src: '/hivemind.png', alt: 'Hivemind' }}
          />
          <ProjectItem
            id="002"
            status="Finalized"
            title="MCalcV3"
            description="MCalcV3 is a recursive molar mass calculation script and CLI tool to streamline the bane of high school chemistry. It's designed to be run on graphing calculators, specifically for the MicroPython implementation. With 100% error coverage, input IUPAC-standard chemical formulas as exactly you see them, and get its molar mass to two significant digits."
            tags={['Python']}
            image={{ src: '/chem.jpg', alt: 'Chemistry' }}
          />
        </section>
      </div>
    </main>
  )
}
