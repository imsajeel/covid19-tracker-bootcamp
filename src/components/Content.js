import React from "react";
import Card from "./Card";

export default function Content({ data }) {
  if (!data.TotalConfirmed)
    return (
      <div className="content">
        <h1>Loading.....</h1>
      </div>
    );
  else {
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = data;
    return (
      <div className="content">
        <b>Word Wide data of COVID-19</b>
        <div className="cards">
          <Card
            title="Total Casses"
            value={TotalConfirmed}
            desc="These are number of total cases"
            status="blue"
          />
          <Card
            title="Active"
            value={TotalConfirmed - TotalDeaths - TotalRecovered}
            desc="These are number of total active cases"
            status="yellow"
          />
          <Card
            title="Deaths"
            value={TotalDeaths}
            desc="These are number of total deaths"
            status="red"
          />
          <Card
            title="Recovered"
            value={TotalRecovered}
            desc="These are number of total recovered cases"
            status="green"
          />
        </div>
      </div>
    );
  }
}
