import React, { useEffect } from 'react';
import './Achievementstyle.css';
import AchTimeline from './AchTimeline.json'
import * as d3 from 'd3';
const Achievement = () => {
  return (
    <div id="achievement-section">
      <h1 id="title">Achievement</h1>
      <p id="a-detail">Click on each Scroll to see Achievements</p>
      <div id="chart"></div>
      <Chart />
    </div>
  )
}

const Chart = () => {
  useEffect(() => {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    d3.select("#chart").selectAll("*").remove();
    const parseYear = d3.timeParse("%Y");
    const height = screenHeight * 65 / 100, width = screenWidth * 65 / 100, padding = 60;
  
    const svg = d3.select("#chart")
      .append("svg")
      .attr("height", height)
      .attr("width", width);
  
    const xScale = d3.scaleLinear()
      .domain([16, 24])
      .range([padding, width - padding]);
  
    const yScale = d3.scaleTime()
      .domain([parseYear(2017), parseYear(2028)])
      .range([height - padding, 50]);
  
    const checkPoint = svg.selectAll("circle")
      .data(AchTimeline)
      .enter()
      .append("circle")
      .attr("class", (d, i) => "point-" + i)
      .attr("cx", (d, i) => xScale(d.age))
      .attr("cy", (d, i) => yScale(parseYear(d.year)) - 30)
      .attr("r", screenWidth*0.8/100)
      .attr("stroke", "rgb(220, 95, 0)")
      .attr("stroke-width", 3)
      .attr("fill", "black")
      .style("display", d => {
        return d.name == 'Upcoming' || d.name == "Not Available" ? "none" : "block"
      });
  
    // Define the line generator
    const line = d3.line()
      .x(d => xScale(d.age))
      .y(d => yScale(parseYear(d.year)) - 30);
  
    // Create a marker for the arrowhead
    svg.append("defs")
      .append("marker")
      .attr("id", "arrowhead")          // ID for the marker
      .attr("viewBox", "0 0 10 10")     // Viewbox for the arrow shape
      .attr("refX", 1)                 // Position of the arrowhead along the line
      .attr("refY", 5)                  // Position of the arrowhead vertically
      .attr("markerWidth", 2)          // Width of the arrowhead
      .attr("markerHeight", 2)         // Height of the arrowhead
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 Z") 
  
    // Add the path (line) to connect the dots with the arrowhead
    svg.append("path")
      .data([AchTimeline])
      .attr("d", line)
      .attr("id", "line")
      .attr("marker-end", "url(#arrowhead)");
      
    let Scrollactive = true;
    const container = d3.select("#chart");
    container.selectAll(".image")
      .data(AchTimeline)
      .enter()
      .append("img")
      .attr("id", "flag")
      .attr("src", "./Redflag.gif")
      .attr("alt", "Flag Image")
      .style("width", screenWidth*5/100+"px")
      .style("height", screenWidth*5/100+"px")
      .style("position", "absolute")
      .style("left", d => `${xScale(d.age)+screenWidth*15.5/100}px`)
      .style("top", d => `${yScale(parseYear(d.year))}px`)
      .style("display", d => {
        return d.name == 'Upcoming' || d.name == "Not Available" ? "none" : "block"
      });
  
    container.selectAll(".image")
      .data(AchTimeline)
      .enter()
      .append("img")
      .attr("id", "Cscroll")
      .attr("src", "./Scrolls/Scrollclose.png")
      .attr("alt", "Flag Image")
      .style("width", screenWidth*5/100+"px")
      .style("height", screenWidth*5/100+"px")
      .style("position", "absolute")
      .style("left", d => `${xScale(d.age)+screenWidth*15/100}px`)
      .style("top", d => `${yScale(parseYear(d.year))+screenWidth*3/100}px`)
      .style("display", d => {
        return d.name == 'Upcoming' || d.name == "Not Available" ? "none" : "block"
      })
      .on("click", function (event, d) {
        const imgElement = d3.select(this);
        if (Scrollactive) {
          imgElement.attr("src", d => {
            console.log(d.img)
            return d.img
          })
            .attr("id", "Oscroll")
            .style("width", "500px")
            .style("height", "500px")
            .style("top", (d, i) => 400 + "px");
          Scrollactive = false;
        } else {
          imgElement.attr("src", "./Scrolls/Scrollclose.png")
            .attr("id", "Cscroll")
            .style("width", screenWidth*5/100+"px")
            .style("height", screenWidth*5/100+"px")
            .style("top", d => `${yScale(parseYear(d.year)) + 35}px`);
          Scrollactive = true;
        }
      });
  
    const xAxis = d3.axisBottom(xScale);
    svg.append("g")
      .attr("transform", `translate(0,${height - padding})`)
      .attr("id", "y-axis")
      .call(xAxis);
  
    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
      .attr("transform", `translate(${padding}, 0)`)
      .attr("id", "y-axis")
      .call(yAxis);
  
  }, []);
  


};

export { Achievement };