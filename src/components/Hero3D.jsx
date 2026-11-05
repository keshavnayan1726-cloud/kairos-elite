import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer (Natural Luxury Light Setup)
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 580;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    setIsLoaded(true);

    // Master Group for mouse drag & lerping
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Floating Robot Assembly Root (for hover/bobbing physics)
    const robotGroup = new THREE.Group();
    masterGroup.add(robotGroup);

    // 2. Premium Luxury Material Palette
    // Brushed Metallic Gold
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4B06A,
      metalness: 0.88,
      roughness: 0.26,
    });

    // Polished Warm Brass Plating
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xC49942,
      metalness: 0.92,
      roughness: 0.18,
    });

    // Matte Ceramic White Armor Plating
    const matteWhiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xF8F7F4,
      metalness: 0.08,
      roughness: 0.38,
    });

    // Obsidian Dark Carbon Chassis / Joints
    const obsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A1C22,
      metalness: 0.75,
      roughness: 0.45,
    });

    // Glowing Warm Golden Optic Visor Material
    const opticGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFE082,
    });

    // 3. Constructing the Articulated Transformer AI Assistant

    // A. Torso & Chest Chassis
    const chestGroup = new THREE.Group();
    chestGroup.position.set(0, 0.7, 0);
    robotGroup.add(chestGroup);

    // Center Torso Core
    const torsoCoreGeo = new THREE.CylinderGeometry(0.45, 0.35, 1.1, 8);
    const torsoCore = new THREE.Mesh(torsoCoreGeo, obsidianMaterial);
    chestGroup.add(torsoCore);

    // Pectoral Armor Plates (Left & Right Brushed Gold with beveled feel)
    const chestPlateGeo = new THREE.BoxGeometry(0.48, 0.55, 0.32);
    const leftPectoral = new THREE.Mesh(chestPlateGeo, goldMaterial);
    leftPectoral.position.set(-0.3, 0.22, 0.24);
    leftPectoral.rotation.set(0.12, 0.18, -0.06);
    chestGroup.add(leftPectoral);

    const rightPectoral = new THREE.Mesh(chestPlateGeo, goldMaterial);
    rightPectoral.position.set(0.3, 0.22, 0.24);
    rightPectoral.rotation.set(0.12, -0.18, 0.06);
    chestGroup.add(rightPectoral);

    // Matte White Center Sternum Crest
    const sternumGeo = new THREE.BoxGeometry(0.22, 0.65, 0.35);
    const sternum = new THREE.Mesh(sternumGeo, matteWhiteMaterial);
    sternum.position.set(0, 0.18, 0.27);
    chestGroup.add(sternum);

    // Kairos Core Reactor (Glowing Warm Golden Heart)
    const coreRingGeo = new THREE.TorusGeometry(0.14, 0.025, 16, 32);
    const coreRing = new THREE.Mesh(coreRingGeo, brassMaterial);
    coreRing.position.set(0, 0.18, 0.44);
    chestGroup.add(coreRing);

    const coreEnergyGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const coreEnergy = new THREE.Mesh(coreEnergyGeo, opticGlowMaterial);
    coreEnergy.position.set(0, 0.18, 0.44);
    chestGroup.add(coreEnergy);

    // Abdominal Hydraulic Pistons (Left & Right)
    const pistonGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.5, 12);
    const leftPiston = new THREE.Mesh(pistonGeo, brassMaterial);
    leftPiston.position.set(-0.24, -0.32, 0.18);
    chestGroup.add(leftPiston);

    const rightPiston = new THREE.Mesh(pistonGeo, brassMaterial);
    rightPiston.position.set(0.24, -0.32, 0.18);
    chestGroup.add(rightPiston);

    // B. Head & Helm Assembly (Articulated on Neck)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.55, 0.05);
    robotGroup.add(headGroup);

    // Neck Joint
    const neckGeo = new THREE.CylinderGeometry(0.14, 0.18, 0.25, 12);
    const neck = new THREE.Mesh(neckGeo, obsidianMaterial);
    neck.position.set(0, -0.12, -0.02);
    headGroup.add(neck);

    // Main Helmet Shell (Matte White with sharp geometric facets)
    const helmGeo = new THREE.BoxGeometry(0.48, 0.52, 0.48);
    const helm = new THREE.Mesh(helmGeo, matteWhiteMaterial);
    headGroup.add(helm);

    // Transformer Crown Crest (Brushed Gold signature Kairos emblem)
    const crownCrestGeo = new THREE.ConeGeometry(0.18, 0.38, 4);
    const crownCrest = new THREE.Mesh(crownCrestGeo, goldMaterial);
    crownCrest.position.set(0, 0.38, 0.1);
    crownCrest.rotation.set(-0.35, Math.PI / 4, 0);
    headGroup.add(crownCrest);

    // Brow Armor Visor (Brushed Gold)
    const browGeo = new THREE.BoxGeometry(0.52, 0.14, 0.22);
    const brow = new THREE.Mesh(browGeo, goldMaterial);
    brow.position.set(0, 0.14, 0.22);
    headGroup.add(brow);

    // Glowing Warm Golden Optic Eyes / Visor Array
    const leftEyeGeo = new THREE.BoxGeometry(0.13, 0.055, 0.08);
    const leftEye = new THREE.Mesh(leftEyeGeo, opticGlowMaterial);
    leftEye.position.set(-0.11, 0.03, 0.26);
    leftEye.rotation.z = -0.1;
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(leftEyeGeo, opticGlowMaterial);
    rightEye.position.set(0.11, 0.03, 0.26);
    rightEye.rotation.z = 0.1;
    headGroup.add(rightEye);

    // Point Light for Optic Eye Glow
    const eyeLight = new THREE.PointLight(0xFFD269, 1.4, 2.5);
    eyeLight.position.set(0, 0.05, 0.5);
    headGroup.add(eyeLight);

    // Cheek Armor & Mouthplate (Beveled Obsidian & Brass)
    const mouthplateGeo = new THREE.BoxGeometry(0.24, 0.22, 0.16);
    const mouthplate = new THREE.Mesh(mouthplateGeo, obsidianMaterial);
    mouthplate.position.set(0, -0.15, 0.23);
    headGroup.add(mouthplate);

    // Mecha Ear / Fin Antennas (Left & Right Brass)
    const finGeo = new THREE.BoxGeometry(0.06, 0.38, 0.26);
    const leftFin = new THREE.Mesh(finGeo, brassMaterial);
    leftFin.position.set(-0.28, 0.06, -0.05);
    leftFin.rotation.set(-0.25, 0, 0.15);
    headGroup.add(leftFin);

    const rightFin = new THREE.Mesh(finGeo, brassMaterial);
    rightFin.position.set(0.28, 0.06, -0.05);
    rightFin.rotation.set(-0.25, 0, -0.15);
    headGroup.add(rightFin);

    // C. Shoulders & Arms (Helpful / Welcoming Transformer Pose)
    // Left Shoulder Pauldron (Layered Gold & White)
    const leftShoulderGroup = new THREE.Group();
    leftShoulderGroup.position.set(-0.75, 1.05, 0);
    robotGroup.add(leftShoulderGroup);

    const pauldronGeo = new THREE.BoxGeometry(0.42, 0.32, 0.45);
    const leftPauldron = new THREE.Mesh(pauldronGeo, goldMaterial);
    leftShoulderGroup.add(leftPauldron);

    const pauldronTrimGeo = new THREE.BoxGeometry(0.44, 0.12, 0.47);
    const leftPauldronTrim = new THREE.Mesh(pauldronTrimGeo, matteWhiteMaterial);
    leftPauldronTrim.position.set(0, 0.12, 0);
    leftShoulderGroup.add(leftPauldronTrim);

    // Left Arm (Gentle rest at side)
    const armGeo = new THREE.CylinderGeometry(0.11, 0.09, 0.65, 12);
    const leftArm = new THREE.Mesh(armGeo, matteWhiteMaterial);
    leftArm.position.set(-0.06, -0.45, 0);
    leftArm.rotation.z = -0.15;
    leftShoulderGroup.add(leftArm);

    // Left Forearm & Hand
    const forearmGeo = new THREE.BoxGeometry(0.22, 0.6, 0.22);
    const leftForearm = new THREE.Mesh(forearmGeo, goldMaterial);
    leftForearm.position.set(-0.16, -0.95, 0.1);
    leftForearm.rotation.set(0.3, 0, -0.1);
    leftShoulderGroup.add(leftForearm);

    // Right Shoulder Pauldron (Gesture Forward Pose)
    const rightShoulderGroup = new THREE.Group();
    rightShoulderGroup.position.set(0.75, 1.05, 0);
    robotGroup.add(rightShoulderGroup);

    const rightPauldron = new THREE.Mesh(pauldronGeo, goldMaterial);
    rightShoulderGroup.add(rightPauldron);

    const rightPauldronTrim = new THREE.Mesh(pauldronTrimGeo, matteWhiteMaterial);
    rightPauldronTrim.position.set(0, 0.12, 0);
    rightShoulderGroup.add(rightPauldronTrim);

    // Right Arm & Forearm (Intelligent, welcoming presentation pose)
    const rightArm = new THREE.Mesh(armGeo, matteWhiteMaterial);
    rightArm.position.set(0.08, -0.42, 0.12);
    rightArm.rotation.set(-0.25, 0, 0.2);
    rightShoulderGroup.add(rightArm);

    const rightForearm = new THREE.Mesh(forearmGeo, goldMaterial);
    rightForearm.position.set(0.22, -0.85, 0.35);
    rightForearm.rotation.set(0.65, -0.2, 0.25);
    rightShoulderGroup.add(rightForearm);

    // Right Hand / Data Beacon Palm
    const handPalmGeo = new THREE.BoxGeometry(0.16, 0.16, 0.08);
    const rightHandPalm = new THREE.Mesh(handPalmGeo, brassMaterial);
    rightHandPalm.position.set(0.28, -1.15, 0.55);
    rightHandPalm.rotation.set(0.65, -0.2, 0.25);
    rightShoulderGroup.add(rightHandPalm);

    const palmBeaconGeo = new THREE.SphereGeometry(0.05, 16, 16);
    const palmBeacon = new THREE.Mesh(palmBeaconGeo, opticGlowMaterial);
    palmBeacon.position.set(0.28, -1.15, 0.6);
    rightShoulderGroup.add(palmBeacon);

    // D. Pelvis, Legs & Floating Thrusters
    const pelvisGroup = new THREE.Group();
    pelvisGroup.position.set(0, 0.05, 0);
    robotGroup.add(pelvisGroup);

    const pelvisGeo = new THREE.BoxGeometry(0.68, 0.32, 0.42);
    const pelvis = new THREE.Mesh(pelvisGeo, matteWhiteMaterial);
    pelvisGroup.add(pelvis);

    const beltCrestGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 6);
    const beltCrest = new THREE.Mesh(beltCrestGeo, goldMaterial);
    beltCrest.rotation.x = Math.PI / 2;
    beltCrest.position.set(0, 0, 0.22);
    pelvisGroup.add(beltCrest);

    // Left & Right Thighs (Sculpted Gold with White Knee Guards)
    const thighGeo = new THREE.BoxGeometry(0.26, 0.75, 0.3);
    const leftThigh = new THREE.Mesh(thighGeo, goldMaterial);
    leftThigh.position.set(-0.28, -0.52, 0.02);
    leftThigh.rotation.set(-0.08, 0, -0.06);
    pelvisGroup.add(leftThigh);

    const rightThigh = new THREE.Mesh(thighGeo, goldMaterial);
    rightThigh.position.set(0.28, -0.52, 0.02);
    rightThigh.rotation.set(-0.08, 0, 0.06);
    pelvisGroup.add(rightThigh);

    // Knees & Floating Lower Legs / Stabilizing Thrusters
    const kneeGeo = new THREE.SphereGeometry(0.13, 16, 16);
    const leftKnee = new THREE.Mesh(kneeGeo, brassMaterial);
    leftKnee.position.set(-0.3, -0.96, 0.06);
    pelvisGroup.add(leftKnee);

    const rightKnee = new THREE.Mesh(kneeGeo, brassMaterial);
    rightKnee.position.set(0.3, -0.96, 0.06);
    pelvisGroup.add(rightKnee);

    const calfGeo = new THREE.BoxGeometry(0.22, 0.85, 0.26);
    const leftCalf = new THREE.Mesh(calfGeo, matteWhiteMaterial);
    leftCalf.position.set(-0.32, -1.45, -0.04);
    leftCalf.rotation.x = 0.14;
    pelvisGroup.add(leftCalf);

    const rightCalf = new THREE.Mesh(calfGeo, matteWhiteMaterial);
    rightCalf.position.set(0.32, -1.45, -0.04);
    rightCalf.rotation.x = 0.14;
    pelvisGroup.add(rightCalf);

    // Thruster Jets at Feet (Subtle Warm Levitating Exhaust)
    const jetGeo = new THREE.CylinderGeometry(0.08, 0.14, 0.22, 16);
    const leftJet = new THREE.Mesh(jetGeo, brassMaterial);
    leftJet.position.set(-0.32, -1.9, -0.08);
    pelvisGroup.add(leftJet);

    const rightJet = new THREE.Mesh(jetGeo, brassMaterial);
    rightJet.position.set(0.32, -1.9, -0.08);
    pelvisGroup.add(rightJet);

    // 4. Circular Holographic Platform & Metallic Interface Rings
    const platformGroup = new THREE.Group();
    platformGroup.position.set(0, -1.95, 0);
    masterGroup.add(platformGroup);

    // Concentric Circular Holographic Discs
    const outerDiscGeo = new THREE.RingGeometry(1.65, 1.78, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0xC5A059,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
    });
    const outerRing = new THREE.Mesh(outerDiscGeo, outerRingMat);
    outerRing.rotation.x = Math.PI / 2;
    platformGroup.add(outerRing);

    const innerDiscGeo = new THREE.RingGeometry(1.2, 1.25, 48);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x9E7736,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const innerRing = new THREE.Mesh(innerDiscGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 2;
    platformGroup.add(innerRing);

    // Fine Tick Lines around Holographic Platform (Radar / Interface feel)
    const tickGroup = new THREE.Group();
    const tickGeo = new THREE.BoxGeometry(0.02, 0.01, 0.16);
    const tickMat = new THREE.MeshBasicMaterial({ color: 0xD4B06A, transparent: true, opacity: 0.7 });

    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(Math.cos(angle) * 1.72, 0, Math.sin(angle) * 1.72);
      tick.rotation.y = -angle;
      tickGroup.add(tick);
    }
    platformGroup.add(tickGroup);

    // Soft Light Pedestal Disc Surface
    const pedestalSurfaceGeo = new THREE.CircleGeometry(1.5, 48);
    const pedestalSurfaceMat = new THREE.MeshStandardMaterial({
      color: 0xF3EFE6,
      roughness: 0.7,
      metalness: 0.15,
      transparent: true,
      opacity: 0.65,
    });
    const pedestalSurface = new THREE.Mesh(pedestalSurfaceGeo, pedestalSurfaceMat);
    pedestalSurface.rotation.x = -Math.PI / 2;
    pedestalSurface.position.y = -0.02;
    platformGroup.add(pedestalSurface);

    // 5. Rising Warm Golden Holographic Embers / Data Particles
    const emberCount = 140;
    const emberPositions = new Float32Array(emberCount * 3);
    const emberVelocity = [];

    for (let i = 0; i < emberCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.4;
      emberPositions[i * 3] = Math.cos(angle) * radius;
      emberPositions[i * 3 + 1] = Math.random() * 3.5 - 1.8;
      emberPositions[i * 3 + 2] = Math.sin(angle) * radius;
      emberVelocity.push(0.006 + Math.random() * 0.012);
    }

    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));

    // Particle Texture Generator
    const createEmberTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 224, 130, 1)');
      grad.addColorStop(0.4, 'rgba(197, 160, 89, 0.6)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const emberMat = new THREE.PointsMaterial({
      size: 0.08,
      map: createEmberTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const embers = new THREE.Points(emberGeo, emberMat);
    masterGroup.add(embers);

    // 6. Natural Light Studio Lighting Setup (Warm Luxury)
    const ambientLight = new THREE.AmbientLight(0xFFF9EE, 1.8);
    scene.add(ambientLight);

    // Key Light (Warm Sunlight / Studio Key)
    const keyLight = new THREE.DirectionalLight(0xFFF0D4, 2.2);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    // Back / Rim Light (Crisp Gold Accent on Shoulders and Helm)
    const rimLight = new THREE.DirectionalLight(0xD4B06A, 2.4);
    rimLight.position.set(-4, 3, -4);
    scene.add(rimLight);

    // Warm Platform Base Fill
    const platformLight = new THREE.PointLight(0xFFD269, 1.6, 6);
    platformLight.position.set(0, -1.6, 0.5);
    scene.add(platformLight);

    // 7. Mouse Physics & Interactive Drag Controls
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.4;
      mouse.targetY = y * 0.4;
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

      masterGroup.rotation.y += deltaX * 0.009;
      masterGroup.rotation.x += deltaY * 0.005;
      masterGroup.rotation.x = Math.max(-0.25, Math.min(0.35, masterGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleDragMove);

    // Mobile Touch Drag
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        mouse.targetX = x * 0.3;
        mouse.targetY = y * 0.3;
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

    // 8. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Graceful Levitation / Breathing Animation (Intelligent Hover)
      const hoverY = Math.sin(elapsedTime * 1.6) * 0.07;
      robotGroup.position.y = hoverY;

      // Head Tracks Cursor (Intelligent Look-at behavior)
      headGroup.rotation.y = mouse.x * 0.85 + Math.sin(elapsedTime * 0.8) * 0.04;
      headGroup.rotation.x = -mouse.y * 0.65;

      // Chest subtle breathing tilt
      chestGroup.rotation.x = Math.sin(elapsedTime * 1.6) * 0.03 - mouse.y * 0.2;
      chestGroup.rotation.y = mouse.x * 0.35;

      // Right arm subtle gesture pulsing
      rightShoulderGroup.rotation.z = Math.sin(elapsedTime * 1.4) * 0.03;
      rightShoulderGroup.position.y = 1.05 + Math.sin(elapsedTime * 1.4) * 0.015;

      // Holographic Rings slow elegant rotation
      outerRing.rotation.z = elapsedTime * 0.25;
      innerRing.rotation.z = -elapsedTime * 0.35;
      tickGroup.rotation.y = elapsedTime * 0.15;

      // Rising Holographic Embers Physics
      const positions = emberGeo.attributes.position.array;
      for (let i = 0; i < emberCount; i++) {
        positions[i * 3 + 1] += emberVelocity[i];
        if (positions[i * 3 + 1] > 2.2) {
          positions[i * 3 + 1] = -1.9;
        }
      }
      emberGeo.attributes.position.needsUpdate = true;

      // Idle subtle drift of master group when not dragging
      if (!isDragging) {
        masterGroup.rotation.y += (mouse.x * 0.35 - masterGroup.rotation.y) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      // Disposals
      goldMaterial.dispose();
      brassMaterial.dispose();
      matteWhiteMaterial.dispose();
      obsidianMaterial.dispose();
      opticGlowMaterial.dispose();
      outerRingMat.dispose();
      innerRingMat.dispose();
      tickMat.dispose();
      pedestalSurfaceMat.dispose();
      emberMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] md:h-[620px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Interactive 3D Transformer Robot AI Assistant (Drag to inspect)"
      />

      {/* Subtle Holographic Pedestal Floor Shadow Glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 bg-[#C5A059]/15 blur-xl rounded-full pointer-events-none" />
    </div>
  );
}
