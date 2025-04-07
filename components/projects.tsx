import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
  tags: string[]
  gradient: string
}

function ProjectCard({ title, description, language, stars, forks, url, tags, gradient }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all card-hover border-0 shadow-md">
      <div className="h-2" style={{ background: gradient }}></div>
      <CardHeader className="pb-2 px-6">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className="text-white border-0" style={{ background: gradient }}>
            {language}
          </Badge>
        </div>
        <CardDescription className="text-sm mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2 pb-0 flex-grow px-6">
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4 pb-4 px-6 flex-wrap gap-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-code-yellow" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <GitFork className="h-4 w-4 text-code-purple" />
            <span>{forks}</span>
          </div>
        </div>
        <Button className="gap-2 text-white border-0" style={{ background: gradient }} asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            <span>Ver no GitHub</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  // Dados simulados de projetos
  const projects = [
    {
      title: "NextUI Dashboard",
      description: "Dashboard moderno e responsivo construído com Next.js, TypeScript e Tailwind CSS",
      language: "TypeScript",
      stars: 42,
      forks: 12,
      url: "https://github.com/yourusername/nextui-dashboard",
      tags: ["Next.js", "React", "Tailwind", "Dashboard"],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    },
    {
      title: "React Query Explorer",
      description: "Ferramenta para explorar e testar APIs REST com React Query e TypeScript",
      language: "TypeScript",
      stars: 28,
      forks: 5,
      url: "https://github.com/yourusername/react-query-explorer",
      tags: ["React", "React Query", "API", "REST"],
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    },
    {
      title: "Tailwind Components",
      description: "Biblioteca de componentes reutilizáveis construídos com Tailwind CSS",
      language: "JavaScript",
      stars: 76,
      forks: 23,
      url: "https://github.com/yourusername/tailwind-components",
      tags: ["Tailwind", "UI", "Components", "CSS"],
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    },
  ]

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          language={project.language}
          stars={project.stars}
          forks={project.forks}
          url={project.url}
          tags={project.tags}
          gradient={project.gradient}
        />
      ))}
    </div>
  )
}

