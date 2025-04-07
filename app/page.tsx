import GithubAnalytics from "@/components/github-analytics"
import Charts from "@/components/charts"
import Projects from "@/components/projects"
import AboutMe from "@/components/about-me"
import Blog from "@/components/blog"
import PortfolioLayout from "@/components/portfolio-layout"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Code, User, FileText, BarChart } from "lucide-react"

export default function Home() {
  return (
    <PortfolioLayout>
      <div className="space-y-12">
        <section id="dashboard" className="space-y-6 section-highlight p-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <BarChart className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">GitHub Analytics</h2>
            </div>
            <p className="text-base text-muted-foreground">Métricas e estatísticas da minha atividade no GitHub</p>
          </div>
          <GithubAnalytics />
        </section>

        <Separator className="my-8 opacity-30" />

        <section id="charts" className="space-y-6 section-highlight p-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-secondary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Métricas de Desenvolvimento</h2>
            </div>
            <p className="text-base text-muted-foreground">
              Visualização gráfica da minha evolução e distribuição de habilidades
            </p>
          </div>
          <Charts />
        </section>

        <Separator className="my-8 opacity-30" />

        <section id="about" className="space-y-6 section-highlight p-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-accent">
                <User className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Sobre Mim</h2>
            </div>
            <p className="text-base text-muted-foreground">
              Conheça um pouco mais sobre minha jornada como desenvolvedor
            </p>
          </div>
          <AboutMe />
        </section>

        <Separator className="my-8 opacity-30" />

        <section id="projects" className="space-y-6 section-highlight p-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Code className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Projetos em Destaque</h2>
            </div>
            <p className="text-base text-muted-foreground">Alguns dos meus projetos mais recentes no GitHub</p>
          </div>
          <Projects />
        </section>

        <Separator className="my-8 opacity-30" />

        <section id="blog" className="space-y-6 section-highlight p-6 rounded-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-secondary">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text">Blog Técnico</h2>
            </div>
            <p className="text-base text-muted-foreground">
              Artigos e tutoriais sobre desenvolvimento web e tecnologia
            </p>
          </div>
          <Blog />
        </section>
      </div>
    </PortfolioLayout>
  )
}

