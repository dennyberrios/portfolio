import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutMe() {
  const technologies = [
    { name: "React", color: "#3b82f6" },
    { name: "Next.js", color: "#8b5cf6" },
    { name: "TypeScript", color: "#06b6d4" },
    { name: "JavaScript", color: "#f59e0b" },
    { name: "Tailwind CSS", color: "#06b6d4" },
    { name: "HTML5", color: "#ef4444" },
    { name: "CSS3", color: "#3b82f6" },
    { name: "Node.js", color: "#10b981" },
    { name: "Express", color: "#8b5cf6" },
    { name: "MongoDB", color: "#10b981" },
    { name: "Redux", color: "#8b5cf6" },
    { name: "React Query", color: "#ef4444" },
    { name: "Jest", color: "#f59e0b" },
    { name: "Testing Library", color: "#ef4444" },
    { name: "Git", color: "#f59e0b" },
  ]

  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <div className="h-2 bg-gradient-primary"></div>
      <CardHeader className="bg-muted/30 pb-4 px-6">
        <CardTitle className="text-2xl gradient-text">Alex Developer</CardTitle>
        <CardDescription>Desenvolvedor Front-end apaixonado por criar experiências web incríveis</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 px-6">
        <div className="space-y-4">
          <p className="text-base leading-relaxed">
            Olá! Sou um desenvolvedor front-end com 5 anos de experiência, especializado em criar interfaces modernas,
            responsivas e acessíveis. Minha jornada no desenvolvimento web começou com HTML e CSS básicos, e desde então
            tenho me aprofundado no ecossistema React e TypeScript. Adoro trabalhar com tecnologias modernas e estou
            sempre em busca de aprender novas ferramentas e técnicas para melhorar meu trabalho.
          </p>

          <p className="text-base leading-relaxed">
            Minha missão como desenvolvedor é criar aplicações web que não apenas funcionem perfeitamente, mas também
            proporcionem uma experiência de usuário excepcional. Acredito que o código limpo, bem estruturado e testado
            é fundamental para construir produtos de qualidade.
          </p>

          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-3 gradient-text">Tecnologias Favoritas</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} className="text-white border-0 py-1 px-3" style={{ background: tech.color }}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

