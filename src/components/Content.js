import React from "react";
import Card from "./Card";
import Chart from "./Chart";

export default function Content({ data }) {
  if (data.confirmed) {
    const { confirmed, deaths, recovered } = data;
    return (
      <div className="content">
        <b>&ensp; Word Wide data of COVID-19</b>
        <div className="cards">
          <Card
            title="Total Casses"
            value={confirmed.value}
            desc="These are numbers of total cases"
            status="blue"
          />
          <Card
            title="Active"
            value={confirmed.value - deaths.value - recovered.value}
            desc="These are numbers of active cases"
            status="yellow"
          />
          <Card
            title="Deaths"
            value={deaths.value}
            desc="These are numbers of deaths"
            status="red"
          />
          <Card
            title="Recovered"
            value={recovered.value}
            desc="These are numbers of recovered cases"
            status="green"
          />
        </div>
        <div>
          <Chart />
        </div>
      </div>
    );
  } else {
    return (
      <div className="content">
        <h1>Loading.....</h1>
      </div>
    );
  }
}
