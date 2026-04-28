import Image from 'next/image'
import DateDisplay from '@/components/DateDisplay'
import MemoryAddress from '@/components/MemoryAddress'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 font-sans selection:bg-amber-400 animate-boot bg-transparent opacity-0">

      <div className="max-w-6xl mx-auto border border-black min-h-[90vh] flex flex-col bg-white backdrop-blur-sm">
        <div className="fixed top-0 right-0">
          <div className="w-72 h-24 bg-[linear-gradient(90deg,rgba(255,255,255,1)_28%,rgba(254,189,48,1)_66%,rgba(240,20,0,1)_100%)]"></div>
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
            <div className="hidden sm:flex gap-4">
              {/* Registration Reticle */}
              <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M6 6L34 34M34 6L6 34" stroke="black" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="8" fill="none" stroke="black" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="2" fill="black" />
              </svg>

              {/* Data Grid */}
              <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
                <path d="M0 0h40v40H0z" fill="none" />
                <g stroke="black" strokeWidth="0.4">
                  <path d="M0 10h40M0 20h40M0 30h40" />
                  <path d="M10 0v40M20 0v40M30 0v40" />
                </g>
                <rect x="20" y="20" width="10" height="10" fill="black" />
                <rect x="10" y="10" width="10" height="10" fill="black" />
                <rect x="30" y="0" width="10" height="10" fill="black" />
                <rect x="0" y="30" width="10" height="10" fill="black" />
              </svg>

              {/* Scan Frame */}
              <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M4 10V4h6M30 4h6v6M36 30v6h-6M10 36H4v-6" fill="none" stroke="black" strokeWidth="1" />
                <circle cx="20" cy="20" r="1.5" fill="black" />
              </svg>

              {/* Target / Cross */}
              <svg width="67" height="67" viewBox="0 0 40 40" className="border border-black">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M20 0v40M0 20h40" stroke="black" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="10" fill="black" />
              </svg>
            </div>
          </div>
        </section>

        <nav className="grid grid-cols-1 md:grid-cols-4 border-b border-black font-mono text-xs font-bold uppercase">
          <a href="#about" className="p-4 md:border-r border-b md:border-b-0 border-black hover:bg-black hover:text-white transition-colors duration-250">01. Identity</a>
          <a href="#projects" className="p-4 md:border-r border-b md:border-b-0 border-black hover:bg-black hover:text-white transition-colors duration-250">02. Repository</a>
          <a href="#contact" className="p-4 md:border-r border-b md:border-b-0 border-black hover:bg-black hover:text-white transition-colors duration-250">03. Interface</a>
          <div className="p-4 flex items-center justify-between">
            <span>Rec. WF/LR2-4337H</span>
            <div className="w-3 h-3 bg-black"></div>
          </div>
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-12 grow">
          <div className="md:col-span-4 p-6 flex flex-col justify-between items-center gap-8">
            <div className="space-y-4">
              <Image src="/headshot.png" alt="Me!" width={400} height={400} className="w-full h-auto" />
              <div className="text-[10px] font-mono uppercase leading-tight">
                <span>All contribution produced and performed by Eddie.</span>
                <span>(P) &amp; (C) 2030 UW CS. Design by Intent.</span>
              </div>
              <div className="h-8 bg-[linear-gradient(67deg,rgba(250,13,0,1)_0%,rgba(254,189,48,1)_39%,rgba(230,239,242,1)_64%,rgba(125,205,255,1)_92%)]"></div>
            </div>
          </div>

          <div className="md:col-span-8 px-6 pb-6 md:p-6 gap-6 md:border-l border-black flex flex-col relative justify-between">
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight">
              Computer Science student at UWaterloo.
              Backend Developer and Reviewer at satellite design team, UW Orbital.
              Currently building mission-critical ground station systems.
              Dedicated to creating web applications to improve everyday life.
            </p>
            <div className="flex justify-between">
              <div className="flex gap-6">
                <a href="https://github.com/Syzygicality" target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group duration-250">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                <a href="https://linkedin.com/in/edison-wang-s7z7g7/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                  className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group duration-250">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                <a href="https://instagram.com/wanderings67/" target="_blank" rel="noreferrer" aria-label="Instagram"
                  className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group duration-250">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a href="/resume.pdf" download="Edison_Wang_Resume.pdf" aria-label="Download Resume"
                  className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors group duration-250">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:hidden">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span className="hidden group-hover:block font-mono text-[10px] font-bold tracking-tighter">
                    Hire me pls 😭🙏🏻
                  </span>
                </a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <circle cx="12" cy="12" r="10" />
                <ellipse cx="12" cy="12" rx="3" ry="10" />
                <ellipse cx="12" cy="12" rx="7" ry="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M3.6 16h16.8" />
                <path d="M3.6 8h16.8" />
              </svg>
            </div>
          </div>
        </section>

        <div className="relative flex overflow-x-hidden border-t border-black bg-black text-white py-2 font-mono text-xs font-bold uppercase tracking-widest">
          <div className="animate-marquee whitespace-nowrap flex">
            {['|', 'My Top Ten:', 'Justice', 'Digitalism', "L'Impératrice", 'Daft Punk', 'Bonobo', 'Gesaffelstein', 'STRFKR', 'Kavinsky', 'Miami Horror', 'Kanye (pre-crashout)', '|', 'My Top Ten:', 'Justice', 'Digitalism', "L'Impératrice", 'Daft Punk', 'Bonobo', 'Gesaffelstein', 'STRFKR', 'Kavinsky', 'Miami Horror', 'Kanye (pre-crashout)'].map((item, i) => (
              <span key={i} className="mx-4">{item}</span>
            ))}
          </div>
        </div>

        <section className="hidden md:grid p-6 gap-4 bg-[linear-gradient(17deg,rgba(255,255,255,1)_70%,rgba(98,171,245,1)_85%,rgba(151,45,196,1)_100%)] backdrop-blur-sm h-40"></section>

        <section id="about" className="p-6 flex flex-col gap-4 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-black"></div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              Section_01 // Identity
            </h2>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold">About Me</h3>
          <p className="text-l md:text-xl leading-tight text-black text-justify">
            I&apos;m a CS student here at UWaterloo, and a backend developer and reviewer at UW Orbital, UWaterloo&apos;s only
            satellite design team. In addition to implementing core API features, I review PRs to the codebase, as well
            as document software architecture and system integration. You can catch me staying up late studying for classes
            and working on personal projects, and regularly participating in hackathons. What really motivates me is the
            process and result of developing software to solve everyday problems and reduce common frictions. I care greatly
            about ensuring that my applications are secure, performant, and most importantly user-oriented.
          </p>
          <p className="text-l md:text-xl leading-tight text-black text-justify">
            I&apos;m currently working on Resumaker, an AI-integrated resume editing platform. Users can store bios, skills,
            experiences, projects, bullet points, and much more. Create and edit resumes with AI suggestions through
            a user-friendly, resume-optimized interface, and download the fully templated document formatted in the style of
            Jake&apos;s Resume template. (If you&apos;re interested in collaborating, shoot me a message!)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-black">
            <div className="flex flex-col gap-2">
              <div className="border-b border-black pb-1 text-center">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Languages</span>
              </div>
              <ul className="font-mono text-sm leading-tight grid grid-cols-3 gap-1 justify-items-center">
                {['Python', 'JavaScript', 'C', 'SQL', 'HTML/CSS', 'Bash', 'LaTeX', 'Racket'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border-b border-black pb-1 text-center">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Frameworks &amp; Libraries</span>
              </div>
              <ul className="font-mono text-sm leading-tight grid grid-cols-3 gap-1 justify-items-center">
                {['Django', 'DRF', 'FastAPI', 'Flask', 'Streamlit', 'Next.js', 'Tailwind', 'Bootstrap', 'Node.js'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border-b border-black pb-1 text-center">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Databases</span>
              </div>
              <ul className="font-mono text-sm leading-tight grid grid-cols-3 gap-1 justify-items-center">
                {['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border-b border-black pb-1 text-center">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Tools &amp; Technologies</span>
              </div>
              <ul className="font-mono text-sm leading-tight grid grid-cols-3 gap-1 justify-items-center">
                {['Figma', 'Git', 'GitHub', 'Docker', 'Celery', 'Insomnia', 'Render', 'Vercel'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="hidden md:grid p-6 gap-4 bg-[linear-gradient(197deg,rgba(255,255,255,1)_70%,rgba(98,171,245,1)_85%,rgba(151,45,196,1)_100%)] backdrop-blur-sm h-40"></section>

        <section id="projects" className="border-black border-t p-6 flex flex-col gap-4 bg-black text-white backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white"></div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              Section_02 // Repository
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl md:text-4xl font-bold">My Projects</h3>
            <MemoryAddress />
          </div>
          <p>A collection of the projects I&apos;ve been working on.</p>

          <div className="border border-white flex flex-col md:flex-row backdrop-blur-sm">
            <div className="border-b md:border-b-0 md:border-r border-black p-2 flex md:flex-col justify-between items-center bg-black text-white font-mono text-[9px] uppercase tracking-tighter">
              <span className="[writing-mode:vertical-lr] rotate-180 hidden md:block">Project_ID: 001</span>
              <span className="md:hidden">ID: 001</span>
              <span className="[writing-mode:vertical-lr] rotate-180 hidden md:block">Status: Finalized</span>
              <span className="md:hidden">Stat: Finalized</span>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-4 border-b border-black pb-2">
                  <h4 className="text-3xl font-bold">Hivemind</h4>
                </div>
                <p className="text-sm md:text-base leading-tight tracking-tight text-justify">
                  Git meets Notion meets Democracy. Hivemind is a note-taking application centred
                  around collaboration through version control and vote-based features, targeting
                  students and startups alike. In informal group environments, many ideas gain
                  verbal consensus but never solidify. Important proposals often fade out of the
                  collective memory before being formally documented. With Hivemind, create a shared
                  note-taking space where contributors can independently draft, review, and vote on
                  changes before they are merged into an official record.
                  <br /><br />
                  Built at Hack The Valley X @ U of T Scarborough
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {['React', 'Tailwind_CSS', 'Django', 'Django_REST_Framework', 'PostgreSQL'].map(t => (
                    <span key={t} className="border border-white px-2 py-0.5 font-mono text-[9px] uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-64 shrink-0 flex items-center">
                <div className="border border-white bg-white">
                  <Image src="/hivemind.png" alt="Hivemind" width={256} height={192} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border border-white flex flex-col md:flex-row backdrop-blur-sm">
            <div className="border-b md:border-b-0 md:border-r border-black p-2 flex md:flex-col justify-between items-center bg-black text-white font-mono text-[9px] uppercase tracking-tighter">
              <span className="[writing-mode:vertical-lr] rotate-180 hidden md:block">Project_ID: 002</span>
              <span className="md:hidden">ID: 002</span>
              <span className="[writing-mode:vertical-lr] rotate-180 hidden md:block">Status: Finalized</span>
              <span className="md:hidden">Stat: Finalized</span>
            </div>
            <div className="p-6 flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-4 border-b border-black pb-2">
                  <h4 className="text-3xl font-bold">MCalcV3</h4>
                </div>
                <p className="text-sm md:text-base leading-tight tracking-tight text-justify">
                  MCalcV3 is a recursive molar mass calculation script and CLI tool to streamline the
                  bane of high school chemistry. It&apos;s designed to be run on graphing calculators,
                  specifically for the MicroPython implementation. With 100% error coverage, input
                  IUPAC-standard chemical formulas as exactly you see them, and get its molar mass to
                  two significant digits.
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="border border-white px-2 py-0.5 font-mono text-[9px] uppercase">Python</span>
                </div>
              </div>
              <div className="md:w-64 shrink-0 flex items-center">
                <div className="border border-white bg-white">
                  <Image src="/chem.jpg" alt="Chemistry" width={256} height={192} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="max-w-6xl mx-auto flex justify-between items-center py-6 px-2">
        <div className="flex gap-1 h-12">
          {[2, 4, 1, 3, 1, 6, 2, 1, 4, 2, 5, 8, 1, 7, 3, 1, 1, 4, 2].map((w, i) => (
            <div key={i} className="bg-black" style={{ width: `${w}px` }}></div>
          ))}
          <div className="flex flex-col justify-end text-[8px] font-mono ml-1">
            4 251884 124119 <br />
            Inspired by Digitalism&apos;s JPEG
          </div>
        </div>
        <div className="text-[10px] font-mono text-right uppercase">
          Status: Study Term<br />
          Location: Waterloo, ON
        </div>
      </footer>
    </main>
  )
}
