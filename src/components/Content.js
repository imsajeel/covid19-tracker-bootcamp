import React from "react";
import Card from "./Card";

export default function Content() {
  return (
    <div className="content">
      <b>Word Wide data of COVID-19</b>
      <div className="cards">
        <Card title="Total Casses" value="321" className="a" status="blue" />
        <Card title="Active" value="32211" className="a" status="yellow" />
        <Card title="Deaths" value="3212132323" className="a" status="red" />
        <Card title="Recovered" value="32211" className="a" status="green" />
      </div>
      <b>Content</b>
    </div>
  );
}
