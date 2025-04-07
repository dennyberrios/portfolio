import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  url: string
  gradient: string
}

function BlogPostCard({ title, description, date, readTime, tags, url, gradient }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all card-hover border-0 shadow-md">
      <div className="h-2" style={{ background: gradient }}></div>
      <CardHeader className="pb-2 px-6">
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} className="text-xs text-white border-0" style={{ background: gradient }}>
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2 pb-0 flex-grow px-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-4 px-6">
        <Button className="gap-2 ml-auto text-white border-0" style={{ background: gradient }} asChild>
          <a href={url}>
            <span>Ler mais</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Blog() {
  // Dados simulados de posts do blog
  const blogPosts = [
    {
      title: "Construindo UIs modernas com React e Tailwind CSS",
      description: "Aprenda a criar interfaces de usuário modernas e responsivas combinando React e Tailwind CSS",
      date: "12 Mar 2025",
      readTime: "8 min de leitura",
      tags: ["React", "Tailwind", "UI"],
      url: "/blog/react-tailwind-ui",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    },
    {
      title: "Otimizando o desempenho em aplicações Next.js",
      description: "Dicas e técnicas para melhorar o desempenho e a experiência do usuário em aplicações Next.js",
      date: "28 Fev 2025",
      readTime: "12 min de leitura",
      tags: ["Next.js", "Performance", "Optimization"],
      url: "/blog/nextjs-performance",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    },
    {
      title: "TypeScript para desenvolvedores React: Guia prático",
      description: "Um guia prático para usar TypeScript em projetos React, com exemplos e melhores práticas",
      date: "15 Fev 2025",
      readTime: "10 min de leitura",
      tags: ["TypeScript", "React", "Guide"],
      url: "/blog/typescript-react-guide",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    },
  ]

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <BlogPostCard
          key={index}
          title={post.title}
          description={post.description}
          date={post.date}
          readTime={post.readTime}
          tags={post.tags}
          url={post.url}
          gradient={post.gradient}
        />
      ))}
    </div>
  )
}

