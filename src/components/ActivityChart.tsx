import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useState, useEffect } from "react";

export const ActivityChart = () => {
  const [data, setData] = useState(() => {
    const hours = Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      members: Math.floor(Math.random() * 50) + 100,
    }));
    return hours;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev];
        const lastHour = newData[newData.length - 1].hour;
        newData.shift();
        newData.push({
          hour: (lastHour + 1) % 24,
          members: Math.floor(Math.random() * 50) + 100,
        });
        return newData;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">24h Activity</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="hour"
              tickFormatter={(hour) => `${hour}:00`}
              stroke="#94a3b8"
              fontSize={12}
            />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="members"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
              animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};