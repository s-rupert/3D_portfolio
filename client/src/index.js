import React, { useEffect, useRef } from 'react'; // Importing useEffect and useRef
import ReactDOM from 'react-dom/client';
import './index.css';
import * as THREE from 'three'; // Importing the Three.js library

// Homepage component
function App() {
  return (
    <div>
      <ThreeScene />
    </div>
  );
}

const ThreeScene = () => {
  const sceneRef = useRef(null); // This will hold the reference to the DOM element where the 3D scene will be rendered.

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement); // Add the renderer's canvas to the DOM

    // Create a cube (geometry)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the cube for animation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} />; // Attach the scene to this div
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
