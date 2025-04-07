"use client"

import { TrendingUp, Users, Clock, Award, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden border-l-4 border-l-green-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Projetos Concluídos</CardTitle>
          <div className="rounded-full bg-muted p-2">
            <Award className="h-4 w-4 text-green-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-green-500 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              12%
            </span>
            <span className="ml-1">desde o último mês</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-l-4 border-l-blue-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Horas Trabalhadas</CardTitle>
          <div className="rounded-full bg-muted p-2">
            <Clock className="h-4 w-4 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">164</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-green-500 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              8%
            </span>
            <span className="ml-1">desde o último mês</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-l-4 border-l-purple-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
          <div className="rounded-full bg-muted p-2">
            <Users className="h-4 w-4 text-purple-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,482</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-green-500 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              24%
            </span>
            <span className="ml-1">desde o último mês</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-l-4 border-l-amber-500">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Taxa de Crescimento</CardTitle>
          <div className="rounded-full bg-muted p-2">
            <TrendingUp className="h-4 w-4 text-amber-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">32.5%</div>
          <div className="flex items-center pt-1 text-xs text-muted-foreground">
            <span className="flex items-center text-red-500 font-medium">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              3%
            </span>
            <span className="ml-1">desde o último mês</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

