import { About } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { getData } from "@/lib/data"
import { Github } from "lucide-react"

export default async function Page() {
  const data = await getData()

  return (
    <div className="mx-auto max-w-3xl px-6 py-5 sm:px-8 rounded-lg border-2 border-gray-100 dark:border-gray-600 shadow-md dark:shadow-[0_10px_25px_-5px_rgba(255,255,255,0.2)]">
      <nav className="mb-20 flex items-center justify-between gap-4">
        <a
          href={data.about?.githubUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1 text-sm font-medium hover:bg-muted dark:border-gray-700"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>

        <div className="flex items-center gap-4">
          <a href="#about" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">About</a>
          <a href="#experience" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">Experience</a>
          <a href="#projects" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">Projects</a>
          <a href="#contact" className="rounded-md px-3 py-1 text-sm font-medium hover:bg-muted">Contact</a>
        </div>
      </nav>
      <div className="space-y-16">
        <About about={data.about} />
        <ExperienceSection experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact />
      </div>
    </div>
  )
}
