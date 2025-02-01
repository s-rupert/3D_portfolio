import React, { useEffect } from 'react';
import './Achievementstyle.css';
import AchTimeline from './AchTimeline.json'
import * as d3 from 'd3';

const Achievement = () => {

  return (
    <div id="achievement-section">
      <h1 id="title">Achievement</h1>
      <div id="chart"></div>
      <Chart />
    </div>
  )
}

const Chart = () => {
  useEffect(() => {
    d3.select("#chart").selectAll("*").remove(); 
    const parseYear = d3.timeParse("%Y");
    const height = 650, width = 1400, padding = 60;

    const tooltip = d3.select("#chart")
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0)

    const svg = d3.select("#chart")
      .append("svg")
      .attr("height", height)
      .attr("width", width)

    const yScale = d3.scaleTime()
      .domain([parseYear(2018), parseYear(2028)])
      .range([height - padding, 50])

    const checkPoint = svg.selectAll("circle")
      .data(AchTimeline)
      .enter()
      .append("circle")
      .attr("id", (d, i) => "point-" + i)
      .attr("cx", (d, i) => ((Math.floor(Math.random() * 50) + 1) + i * 200) + 100)
      .attr("cy", (d, i) => yScale(parseYear(d.year)))
      .attr("r", 10)
      .attr("stroke", "rgb(220, 95, 0)")
      .attr("stroke-width", 3)
      .attr("fill", "white")

    const yAxis = d3.axisLeft(yScale)
    svg.append("g")
      .attr("transform", `translate( ${padding},0)`)
      .attr("id", "y-axis")
      .call(yAxis);

  }, [])
};

export { Achievement };