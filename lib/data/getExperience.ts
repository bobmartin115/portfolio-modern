import type { Experience } from "@/lib/notion/types"

export async function getExperience(): Promise<Experience[]> {
  // Mock data - replace with your own experience
  return [
    {
      id: "1",
      time: "05/2025 - Present",
      title: "Senior Software Engineer",
      description: [
        "-Modernized legacy frontend to React/Next.js + Tailwind, improving performance ~35% and delivery speed.",
        "-Built AI content pipelines with FastAPI and OpenAI/Claude, boosting engagement ~45%.",
      ],
      experienceUrl: "https://www.revid.ai/",
      experienceName: "Revid AI.",
    },
    {
      id: "2",
      time: "11/2022 - 05/2025",
      title: "Senior Software Engineer",
      description: [
        "-Built and maintained scalable SaaS and enterprise platforms for international clients.",
        "-Developed backend services and REST APIs using Node.js.",
        "-Delivered full-stack features using React and TypeScript with database integration.",
        "-Optimized PostgreSQL/MySQL performance, improving API response times by ~30%.",
        "-Supported AWS/Docker deployments, mentored junior engineers, and worked cross-functionally.",
      ],
      experienceUrl: "https://goldenowl.asia/",
      experienceName: "Golden Owl Solutions",
    },
    {
      id: "3",
      time: "05/2020 - 10/2022",
      title: "Backend Developer",
      description: [
        "-Built and scaled a telehealth platform for remote patient consultations during COVID-19.",
        "-Developed REST APIs and backend services using Node.js and Express.",
        "-Implemented authentication, React workflows, and PostgreSQL optimization, improving performance by ~35%.",
        "-Supported AWS monitoring and maintained ~99.8% uptime.",
      ],
      experienceUrl: "https://medgate.ph/",
      experienceName: "Medgate",
    },
    {
      id: "4",
      time: "10/20219 - 05/2020",
      title: "Front End Developer",
      description: [
        "-Developed enterprise web apps and API integrations for financial reporting and business operations.",
        "-Built secure Xero integration using OAuth 1.0 authentication.",
        "-Designed statutory-compliant automated financial reporting modules.",
        "-Integrated legacy systems with modern web interfaces, improving UI workflows.",
        "-Collaborated with finance teams to deliver production-ready business systems.",
      ],
      experienceUrl: "https://risingtide.ph/",
      experienceName: "Rising Tide Mobile Entertainment Inc",
    },
    {
      id: "5",
      time: "07/2018 - 10/2019",
      title: "Software Engineer",
      description: [
        "-Worked on a large-scale 3-tier enterprise system for internal communication and business applications.",
        "-Developed microservices and APIs using React and .NET Core in a distributed architecture.",
        "-Implemented OAuth-based authentication and role-based access control for secure messaging systems.",
        "-Supported and maintained the Project Elbert internal platform for employee workflows and communication.",
      ],
      experienceUrl: "https://www.acesawards.com/companies/sykes-asia",
      experienceName: "Sykes Asia",
    },
  ]
}
