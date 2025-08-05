import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Drink", value: 300 },
  { name: "Dessert", value: 300 },
  { name: "Other", value: 200 },
];

const COLORS = ["#60a5fa", "#facc15", "#34d399", "#f87171"]; // blue, yellow, green, red

const PieChartComponent = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
        Sales Distribution
      </h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="transition-all duration-300" />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
