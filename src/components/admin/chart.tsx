"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { useprojectCount } from "@/src/hooks/getcount";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const MyPieChart: React.FC = () => {
  const { data: countproject, isLoading } = useprojectCount();

  if (isLoading) return <p>Loading chart...</p>;

  const data = {
    labels: ["Available Projects","Working Projects", "Completed Projects"],
    datasets: [
      {
        label: "Projects",
        data: [
          countproject?.pendingproject?? 0,
          countproject?.Workingproject ?? 0,
          countproject?.completeproject ?? 0,
        ],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(160, 70, 18, 0.8)",
          "rgba(34, 197, 94, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 🔑 important for circle
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="w-[260px] h-[260px] flex items-center justify-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default MyPieChart;
