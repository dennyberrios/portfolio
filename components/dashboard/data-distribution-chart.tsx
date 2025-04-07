"use client"

import { useEffect, useRef } from "react"
import {
  Chart,
  type ChartConfiguration,
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

Chart.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend)

export default function DataDistributionChart() {
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
      type: "polarArea",
      data: {
        labels: ["Desenvolvimento", "Design", "Marketing", "Vendas", "Suporte"],
        datasets: [
          {
            data: [11, 16, 7, 13, 9],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
              "rgb(75, 192, 192)",
              "rgb(153, 102, 255)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            ticks: {
              display: false,
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              padding: 15,
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
          },
        },
        animation: {
          animateScale: true,
          animateRotate: true,
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

