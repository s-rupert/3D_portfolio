import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three'; // Use `* as THREE` to import all THREE.js features
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function App() {
  return (
    <div>
      <ThreeScene />
    </div>
  );
}

const ThreeScene = () => {
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10; // Set the camera position to view the scene

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue'); // Ensure you use `new` with Color

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);

    document.body.appendChild(renderer.domElement); // Append the renderer to the DOM

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const loader = new GLTFLoader();
    loader.load('/cartoon_aircraft.glb', (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('An error occurred loading the GLTF model:', error);
    });
    const animate = () => {
      requestAnimationFrame(animate);
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.body.removeChild(renderer.domElement); // Clean up the renderer on unmount
    };
  }, []);

  return null;
};

export { ThreeScene };