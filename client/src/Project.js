import React, { useEffect, useState } from 'react';
import './Projectstyle.css';

const Project = ()=>{
    return(
        <div id="project-section">
            <p id="title">Project</p>
            <div id="options">
                <button id="button-active">All</button>
                <button id="button">JavaScript</button>
                <button id="button">Database</button>
                <button id="button">Blender</button>
                <button id="button">Java</button>
            </div>
        </div>
    )
}
export { Project };