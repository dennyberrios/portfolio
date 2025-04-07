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

    const config: ChartConfiguration = {
      type: "pie",
      data: {
        labels: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        datasets: [
          {
            data: [20, 15, 30, 25, 10],
            backgroundColor: [
              "rgb(54, 162, 235)", // Azul para HTML
              "rgb(75, 192, 192)", // Verde-água para CSS
              "rgb(153, 102, 255)", // Roxo para JavaScript
              "rgb(94, 53, 177)", // Roxo mais escuro para React
              "rgb(255, 159, 64)", // Laranja para Node.js
            ],
            borderColor: "white",
            borderWidth: 2,
            hoverOffset: 15,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

