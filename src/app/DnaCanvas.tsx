"use client";

import React, { useEffect, useRef } from "react";

interface DnaCanvasProps {
  className?: string;
}

export default function DnaCanvas({ className = "" }: DnaCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 700);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Ambient floating particles
    const numParticles = 45;
    const particles = Array.from({ length: numParticles }).map(() => ({
      progress: Math.random(),
      speed: 0.0005 + Math.random() * 0.0009,
      offsetAngle: Math.random() * Math.PI * 2,
      offsetRadius: Math.random() * 24 + 4,
      size: Math.random() * 2.0 + 0.6,
      alpha: Math.random() * 0.45 + 0.15,
    }));

    let rotationAngle = 0.95; // Static 3D perspective angle matching reference image
    let ringRotation = 0;

    // Cubic Bezier Curve Control Points defining 3D Trajectory
    // Exact match to reference image sweep from lower-left to upper-right
    const getControlPoints = (w: number, h: number) => {
      return {
        P0: { x: w * 0.11, y: h * 0.80 },
        P1: { x: w * 0.03, y: h * 0.24 },
        P2: { x: w * 0.30, y: h * 0.11 },
        P3: { x: w * 1.04, y: h * 0.16 },
      };
    };

    // Calculate position and normal vector on Cubic Bezier curve at parameter t (0 to 1)
    const getCurveState = (t: number, w: number, h: number) => {
      const { P0, P1, P2, P3 } = getControlPoints(w, h);
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;

      const cx = mt3 * P0.x + 3 * mt2 * t * P1.x + 3 * mt * t2 * P2.x + t3 * P3.x;
      const cy = mt3 * P0.y + 3 * mt2 * t * P1.y + 3 * mt * t2 * P2.y + t3 * P3.y;

      const dx = 3 * mt2 * (P1.x - P0.x) + 6 * mt * t * (P2.x - P1.x) + 3 * t2 * (P3.x - P2.x);
      const dy = 3 * mt2 * (P1.y - P0.y) + 6 * mt * t * (P2.y - P1.y) + 3 * t2 * (P3.y - P2.y);
      const len = Math.hypot(dx, dy) || 1;

      const nx = -dy / len;
      const ny = dx / len;

      return { cx, cy, nx, ny };
    };

    // Color Interpolator along curve t optimized for Bright Light Themes
    const getDnaColor = (t: number) => {
      if (t < 0.25) {
        return "#0284c7"; // Sky / Electric Blue
      } else if (t < 0.52) {
        return "#6366f1"; // Royal Indigo / Violet
      } else if (t < 0.78) {
        return "#d946ef"; // Bright Magenta / Pink
      } else {
        return "#f59e0b"; // Warm Amber / Orange
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReducedMotion) {
        ringRotation += 0.003; // Concentric ground grid subtle ambient rotation
      }

      const { P0 } = getControlPoints(width, height);

      // 1. Render Elliptical Technological Ground Grid at Bottom-Left Base (P0) for Light Backgrounds
      ctx.save();
      ctx.translate(P0.x, P0.y + 12);
      ctx.scale(1.0, 0.35); // Elliptical perspective on ground plane

      const groundGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 160);
      groundGlow.addColorStop(0, "rgba(2, 132, 199, 0.25)");
      groundGlow.addColorStop(0.4, "rgba(99, 102, 241, 0.15)");
      groundGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.beginPath();
      ctx.arc(0, 0, 160, 0, Math.PI * 2);
      ctx.fillStyle = groundGlow;
      ctx.fill();

      // Faint Concentric Ground Rings matching reference image
      [35, 70, 110, 150].forEach((r, idx) => {
        ctx.strokeStyle = idx % 2 === 0 ? "rgba(2, 132, 199, 0.35)" : "rgba(99, 102, 241, 0.30)";
        ctx.lineWidth = 1.4;
        ctx.setLineDash([6 + idx * 2, 10 + idx * 2]);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.restore();

      // Core Glowing Point Dot at origin
      ctx.beginPath();
      ctx.arc(P0.x, P0.y + 12, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#0284c7";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 2. Render Ambient Particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;
        }

        const state = getCurveState(p.progress, width, height);
        const px = state.cx + Math.cos(p.offsetAngle) * p.offsetRadius;
        const py = state.cy + Math.sin(p.offsetAngle) * p.offsetRadius;
        const pAlpha = p.alpha * (1 - p.progress * 0.7);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 70, 239, ${pAlpha})`;
        ctx.fill();
      });

      // 3. Calculate 3D Double Helix Geometry & Volumetric Perspective
      const numNodes = Math.max(90, Math.floor(width / 8));
      const frequency = 0.038;

      const strandA: Array<{ x: number; y: number; z: number; color: string; amp: number }> = [];
      const strandB: Array<{ x: number; y: number; z: number; color: string; amp: number }> = [];

      for (let i = 0; i < numNodes; i++) {
        const t = i / (numNodes - 1);
        const state = getCurveState(t, width, height);

        const perspectiveScale = 2.2 - 1.78 * Math.pow(t, 0.75);
        const currentAmp = 36 * perspectiveScale;

        const angle = i * frequency * Math.PI * 2 + rotationAngle;

        const offsetN_A = Math.sin(angle) * currentAmp;
        const zA = Math.cos(angle) * currentAmp;

        const offsetN_B = Math.sin(angle + Math.PI) * currentAmp;
        const zB = Math.cos(angle + Math.PI) * currentAmp;

        const xA = state.cx + state.nx * offsetN_A;
        const yA = state.cy + state.ny * offsetN_A;

        const xB = state.cx + state.nx * offsetN_B;
        const yB = state.cy + state.ny * offsetN_B;

        const color = getDnaColor(t);

        strandA.push({ x: xA, y: yA, z: zA, color, amp: currentAmp });
        strandB.push({ x: xB, y: yB, z: zB, color, amp: currentAmp });
      }

      // Sort base-pair rungs by z-depth for correct front/back occlusion rendering
      const rungs = [];
      for (let i = 0; i < numNodes; i += 2) {
        const ptA = strandA[i];
        const ptB = strandB[i];
        const avgZ = (ptA.z + ptB.z) / 2;
        rungs.push({ ptA, ptB, avgZ, i });
      }
      rungs.sort((a, b) => a.avgZ - b.avgZ);

      // 4. Render Base-Pair Rungs with Depth Occlusion
      rungs.forEach(({ ptA, ptB, avgZ }) => {
        const depthAlpha = Math.max(0.25, (avgZ + ptA.amp) / (2 * ptA.amp));
        const scaleFactor = ptA.amp / 36;

        ctx.beginPath();
        ctx.moveTo(ptA.x, ptA.y);
        ctx.lineTo(ptB.x, ptB.y);

        const grad = ctx.createLinearGradient(ptA.x, ptA.y, ptB.x, ptB.y);
        grad.addColorStop(0, ptA.color);
        grad.addColorStop(1, ptB.color);

        ctx.strokeStyle = grad;
        ctx.globalAlpha = depthAlpha * 0.90;
        ctx.lineWidth = Math.max(1.2, 2.4 * scaleFactor);
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Glowing center bead on rung
        const midX = (ptA.x + ptB.x) / 2;
        const midY = (ptA.y + ptB.y) / 2;
        ctx.beginPath();
        ctx.arc(midX, midY, Math.max(1.2, 2.6 * scaleFactor), 0, Math.PI * 2);
        ctx.fillStyle = ptA.color;
        ctx.globalAlpha = depthAlpha * 0.95;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // 5. Render Continuous Tubular Helical Strands
      const drawStrandLine = (nodes: typeof strandA) => {
        for (let i = 0; i < nodes.length - 1; i++) {
          const curr = nodes[i];
          const next = nodes[i + 1];

          const depthAlpha = Math.max(0.28, (curr.z + curr.amp) / (2 * curr.amp));
          const scaleFactor = curr.amp / 36;

          ctx.beginPath();
          ctx.moveTo(curr.x, curr.y);
          ctx.lineTo(next.x, next.y);

          ctx.strokeStyle = curr.color;
          ctx.lineWidth = Math.max(1.4, (3.4 * depthAlpha + 0.8) * scaleFactor);
          ctx.globalAlpha = depthAlpha * 0.98;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }
      };

      drawStrandLine(strandA);
      drawStrandLine(strandB);

      // 6. Render Shaded 3D Spherical Pearl Beads along Strands with Crisp High-Contrast Shading for Light Mode
      const allSpheres: Array<{ x: number; y: number; z: number; color: string; amp: number }> = [];
      for (let i = 0; i < numNodes; i += 2) {
        allSpheres.push(strandA[i]);
        allSpheres.push(strandB[i]);
      }
      allSpheres.sort((a, b) => a.z - b.z);

      allSpheres.forEach((node) => {
        const depthScale = (node.z + node.amp) / (2 * node.amp);
        const scaleFactor = node.amp / 36;
        const radius = Math.max(1.5, (2.8 + depthScale * 3.4) * scaleFactor);
        const alpha = 0.45 + depthScale * 0.55;

        // Soft Outer Glow for foreground spheres
        if (depthScale > 0.35) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = alpha * 0.25;
          ctx.fill();
        }

        // 3D Glossy Sphere Radial Gradient (white highlight offset top-left)
        const sphereGrad = ctx.createRadialGradient(
          node.x - radius * 0.35,
          node.y - radius * 0.35,
          radius * 0.1,
          node.x,
          node.y,
          radius
        );
        sphereGrad.addColorStop(0, "#ffffff");
        sphereGrad.addColorStop(0.5, node.color);
        sphereGrad.addColorStop(1, "#0f172a");

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = sphereGrad;
        ctx.globalAlpha = alpha;
        ctx.fill();

        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-label="Interactive 3D DNA Emergence Double Helix Visualization"
      />
    </div>
  );
}
