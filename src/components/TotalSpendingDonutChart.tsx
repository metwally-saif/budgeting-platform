import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";
import { Box } from "@mui/material";
import { useCurrency } from "../utils/get-currency";

declare module "chart.js" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType> {
    customText?: {
      totalSpending: number;
      currency: string;
    };
  }
}

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  data: { label: string; value: number }[];
  totalSpending: number;
}
// Custom plugin to display total spending in the center of the donut
const centerTextPlugin: Plugin = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    const totalSpending =
      chart.config?.options?.plugins?.customText?.totalSpending;
    const currency = chart.config?.options?.plugins?.customText?.currency;

    if (ctx && totalSpending !== undefined) {
      ctx.save();
      ctx.font = " 15px Arial";
      ctx.fillStyle = "#00000"; // Text color
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const centerX = width / 2;
      const centerY = height / 2;
      ctx.fillText("Total Spending", centerX, centerY);
      ctx.fillText(
        `${currency}${totalSpending.toFixed(2)}`,
        centerX,
        centerY + 20,
      );
      ctx.restore();
    }
  },
};

ChartJS.register(centerTextPlugin);
const DonutChart: React.FC<DonutChartProps> = ({ data, totalSpending }) => {
  const currency = useCurrency();
  // Prepare chart data for Doughnut
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Spending by Category",
        data: data.map((item) => item.value),
        backgroundColor: [
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderWidth: 0,
        cutout: 100,
      },
    ],
  };

  // Options for Doughnut
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (tooltipItem: any) {
            const value = Number(tooltipItem.raw);
            return `${currency}${value.toFixed(2)}`;
          },
        },
      },
      customText: {
        totalSpending,
        currency,
      },
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Box sx={{ width: "100%", height: "500px" }}>
        <Doughnut data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default DonutChart;
