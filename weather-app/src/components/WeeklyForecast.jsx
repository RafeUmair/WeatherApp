import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function WeeklyForecast({ forecast }) {
  const grouped = forecast.reduce((acc, item) => {
    const day = new Date(item.dt_txt).toLocaleDateString("en-AU", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    if (!acc[day]) acc[day] = { day, total: 0, count: 0 };
    acc[day].total += item.main.temp;
    acc[day].count += 1;
    return acc;
  }, {});

  const dailyData = Object.values(grouped)
    .map(d => ({
      day: d.day,
      temp: +(d.total / d.count).toFixed(1)
    }))
    .slice(0, 7); 

  return (
    <div className="card p-4 mt-4" style={{ background: "#1a1f2e", color: "#fff" }}>
      <h3 className="text-center mb-4">7-Day Forecast</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dailyData}>
          <CartesianGrid stroke="#444" />
          <XAxis dataKey="day" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip contentStyle={{ backgroundColor: "#0d1117", color: "#fff" }} />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#4da6ff"
            strokeWidth={3}
            dot={{ r: 6, fill: "#4da6ff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeeklyForecast;
