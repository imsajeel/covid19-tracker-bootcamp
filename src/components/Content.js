import React from "react";
import Card from "./Card";
import Chart from "./Chart";

export default function Content({ data }) {
  if (data.TotalConfirmed) {
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = data;
    return (
      <div className="content">
        <b>&ensp; Word Wide data of COVID-19</b>
        <div className="cards">
          <Card
            title="Total Casses"
            value={TotalConfirmed}
            desc="These are numbers of total cases"
            status="blue"
          />
          <Card
            title="Active"
            value={TotalConfirmed - TotalDeaths - TotalRecovered}
            desc="These are numbers of active cases"
            status="yellow"
          />
          <Card
            title="Deaths"
            value={TotalDeaths}
            desc="These are numbers of deaths"
            status="red"
          />
          <Card
            title="Recovered"
            value={TotalRecovered}
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
