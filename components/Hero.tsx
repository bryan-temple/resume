'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animId: number;
    let renderer: import('three').WebGLRenderer;

    (async () => {
      const THREE = await import('three');

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 5;

      function resize() {
        const w = canvas!.clientWidth;
        const h = canvas!.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener('resize', resize);

      // Core sphere — photo mapped onto it
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x1c2820 });
      const coreSphere = new THREE.Mesh(new THREE.SphereGeometry(0.88, 48, 48), coreMat);
      scene.add(coreSphere);

      // Subtle glow ring
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0xc96442, transparent: true, opacity: 0.08, side: THREE.BackSide,
      });
      scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.92, 32, 32), glowMat));

      // Load photo texture
      const loader = new THREE.TextureLoader();
      loader.load(
        '/bryantemple.png',
        (tex) => {
          tex.minFilter = THREE.LinearFilter;
          coreMat.map = tex;
          coreMat.color.set(0xffffff);
          coreMat.needsUpdate = true;
        },
        undefined,
        () => {}, // silent fail — dark fallback stays
      );

      // Inner shell — sage octahedron
      const midMat = new THREE.MeshBasicMaterial({
        color: 0x3a7a6a, wireframe: true, transparent: true, opacity: 0.2,
      });
      const mid = new THREE.Mesh(new THREE.OctahedronGeometry(1.3, 0), midMat);
      scene.add(mid);

      // Outer shell — terracotta icosahedron
      const outerMat = new THREE.MeshBasicMaterial({
        color: 0xc96442, wireframe: true, transparent: true, opacity: 0.3,
      });
      const outer = new THREE.Mesh(new THREE.IcosahedronGeometry(1.9, 1), outerMat);
      scene.add(outer);

      // Particles
      const ptGeo = new THREE.BufferGeometry();
      const ptCount = 140;
      const pos = new Float32Array(ptCount * 3);
      for (let i = 0; i < ptCount * 3; i++) pos[i] = (Math.random() - 0.5) * 14;
      ptGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(
        ptGeo,
        new THREE.PointsMaterial({ color: 0xc96442, size: 0.035, transparent: true, opacity: 0.4 }),
      );
      scene.add(pts);

      // Mouse parallax
      let mx = 0, my = 0;
      const onMouseMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      document.addEventListener('mousemove', onMouseMove);

      let t = 0;
      function animate() {
        animId = requestAnimationFrame(animate);
        t += reduced ? 0 : 0.0035;

        coreSphere.rotation.y = t * 0.2;
        outer.rotation.x = t * 0.4 + my * 0.06;
        outer.rotation.y = t * 0.55 + mx * 0.06;
        mid.rotation.x = -t * 0.35;
        mid.rotation.y = -t * 0.5;
        pts.rotation.y = t * 0.07;

        renderer.render(scene, camera);
      }
      animate();

      // Return cleanup inside async IIFE — tracked via outer vars
    })();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">
          Accessibility Specialist · Frontend Developer
        </p>

        <h1 className="hero__h1" id="hero-heading">
          Building<br />the web for<br /><em>everyone.</em>
        </h1>

        <p className="hero__sub">
          I help Shopify brands and product teams build stores that work for the 1 in 5
          people with a disability. CPACC certified. WCAG 2.2 AA. Disability-first from line one.
        </p>

        <div className="hero__actions">
          <Link className="btn btn--dark" href="#work">
            See my work
          </Link>
          <Link className="btn btn--ghost" href="mailto:hello@bihub.tech">
            Let&apos;s talk
          </Link>
        </div>

        <div className="hero__proof" role="list" aria-label="Credentials">
          {[
            'CPACC Certified',
            'TIME Magazine Client',
            '0 failures · PDF/UA',
            'Playbook Co-Author',
          ].map((label) => (
            <div key={label} className="chip" role="listitem">
              <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" fill="var(--brand)" />
              </svg>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
