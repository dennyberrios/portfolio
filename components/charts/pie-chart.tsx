"use client"

import { useEffect, useRef } from "react"
import { Chart, type ChartConfiguration, PieController, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(PieController, ArcElement, Tooltip, Legend)

export default function SkillsPieChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Destruir o gráfico anterior se existir
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Verificar se estamos em um dispositivo móvel
    const isMobile = window.innerWidth < 768

    const config: ChartConfiguration = {
      type: "pie",
      data: {
        labels: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI Libraries", "Testing"],
        datasets: [
          {
            data: [30, 25, 20, 15, 5, 5],
            backgroundColor: [
              "rgba(59, 130, 246, 0.8)", // Azul para React
              "rgba(139, 92, 246, 0.8)", // Roxo para Next.js
              "rgba(6, 182, 212, 0.8)", // Ciano para TypeScript
              "rgba(236, 72, 153, 0.8)", // Rosa para Tailwind
              "rgba(245, 158, 11, 0.8)", // Amarelo para UI Libraries
              "rgba(16, 185, 129, 0.8)", // Verde para Testing
            ],
            borderColor: "white",
            borderWidth: 2,
            hoverOffset: isMobile ? 10 : 15,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: isMobile ? "bottom" : "right",
            labels: {
              padding: isMobile ? 10 : 15,
              usePointStyle: true,
              pointStyle: "circle",
              font: {
                size: isMobile ? 10 : 12,
              },
              boxWidth: isMobile ? 8 : 10,
            },
          },
          tooltip: {
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            titleFont: {
              size: isMobile ? 12 : 14,
            },
            bodyFont: {
              size: isMobile ? 11 : 13,
            },
            padding: isMobile ? 8 : 12,
            cornerRadius: 6,
            callbacks: {
              label: (context) => {
                const label = context.label || ""
                const value = context.formattedValue
                return `${label}: ${value}%`
              },
            },
          },
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    }

    chartInstance.current = new Chart(ctx, config)

    // Adicionar listener para redimensionamento
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
        chartInstance.current = new Chart(ctx, config)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

