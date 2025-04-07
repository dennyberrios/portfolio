"use client"

import { type ReactNode, useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  User,
  Code,
  FileText,
  Mail,
  Menu,
  Bell,
  Search,
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Sparkles,
  Cpu,
} from "lucide-react"
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

interface PortfolioLayoutProps {
  children: ReactNode
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const pathname = usePathname()
  const [theme, setTheme] = useState<"light" | "dark">("dark")

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
      name: "Dashboard",
      path: "#dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Projetos",
      path: "#projects",
      icon: <Code className="h-5 w-5" />,
    },
    {
      name: "Sobre Mim",
      path: "#about",
      icon: <User className="h-5 w-5" />,
    },
    {
      name: "Blog",
      path: "#blog",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Contato",
      path: "#contact",
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/yourusername", label: "Twitter" },
  ]

  const NavItems = () => (
    <>
      <div className="px-3 py-4">
        <div className="mb-6 flex items-center px-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-primary p-2 shadow-lg">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight gradient-text">DevDannyCode</h2>
              <p className="text-xs text-muted-foreground">Desenvolvedor Full Stack</p>
            </div>
          </div>
        </div>

        <div className="mb-6 px-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar..." className="pl-9 rounded-lg border-muted-foreground/20 bg-muted/50" />
          </div>
        </div>

        <div className="space-y-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                pathname === route.path
                  ? "bg-gradient-primary text-white shadow-md"
                  : "hover:bg-muted text-foreground hover:translate-x-1",
              )}
            >
              {route.icon}
              {route.name}
              {route.name === "Projetos" && (
                <Badge variant="outline" className="ml-auto bg-white/20 text-xs border-0 text-white">
                  Novo
                </Badge>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-4">
        <div className="rounded-lg border bg-card p-1 gradient-border">
          <div className="flex items-center gap-4 p-3">
            <Avatar className="border-2 border-primary/20">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
              <AvatarFallback className="bg-gradient-primary text-white">AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">Alex Developer</span>
              <span className="text-xs text-muted-foreground">alex@exemplo.com</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                  <User className="h-4 w-4" />
                  <span className="sr-only">Opções</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 border-primary/20">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4 text-primary" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Cpu className="mr-2 h-4 w-4 text-secondary" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4 text-code-pink" />
                  <span>Contato</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="flex min-h-screen bg-background bg-grid-pattern">
      {/* Sidebar para desktop */}
      <aside className="hidden w-72 border-r border-primary/10 bg-card/80 backdrop-blur-sm lg:block">
        <div className="flex h-full flex-col">
          <NavItems />
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-primary/10 bg-background/80 backdrop-blur-sm px-4 shadow-sm">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-primary/20">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 border-primary/20">
              <NavItems />
            </SheetContent>
          </Sheet>

          <div className="flex-1 lg:ml-4">
            <h1 className="text-xl font-bold lg:hidden gradient-text">DevDannyCode</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex space-x-1">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:bg-primary/10">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary/10">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary text-[10px] text-white animate-pulse-glow">
                    2
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 border-primary/20">
                <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-auto">
                  {[1, 2].map((i) => (
                    <DropdownMenuItem key={i} className="flex flex-col items-start py-2 cursor-pointer">
                      <div className="flex w-full items-center gap-2">
                        <div className="rounded-full bg-gradient-primary p-1">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                        <span className="font-medium">Novo projeto disponível</span>
                        <span className="ml-auto text-xs text-muted-foreground">Agora</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Um novo projeto foi adicionado ao seu portfólio.
                      </p>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center text-center font-medium cursor-pointer">
                  Ver todas
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex">
              <Avatar className="h-8 w-8 border-2 border-primary/20">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback className="bg-gradient-primary text-white">AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-8 px-4 md:px-6">{children}</div>
        </main>

        <footer className="border-t border-primary/10 py-6 text-center text-sm text-muted-foreground bg-card/50">
          <div className="container mx-auto">
            <p className="mb-2">© {new Date().getFullYear()} DevDannyCode. Todos os direitos reservados.</p>
            <div className="flex justify-center space-x-4 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

