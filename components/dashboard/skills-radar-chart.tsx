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
} from "chart.js"

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend)

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

    const config: ChartConfiguration = {
      type: "radar",
      data: {
        labels: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        datasets: [
          {
            label: "2024",
            data: [65, 59, 80, 81, 56],
            backgroundColor: "rgba(94, 53, 177, 0.2)",
            borderColor: "rgb(94, 53, 177)",
            borderWidth: 2,
            pointBackgroundColor: "rgb(94, 53, 177)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(94, 53, 177)",
          },
          {
            label: "2025",
            data: [85, 75, 90, 80, 70],
            backgroundColor: "rgba(72, 209, 204, 0.2)",
            borderColor: "rgb(72, 209, 204)",
            borderWidth: 2,
            pointBackgroundColor: "rgb(72, 209, 204)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(72, 209, 204)",
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
                size: 12,
                weight: "bold",
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            angleLines: {
              color: "rgba(0, 0, 0, 0.1)",
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

