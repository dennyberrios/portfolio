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

export default function MonthlyGrowthChart() {
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

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
          {
            label: "Crescimento Mensal",
            data: [65, 59, 80, 81, 56, 90],
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgb(75, 192, 192)",
            tension: 0.4,
            pointBackgroundColor: "rgb(75, 192, 192)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(75, 192, 192)",
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            label: "Meta",
            data: [50, 55, 60, 65, 70, 75],
            fill: false,
            borderColor: "rgba(255, 99, 132, 0.7)",
            borderDash: [5, 5],
            tension: 0.4,
            pointBackgroundColor: "rgba(255, 99, 132, 0.7)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 99, 132, 0.7)",
            pointRadius: 3,
            pointHoverRadius: 5,
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
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              font: {
                size: 11,
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 11,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: 10,
              padding: 20,
              usePointStyle: true,
              pointStyle: "circle",
              font: {
                size: 11,
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleFont: {
              size: 13,
            },
            bodyFont: {
              size: 12,
            },
            padding: 10,
            cornerRadius: 4,
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

