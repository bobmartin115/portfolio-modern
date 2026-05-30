import type { About } from "@/lib/notion/types"

export async function getAbout(): Promise<About | null> {
  // Mock data - replace with your own information
  return {
    id: "1",
    title: "Senior Software Engineer",
    description: "I'm William Yamaguchi, a Senior Software Engineer with experience in building scalable high-performance software and AI-driven products.",
    contact: "williamyamaguchi@gmail.com",
    tags: ["React", "Next.js", "Node.js","Express.js","FastAPI", "AI Services", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Agile Methodologies"],
    githubUrl: "https://github.com/chickenengineer-ops",
  }
}
