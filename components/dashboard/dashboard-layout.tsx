"use client"

import { type ReactNode, useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, BarChart, Settings, User, LogOut, Menu, Bell, Search, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Efeito para detectar o tema do sistema
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light"
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return newTheme
    })
  }

  const routes = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <User className="h-5 w-5" />,
    },
  ]

  const NavItems = () => (
    <>
      <div className="px-3 py-4">
        <div className="mb-4 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
              <LayoutDashboard className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">DevDashboard</h2>
          </div>
        </div>

        <div className="mb-4 px-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar..." className="pl-8" />
          </div>
        </div>

        <div className="space-y-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === route.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground",
              )}
            >
              {route.icon}
              {route.name}
              {route.name === "Analytics" && (
                <Badge variant="outline" className="ml-auto bg-primary/10 text-xs">
                  Novo
                </Badge>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-4">
        <div className="rounded-lg border bg-card p-1">
          <div className="flex items-center gap-4 p-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
              <AvatarFallback>UD</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">Usuário Demo</span>
              <span className="text-xs text-muted-foreground">usuario@exemplo.com</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Opções</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar para desktop */}
      <aside className="hidden w-64 border-r bg-card lg:block">
        <div className="flex h-full flex-col">
          <NavItems />
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 shadow-sm">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <NavItems />
            </SheetContent>
          </Sheet>

          <div className="flex-1 lg:ml-4">
            <h1 className="text-xl font-semibold lg:hidden">Dashboard</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-auto">
                  {[1, 2, 3].map((i) => (
                    <DropdownMenuItem key={i} className="flex flex-col items-start py-2">
                      <div className="flex w-full items-center gap-2">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Bell className="h-3 w-3 text-primary" />
                        </div>
                        <span className="font-medium">Nova atualização disponível</span>
                        <span className="ml-auto text-xs text-muted-foreground">Agora</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Uma nova versão do sistema está disponível com melhorias de desempenho.
                      </p>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center text-center font-medium">Ver todas</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>UD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-6">{children}</div>
        </main>

        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          <p>© 2025 DevDashboard. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}

