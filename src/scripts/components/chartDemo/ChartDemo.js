import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartDemo = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Used to save Chart instances to prevent repeated rendering
  useEffect(() => {
    const data = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          type: "bar",
          label: "Bar Dataset",
          data: [10, 20, 30, 40],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          type: "line",
          label: "Line Dataset",
          data: [50, 50, 50, 55],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
        },
      ],
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: "scatter",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function: destroy the Chart instance when the component is uninstalled
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "800px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartDemo;
