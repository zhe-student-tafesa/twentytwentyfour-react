import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartDemo = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Used to save Chart instances to prevent repeated rendering
  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
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
    <div style={{ width: '800px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartDemo;
