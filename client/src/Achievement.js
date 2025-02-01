import React, { useEffect } from 'react';
import './Achievementstyle.css';
import AchTimeline from './AchTimeline.json'
import * as d3 from 'd3';
const Achievement = () => {

  return (
    <div id="achievement-section">
      <h1 id="title">Achievement</h1>
      <img id="Achbackground" src="/Sky.png" alt="sky"/>
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
  
    const svg = d3.select("#chart")
      .append("svg")
      .attr("height", height)
      .attr("width", width);
  
    const yScale = d3.scaleTime()
      .domain([parseYear(2017), parseYear(2028)])
      .range([height - padding, 50]);
  
    const checkPoint = svg.selectAll("circle")
      .data(AchTimeline)
      .enter()
      .append("circle")
      .attr("id", (d, i) => "point-" + i)
      .attr("cx", (d, i) => {
        d.cx = ((Math.floor(Math.random() * 50) + 1) + i * 200) + 100; // Store cx
        return d.cx;
      })
      .attr("cy", (d, i) => yScale(parseYear(d.year)))
      .attr("r", 10)
      .attr("stroke", "rgb(220, 95, 0)")
      .attr("stroke-width", 3)
      .attr("fill", "white");
  
    // Append text labels as divs outside SVG
    const container = d3.select("#chart");
    container.selectAll(".label")
      .data(AchTimeline)
      .enter()
      .append("div")
      .attr("class", "label")
      .style("position", "absolute")
      .style("left", d => `${d.cx + 100}px`) // Position next to circle
      .style("top", d => `${yScale(parseYear(d.year)) +  50}px`) // Align vertically
      .style("background", "rgba(220, 95, 0,0.8)")
      .style("color","white")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("font-size", "14px")
      .style("border", "1px solid black")
      .style("display","flex")
      .style("text-align","left")
      .style("align-items","center")
      .html(d => d.name.map((item, index) => `${index + 1}. ${item}`).join("<br>"));
  
    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
      .attr("transform", `translate(${padding}, 0)`)
      .attr("id", "y-axis")
      .call(yAxis);
  
  }, []);
  
};

export { Achievement };