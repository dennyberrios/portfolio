"use client"

import { useEffect, useRef } from "react"
import {
  Chart,
  type ChartConfiguration,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

export default function ActivityLineChart() {
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

    // Ajustar os dados para dispositivos móveis (menos pontos)
    const labels = isMobile
      ? ["Jan", "Mar", "Mai", "Jul", "Set", "Nov"]
      : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    const commitsData = isMobile ? [25, 40, 50, 55, 75, 95] : [25, 32, 40, 35, 50, 65, 55, 60, 75, 68, 80, 95]

    const prData = isMobile ? [5, 12, 15, 18, 25, 35] : [5, 8, 12, 10, 15, 20, 18, 22, 25, 30, 28, 35]

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Commits",
            data: commitsData,
            fill: true,
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderColor: "rgba(59, 130, 246, 0.8)",
            tension: 0.4,
            pointBackgroundColor: "rgba(59, 130, 246, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(59, 130, 246, 1)",
            pointRadius: isMobile ? 3 : 4,
            pointHoverRadius: isMobile ? 4 : 6,
          },
          {
            label: "Pull Requests",
            data: prData,
            fill: false,
            borderColor: "rgba(236, 72, 153, 0.8)",
            tension: 0.4,
            pointBackgroundColor: "rgba(236, 72, 153, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(236, 72, 153, 1)",
            pointRadius: isMobile ? 3 : 4,
            pointHoverRadius: isMobile ? 4 : 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(100, 116, 139, 0.1)",
            },
            ticks: {
              font: {
                size: isMobile ? 10 : 12,
              },
              color: "#64748b",
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: isMobile ? 10 : 12,
              },
              color: "#64748b",
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
        interaction: {
          mode: "index",
          intersect: false,
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

