'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    // --- Particles ---
    const PARTICLE_COUNT = 180;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const spread = 120;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.55,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Connection Lines ---
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.12,
    });

    const lineGroup = new THREE.Group();
    scene.add(lineGroup);

    function buildLines() {
      // Remove old lines
      while (lineGroup.children.length) lineGroup.remove(lineGroup.children[0]);

      const pos = particleGeo.attributes.position.array as Float32Array;
      const MAX_DIST = 22;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = pos[i * 3]     - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < MAX_DIST) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]),
              new THREE.Vector3(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]),
            ]);
            lineGroup.add(new THREE.Line(lineGeo, lineMat));
          }
        }
      }
    }
    buildLines();

    // --- Mouse tracking ---
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };

    function onMouseMove(e: MouseEvent) {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotation.y =  mouse.x * 0.18;
      targetRotation.x = -mouse.y * 0.12;
    }
    window.addEventListener('mousemove', onMouseMove);

    // --- Resize ---
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    // --- Animation loop ---
    let animId: number;
    const clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow auto-spin
      particles.rotation.y = elapsed * 0.025;
      particles.rotation.x = elapsed * 0.012;
      lineGroup.rotation.y = elapsed * 0.025;
      lineGroup.rotation.x = elapsed * 0.012;

      // Smooth mouse parallax on top of auto-spin
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.04;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.04;

      particles.rotation.x += currentRotation.x * 0.008;
      particles.rotation.y += currentRotation.y * 0.008;
      lineGroup.rotation.x += currentRotation.x * 0.008;
      lineGroup.rotation.y += currentRotation.y * 0.008;

      renderer.render(scene, camera);
    }
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}
