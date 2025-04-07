import type React from "react"
import { GitPullRequest, Star, Users, Code, GitCommit, Trophy } from "lucide-react"

interface AnalyticsCardProps {
  title: string
  description: string
  value: string
  subtitle: string
  icon: React.ReactNode
  color: string
  gradient: string
}

function AnalyticsCard({ title, description, value, subtitle, icon, color, gradient }: AnalyticsCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border-0 bg-card p-5 shadow-md transition-all card-hover ${color}`}
    >
      <div className="absolute inset-0 opacity-10" style={{ background: gradient }}></div>
      <div className="flex justify-between items-start">
        <div className="z-10">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-1 text-2xl font-bold gradient-text">{value}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className={`rounded-xl p-3 z-10`} style={{ background: gradient }}>
          {icon}
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground z-10 relative">{description}</p>
    </div>
  )
}

export default function GithubAnalytics() {
  const analyticsData = [
    {
      title: "Commits",
      description: "Total de contribuições em repositórios",
      value: "404 pt",
      subtitle: "Hyper Committer",
      icon: <GitCommit className="h-5 w-5 text-white" />,
      color: "border-code-blue",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    },
    {
      title: "Repositórios",
      description: "Projetos públicos no GitHub",
      value: "41 pt",
      subtitle: "Hyper Repo Creator",
      icon: <Code className="h-5 w-5 text-white" />,
      color: "border-code-purple",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    },
    {
      title: "Experiência",
      description: "Nível de experiência baseado em atividade",
      value: "13 pt",
      subtitle: "Intermediate Dev",
      icon: <Trophy className="h-5 w-5 text-white" />,
      color: "border-code-green",
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    },
    {
      title: "Seguidores",
      description: "Desenvolvedores que seguem seu trabalho",
      value: "17 pt",
      subtitle: "Many Friends",
      icon: <Users className="h-5 w-5 text-white" />,
      color: "border-code-yellow",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    },
    {
      title: "Estrelas",
      description: "Estrelas recebidas em seus projetos",
      value: "1 pt",
      subtitle: "First Star",
      icon: <Star className="h-5 w-5 text-white" />,
      color: "border-code-pink",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    },
    {
      title: "Pull Requests",
      description: "Contribuições para outros projetos",
      value: "3 pt",
      subtitle: "First Pull",
      icon: <GitPullRequest className="h-5 w-5 text-white" />,
      color: "border-code-cyan",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {analyticsData.map((item, index) => (
        <AnalyticsCard
          key={index}
          title={item.title}
          description={item.description}
          value={item.value}
          subtitle={item.subtitle}
          icon={item.icon}
          color={item.color}
          gradient={item.gradient}
        />
      ))}
    </div>
  )
}

