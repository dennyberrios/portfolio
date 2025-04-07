"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SkillsRadarChart from "@/components/charts/radar-chart"
import SkillsPieChart from "@/components/charts/pie-chart"
import ActivityLineChart from "@/components/charts/line-chart"

export default function Charts() {
  return (
    <Tabs defaultValue="radar" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-4 p-1 bg-muted/50">
        <TabsTrigger
          value="radar"
          className="text-sm data-[state=active]:bg-gradient-primary data-[state=active]:text-white"
        >
          Habilidades (Radar)
        </TabsTrigger>
        <TabsTrigger
          value="pie"
          className="text-sm data-[state=active]:bg-gradient-secondary data-[state=active]:text-white"
        >
          Distribuição (Pie)
        </TabsTrigger>
        <TabsTrigger
          value="line"
          className="text-sm data-[state=active]:bg-gradient-accent data-[state=active]:text-white"
        >
          Atividade (Line)
        </TabsTrigger>
      </TabsList>

      <TabsContent value="radar">
        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-gradient-primary"></div>
          <CardHeader className="pb-2 px-6 bg-muted/30">
            <CardTitle className="text-lg">Evolução de Habilidades</CardTitle>
            <CardDescription>Comparação de habilidades técnicas entre 2024 e 2025</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pt-6">
            <div className="h-[350px] w-full">
              <SkillsRadarChart />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="pie">
        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-gradient-secondary"></div>
          <CardHeader className="pb-2 px-6 bg-muted/30">
            <CardTitle className="text-lg">Distribuição de Tecnologias</CardTitle>
            <CardDescription>Proporção de uso das principais tecnologias em projetos</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pt-6">
            <div className="h-[350px] w-full">
              <SkillsPieChart />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="line">
        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-gradient-accent"></div>
          <CardHeader className="pb-2 px-6 bg-muted/30">
            <CardTitle className="text-lg">Atividade no GitHub</CardTitle>
            <CardDescription>Evolução de commits e contribuições ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent className="px-6 pt-6">
            <div className="h-[350px] w-full">
              <ActivityLineChart />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

