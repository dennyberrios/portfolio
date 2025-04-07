"use client"

import { useEffect, useRef } from "react"
import {
  Chart,
  type ChartConfiguration,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

export default function SkillsRadarChart() {
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
      type: "radar",
      data: {
        labels: ["React", "TypeScript", "Next.js", "CSS/Tailwind", "UI/UX", "Testing"],
        datasets: [
          {
            label: "2024",
            data: [70, 65, 60, 75, 55, 50],
            backgroundColor: "rgba(59, 130, 246, 0.3)",
            borderColor: "rgba(59, 130, 246, 0.8)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(59, 130, 246, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(59, 130, 246, 1)",
          },
          {
            label: "2025 (Projeção)",
            data: [85, 80, 90, 85, 70, 75],
            backgroundColor: "rgba(139, 92, 246, 0.3)",
            borderColor: "rgba(139, 92, 246, 0.8)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(139, 92, 246, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(139, 92, 246, 1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              display: false,
            },
            pointLabels: {
              font: {
                size: isMobile ? 10 : 12,
                weight: "bold",
              },
              color: "#64748b",
            },
            grid: {
              color: "rgba(100, 116, 139, 0.1)",
            },
            angleLines: {
              color: "rgba(100, 116, 139, 0.1)",
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: isMobile ? 10 : 12,
              padding: isMobile ? 10 : 20,
              usePointStyle: true,
              pointStyle: "circle",
              font: {
                size: isMobile ? 10 : 12,
              },
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
            displayColors: true,
          },
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

