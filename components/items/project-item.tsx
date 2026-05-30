import { Project } from "@/lib/notion/types"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export function ProjectItem({
  id,
  title,
  description,
  tags,
  githubLink,
  previewLink,
}: Project) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-background/90 shadow-sm md:flex-row md:gap-4">
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-3xl border-b border-border bg-muted/70 p-4 dark:bg-slate-950/70 md:h-auto md:w-1/2 md:rounded-l-3xl md:rounded-tr-none md:border-r md:border-b-0">
        <div className="absolute inset-0 bg-gradient-to-br  opacity-95 " />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 text-center text-slate-950 dark:text-slate-100">
          <Image src={`/images/${id}.jpg`} alt={title} className="rounded-lg h-full w-full object-cover"  width={400} height={300}/>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 md:w-1/2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-md text-foreground font-semibold leading-tight">
              {title}
            </h3>
          </div>
          <div className="flex gap-1">
            {previewLink && (
              <Button
                asChild
                size="xs"
                variant="secondary"
                className="hover:bg-muted h-6 w-6 p-0"
              >
                <Link
                  href={previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Preview"
                >
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            )}
            {githubLink && (
              <Button
                asChild
                size="xs"
                variant="secondary"
                className="hover:bg-muted h-6 w-6 p-0"
              >
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Code"
                >
                  <Github className="h-3 w-3" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="h-6 px-2 py-0 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
