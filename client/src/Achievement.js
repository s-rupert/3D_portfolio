import React, { useEffect } from 'react';
import './Achievementstyle.css';
import AchTimeline from './AchTimeline.json'
import * as d3 from 'd3';
// import * as THREE from 'three'; // Use `* as THREE` to import all THREE.js features
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
  // const chartRef = useRef(null);
  useEffect(() => {
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    d3.select("#chart").selectAll("*").remove();
    const parseYear = d3.timeParse("%Y");
    const height = screenHeight*95/100, width = screenWidth*95/100, padding = 60;
  
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
        d.cx = ((Math.floor(Math.random() * 50) + 1) + i * 200) + 200; // Store cx
        return d.cx;
      })
      .attr("cy", (d, i) => yScale(parseYear(d.year)))
      .attr("r", 10)
      .attr("stroke", "rgb(220, 95, 0)")
      .attr("stroke-width", 3)
      .attr("fill", "white");

      let Scrollactive=true;
      const container = d3.select("#chart");
      container.selectAll(".image")
      .data(AchTimeline)
      .enter()
      .append("img")
      .attr("id","flag")
      .attr("src", "./Redflag.gif")
      .attr("alt", "Flag Image")
      .style("width", "100px")
      .style("height", "100px")
      .style("margin-right", "10px")
      .style("position", "absolute")
      .style("left", d => `${d.cx+15}px`) // Position next to circle
      .style("top", d => `${yScale(parseYear(d.year))-38}px`)
      .style("display", d=> {
        console.log(d.name);
         return d.name=='Upcoming'?"none":"block"})

         container.selectAll(".image")
         .data(AchTimeline)
         .enter()
         .append("img")
         .attr("id","Cscroll")
         .attr("src", "./Scrollclose.png")
         .attr("alt", "Flag Image")
         .style("width", "100px")
         .style("height", "100px")
         .style("margin-right", "10px")
         .style("position", "absolute")
         .style("left", d => `${d.cx}px`)
         .style("top", d => `${yScale(parseYear(d.year))+35}px`)
         .style("display", d=> {
           console.log(d.name);
            return d.name=='Upcoming'?"none":"block"})
          .on("click", function(event, d) {
            const imgElement = d3.select(this);
             if(Scrollactive){
              imgElement.attr("src", "./Scrollopen.png")
              .style("width", "500px")
              .style("height", "500px")
              Scrollactive=false;
            }else{
              imgElement.attr("src", "./Scrollclose.png")
              .style("width", "100px")
              .style("height", "100px")
              Scrollactive=true;
            }
              
            });


  


    
  
  
    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
      .attr("transform", `translate(${padding}, 0)`)
      .attr("id", "y-axis")
      .call(yAxis);
  
  }, []);
  
  
};
// Threedflag
// const ThreeFlag = ({ id }) => {
//   useEffect(() => {
//     const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
//     camera.position.z = 10;
    
//     const scene = new THREE.Scene();
//     scene.background = null;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);  // Use the full window size or adjust as needed

//     const ambientLight = new THREE.AmbientLight(0xffffff, 5);
//     scene.add(ambientLight);

//     const canvasElement = document.getElementById(id);
//     if (canvasElement) {
//       canvasElement.appendChild(renderer.domElement);
//     }
//     const loader = new GLTFLoader();
//     loader.load('/golf_flag.glb', (gltf) => {
//       gltf.scene.rotation.set(1,3.4,0);
//       gltf.scene.scale.set(0.05,0.05,0.05);
//       scene.add(gltf.scene);
//     }, undefined, (error) => {
//       console.error('An error occurred loading the GLTF model:', error);
//     });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       if (canvasElement) {
//         canvasElement.removeChild(renderer.domElement);
//       }
//     };
//   }, [id]);

//   return <div id={id} />;
// };

export { Achievement };