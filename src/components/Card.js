import React from "react";
import CountUp from "react-countup";

export default function Card({ title, value, status }) {
  return (
    <div className="card">
      <div className={`cardTitle ${status}`}>{title}</div>
      <div className="cardValue">
        <CountUp start={0} end={value} duration={1.75} separator="," />
      </div>
      <div style={{ margin: "10px" }}>These are number of total Deaths</div>
    </div>
  );
}
