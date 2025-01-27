import React, { useEffect } from 'react';
import * as THREE from 'three'; // Use `* as THREE` to import all THREE.js features
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeScene = ({ id }) => { // Accept `id` as a prop
  useEffect(() => {
    // Set up the camera
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10; // Set the camera position to view the scene

    // Create the scene
    const scene = new THREE.Scene();
    scene.background = null; // Ensure the scene has no background

    // Create the renderer and set its size to window size
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);  // Use the full window size or adjust as needed

    // Add some basic lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);

    // Get the DOM element by ID and append the renderer's canvas to it
    const canvasElement = document.getElementById(id);
    if (canvasElement) {
      canvasElement.appendChild(renderer.domElement);
    }

    // Add orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.update();

    // Load a GLTF model
    const loader = new GLTFLoader();
    loader.load('/cartoon_aircraft.glb', (gltf) => {
      gltf.scene.position.set(2,0.5,2);
      gltf.scene.rotation.set(0.510,0.5,0);
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('An error occurred loading the GLTF model:', error);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // controls.update(); // Update the controls
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function to remove the canvas when the component unmounts
    return () => {
      if (canvasElement) {
        canvasElement.removeChild(renderer.domElement);
      }
    };
  }, [id]); // Effect will run when `id` changes

  return <div id={id} style={{ width: '100%', height: '100%' }} />; // Ensure the container div has a size
};

export { ThreeScene };
