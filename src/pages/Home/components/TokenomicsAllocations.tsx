import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Airdrops", value: 1, color: "#8a56d3" },
  { name: "Early Backers/Angels", value: 2, color: "#9c27b0" },
  { name: "Seed", value: 3, color: "#ab47bc" },
  { name: "Pre-Sale 1", value: 5, color: "#ba68c8" },
  { name: "Pre-Sale 2", value: 7, color: "#ce93d8" },
  { name: "Public Sale", value: 15, color: "#e1bee7" },
  { name: "Founders / Team", value: 10, color: "#ede7f6" },
  { name: "Grants", value: 10, color: "#d1c4e9" },
  { name: "Advisors", value: 10, color: "#b39ddb" },
  { name: "Strategic Partners", value: 10, color: "#9575cd" },
  { name: "Reserve", value: 7, color: "#7e57c2" },
  { name: "Community", value: 3, color: "#673ab7" },
  { name: "Foundation", value: 2, color: "#5e35b1" },
  { name: "Incentivization", value: 1, color: "#512da8" },
  { name: "Liquidity Pool", value: 3, color: "#673ab7" },
];

const RADIAN = Math.PI / 180;

const RenderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomLegend = ({ payload }) => {
  return (
    <ul className="flex flex-col gap-2 p-0 m-0 text-sm text-white list-none">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center mb-2">
          <span
            className="block w-5 h-5 mr-2 rounded-sm"
            style={{ background: entry.color }}
          ></span>
          <span className="text-xl">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const DonutChart = () => {
  return (
    <div
      className="chart-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: "90vh",
      }}
    >
      <ResponsiveContainer width="80%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={RenderCustomizedLabel}
            outerRadius="80%"
            innerRadius="40%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={30}
            radius={10}
            content={<CustomLegend />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const TokenomicsAllocations = () => {
  return (
    <div>
      <h2 className="mb-0 text-2xl font-bold text-center text-white md:text-6xl">
        Tokenomics - Allocations
      </h2>

      <div className="flex items-center justify-center w-full">
        <DonutChart />
      </div>

      <div className="flex flex-col gap-2 text-3xl font-bold text-center text-white">
        <p>Initial Token Allocations & Vesting Schedules</p>
        <p className="font-normal">
          Sum = 100.00% Amount = 1,500,000,000{" "}
          <span className="text-3xl">HypeX</span>
        </p>
      </div>
    </div>
  );
};

export default TokenomicsAllocations;
