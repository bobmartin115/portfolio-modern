import type { Project } from "@/lib/notion/types"

export async function getProjects(): Promise<Project[]> {
  // Mock data - replace with your own projects
  return [
    {
      id: "1",
      title: "SKY PAY - Sports Mobile Platform",
      description:
        "It is a sports-focused mobile payment + engagement platform used in apps or regional services.",
      tags: ["React Native", "JavaScript", "REST APIs", "backend services"],
      previewLink: "https://skypayglobal.net/",
    },
    {
      id: "2",
      title: "WE SOLO - Travel Mobile Application",
      description:
        "WE SOLO – Travel Mobile Application is a real mobile app focused on solo travel + social connection while traveling.",
      tags: [
        "React Native",
        "JavaScript",
        "TypeScript",
        "REST APIs",
        "API integration",
        "backend services",
        "payment gateway integration",
      ],
      previewLink: "https://apps.apple.com/ve/app/we-solo/id1466959872",
    },
    {
      id: "3",
      title: "KNOW YOUR TRADE - Construction SaaS Platform",
      description:
        "A digital system for managing construction workers, compliance, and site operations in one platform.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Microservices architecture",
        "PostgreSQL / MySQL",
        "AWS",
        "Docker",
        "CI/CD pipelines",
        "Vercel",
      ],
      previewLink: "https://knowyourtrade.com.au/",
    },
  ]
}
