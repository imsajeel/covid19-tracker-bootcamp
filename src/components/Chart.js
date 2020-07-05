import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api/api";
import { Line } from "react-chartjs-2";

export default function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChat = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div>
      <br />
      <br />
      <b>Chart</b>
      <div className="chartBox">{lineChat}</div>
    </div>
  );
}
