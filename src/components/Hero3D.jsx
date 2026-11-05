import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080e, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);
    setIsLoaded(true);

    // Master Group for mouse drag & lerping
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Central Hero Polyhedron (Icosahedron)
    const polyGeometry = new THREE.IcosahedronGeometry(1.5, 0);
    
    // Inner crystal material
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c1324,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.18,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(polyGeometry, innerMaterial);
    worldGroup.add(innerMesh);

    // Outer Glowing Wireframe Cage
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.53, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    worldGroup.add(wireframeMesh);

    // Secondary Gold Geodesic Frame (Chronos / Hourglass Motif)
    const goldWireframeGeo = new THREE.OctahedronGeometry(1.85, 0);
    const goldWireframeMat = new THREE.MeshBasicMaterial({
      color: 0xe5c158,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const goldWireframeMesh = new THREE.Mesh(goldWireframeGeo, goldWireframeMat);
    worldGroup.add(goldWireframeMesh);

    // 2. Orbital Chronos Rings (Representing "Kairos" - Perfect Time)
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    worldGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.65, 0.018, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe5c158,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    worldGroup.add(ring2);

    // 3. Orbital Data Nodes (Little Glowing Spheres on Rings)
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f2fe });
    const nodeMatGold = new THREE.MeshBasicMaterial({ color: 0xffe072 });

    const nodes = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const mesh = new THREE.Mesh(nodeGeo, i % 2 === 0 ? nodeMatCyan : nodeMatGold);
      mesh.userData = { radius: 2.35, angle: angle, speed: 0.012 * (i % 2 === 0 ? 1 : -1) };
      nodeGroup.add(mesh);
      nodes.push(mesh);
    }
    worldGroup.add(nodeGroup);

    // 4. Procedural Kinetic Particle Wave / Constellation
    const particleCount = 850;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Distribute in a spherical cloud around center
      const r = 3.0 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
      particleScales[i / 3] = Math.random() * 0.04 + 0.01;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Canvas particle texture generator
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 242, 254, 0.7)');
      gradient.addColorStop(0.7, 'rgba(79, 172, 254, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.09,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1020, 2.5);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f2fe, 3, 20);
    cyanPointLight.position.set(3, 4, 3);
    scene.add(cyanPointLight);

    const goldPointLight = new THREE.PointLight(0xe5c158, 2.5, 20);
    goldPointLight.position.set(-3, -3, 2);
    scene.add(goldPointLight);

    // Mouse Interaction and Lerp Physics
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.45;
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleDragMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      worldGroup.rotation.y += deltaX * 0.007;
      worldGroup.rotation.x += deltaY * 0.007;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleDragMove);

    // Touch support for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        mouse.targetX = x * 0.35;
        mouse.targetY = y * 0.35;
      }
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Polyhedron idle rotation + mouse influence
      innerMesh.rotation.y = elapsedTime * 0.25 + mouse.x;
      innerMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouse.y;

      wireframeMesh.rotation.y = elapsedTime * 0.25 + mouse.x;
      wireframeMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouse.y;

      goldWireframeMesh.rotation.y = -elapsedTime * 0.18 + mouse.x * 0.7;
      goldWireframeMesh.rotation.z = Math.cos(elapsedTime * 0.2) * 0.25;

      // Chronos Rings rotation
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.28;

      // Nodes on ring
      nodes.forEach((node) => {
        node.userData.angle += node.userData.speed;
        node.position.x = Math.cos(node.userData.angle) * node.userData.radius;
        node.position.y = Math.sin(node.userData.angle) * node.userData.radius * 0.5;
        node.position.z = Math.sin(node.userData.angle) * node.userData.radius * 0.8;
      });

      // Particle wave subtle drift
      particles.rotation.y = elapsedTime * 0.04 + mouse.x * 0.2;
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.08 + mouse.y * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      polyGeometry.dispose();
      innerMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      goldWireframeGeo.dispose();
      goldWireframeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatGold.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] md:h-[620px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Interactive 3D Kairos Matrix (Drag or move mouse to rotate)"
      />

      {/* Interactive Micro-badge Overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 shadow-lg text-[11px] font-mono text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>Interactive WebGL 3D • Drag to Inspect</span>
        </div>
      </div>
    </div>
  );
}
