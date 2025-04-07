import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import SkillsRadarChart from "@/components/dashboard/skills-radar-chart"
import SkillsPieChart from "@/components/dashboard/skills-pie-chart"
import DataDistributionChart from "@/components/dashboard/data-distribution-chart"
import MonthlyGrowthChart from "@/components/dashboard/monthly-growth-chart"
import StatsCards from "@/components/dashboard/stats-cards"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Dashboard | Seu Aplicativo",
  description: "Visualize suas estatísticas e progresso",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Bem-vindo ao Seu Dashboard</h1>
          <p className="text-muted-foreground">Visualize suas estatísticas e acompanhe seu progresso</p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Tabs para alternar entre visualizações */}
        <Tabs defaultValue="skills" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-4">
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="distribution">Distribuição</TabsTrigger>
            <TabsTrigger value="growth">Crescimento</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50 pb-2">
                  <CardTitle className="text-xl font-semibold">Skills Radar</CardTitle>
                  <CardDescription>Avaliação das minhas habilidades</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[300px] w-full">
                    <SkillsRadarChart />
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">Última atualização: Março 2025</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50 pb-2">
                  <CardTitle className="text-xl font-semibold">Skills Pie Chart</CardTitle>
                  <CardDescription>Distribuição das minhas habilidades</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[300px] w-full">
                    <SkillsPieChart />
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">Última atualização: Março 2025</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 pb-2">
                <CardTitle className="text-xl font-semibold">Performance Mensal</CardTitle>
                <CardDescription>Análise de desempenho ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[400px] w-full">
                  <MonthlyGrowthChart />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 pb-2">
                <CardTitle className="text-xl font-semibold">Distribuição de dados</CardTitle>
                <CardDescription>Exemplo de gráfico polar</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[400px] w-full">
                  <DataDistributionChart />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth" className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50 pb-2">
                <CardTitle className="text-xl font-semibold">Crescimento Mensal</CardTitle>
                <CardDescription>Evolução dos acessos ao sistema</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[400px] w-full">
                  <MonthlyGrowthChart />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

