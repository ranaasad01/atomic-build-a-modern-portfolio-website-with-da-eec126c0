'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;

    try {
      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
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
        targetRotation.y =  mouse.x * 0.08;
        targetRotation.x = -mouse.y * 0.05;
      }
      window.addEventListener('mousemove', onMouseMove);

      // --- Resize ---
      function onResize() {
        if (!renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener('resize', onResize);

      // --- Animation loop ---
      const clock = new THREE.Clock();
      function animate() {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        // Drift particles
        const pos = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          pos[i * 3 + 1] += Math.sin(t * 0.3 + i * 0.5) * 0.004;
        }
        particleGeo.attributes.position.needsUpdate = true;

        // Smooth camera rotation
        currentRotation.x += (targetRotation.x - currentRotation.x) * 0.04;
        currentRotation.y += (targetRotation.y - currentRotation.y) * 0.04;
        scene.rotation.x = currentRotation.x;
        scene.rotation.y = currentRotation.y + t * 0.012;

        if (renderer) renderer.render(scene, camera);
      }
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        try {
          renderer?.dispose();
        } catch (_) {
          // ignore disposal errors
        }
      };
    } catch (err) {
      console.warn('ParticleBackground: WebGL not available, skipping 3D background.', err);
      return () => {
        if (animId) cancelAnimationFrame(animId);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
