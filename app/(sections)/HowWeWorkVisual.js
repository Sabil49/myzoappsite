'use client';
import React, { useRef, useEffect } from 'react';

export default function HowWeWorkVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, t = 0, raf;

    // Node definitions
    const NODES = [
      { label: 'Discovery', icon: '💡', color: '#6366F1', x: .14, y: .38 },
      { label: 'Design', icon: '✏️', color: '#EC4899', x: .34, y: .18 },
      { label: 'Develop', icon: '⚙️', color: '#3B82F6', x: .54, y: .38 },
      { label: 'Test', icon: '🔬', color: '#F59E0B', x: .74, y: .18 },
      { label: 'Launch', icon: '🚀', color: '#10B981', x: .88, y: .38 },
    ];
    const EDGES = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 2], [1, 3]];
    const PARTS = [];
    EDGES.forEach((e, i) => {
      for (let j = 0; j < 3; j++) {
        PARTS.push({ edge: i, progress: (j / 3 + Math.random() * 0.1) % 1, speed: .004 + Math.random() * .003 });
      }
    });

    function resize() {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * window.devicePixelRatio;
      canvas.height = r.height * window.devicePixelRatio;
      W = canvas.width; H = canvas.height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function nPos(n) {
      return { x: n.x * (W / window.devicePixelRatio), y: n.y * (H / window.devicePixelRatio) };
    }

    function draw() {
      const w = W / window.devicePixelRatio, h = H / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      // background grid
      ctx.strokeStyle = 'rgba(99,102,241,.055)';
      ctx.lineWidth = 1;
      const gs = 28;
      for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      // curved edges with glow
      EDGES.forEach(([a, b], ei) => {
        const p0 = nPos(NODES[a]), p1 = nPos(NODES[b]);
        const mx = (p0.x + p1.x) / 2, my = (p0.y + p1.y) / 2 - 28;
        // glow pass
        ctx.save();
        ctx.shadowColor = NODES[a].color; ctx.shadowBlur = 8;
        ctx.strokeStyle = `${NODES[a].color}28`; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.quadraticCurveTo(mx, my, p1.x, p1.y); ctx.stroke();
        ctx.restore();
        // solid line
        ctx.strokeStyle = `${NODES[a].color}55`; ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.quadraticCurveTo(mx, my, p1.x, p1.y); ctx.stroke();
        ctx.setLineDash([]);
      });

      // animated particles
      PARTS.forEach(p => {
        p.progress += p.speed; if (p.progress > 1) p.progress = 0;
        const [a, b] = EDGES[p.edge];
        const p0 = nPos(NODES[a]), p1 = nPos(NODES[b]);
        const mx = (p0.x + p1.x) / 2, my = (p0.y + p1.y) / 2 - 28;
        const tt = p.progress;
        const px = Math.pow(1 - tt, 2) * p0.x + 2 * (1 - tt) * tt * mx + tt * tt * p1.x;
        const py = Math.pow(1 - tt, 2) * p0.y + 2 * (1 - tt) * tt * my + tt * tt * p1.y;
        ctx.save();
        ctx.shadowColor = NODES[a].color; ctx.shadowBlur = 12;
        ctx.fillStyle = NODES[a].color;
        ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI * 2); ctx.fill();
        // tail
        const t2 = Math.max(0, tt - .06);
        const px2 = Math.pow(1 - t2, 2) * p0.x + 2 * (1 - t2) * t2 * mx + t2 * t2 * p1.x;
        const py2 = Math.pow(1 - t2, 2) * p0.y + 2 * (1 - t2) * t2 * my + t2 * t2 * p1.y;
        ctx.strokeStyle = `${NODES[a].color}40`; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px2, py2); ctx.stroke();
        ctx.restore();
      });

      // nodes
      NODES.forEach((n, i) => {
        const { x, y } = nPos(n);
        const pulse = Math.sin(t * .04 + i * 1.2) * 3;
        const R = 22 + pulse * .25;
        // outer glow ring
        ctx.save();
        ctx.shadowColor = n.color; ctx.shadowBlur = 18 + pulse * 2;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, R + 8);
        grad.addColorStop(0, n.color + '22'); grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(x, y, R + 8, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        // ring border
        ctx.save();
        ctx.shadowColor = n.color; ctx.shadowBlur = 14;
        ctx.strokeStyle = n.color + '88'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(x, y, R + 4, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
        // white card bg
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(0,0,0,.12)'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 4;
        roundRect(ctx, x - R, y - R, R * 2, R * 2, 12); ctx.fill();
        ctx.shadowColor = 'transparent';
        // icon
        ctx.font = `${Math.round(R * .85)}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(n.icon, x, y + 1);
        // label below
        ctx.font = `700 10px 'DM Sans',sans-serif`;
        ctx.fillStyle = '#1A2544'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillText(n.label, x, y + R + 7);
        // step number dot
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color; ctx.shadowBlur = 6;
        ctx.beginPath(); ctx.arc(x + R - .5, y - R + .5, 6, 0, Math.PI * 2); ctx.fill();
        ctx.shadowColor = 'transparent';
        ctx.fillStyle = '#fff'; ctx.font = 'bold 8px sans-serif'; ctx.textBaseline = 'middle';
        ctx.fillText(i + 1, x + R - .5, y - R + .5);
      });

      // "In Progress" tag on active node (cycles)
      const activeN = NODES[Math.floor(t / 80) % NODES.length];
      const { x: ax, y: ay } = nPos(activeN);
      const tagW = 72, tagH = 20, tagX = ax - tagW / 2, tagY = ay - 40;
      ctx.fillStyle = activeN.color; ctx.shadowColor = activeN.color; ctx.shadowBlur = 10;
      roundRect(ctx, tagX, tagY, tagW, tagH, 6); ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.fillStyle = '#fff'; ctx.font = 'bold 9px "DM Sans",sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('In Progress', ax, tagY + tagH / 2);

      t++;
      raf = requestAnimationFrame(draw);
    }

    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r);
      ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
      ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r);
      ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath();
    }

    function handleResize() {
      cancelAnimationFrame(raf);
      resize();
      draw();
    }

    resize();
    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="orbit-frame">
      <canvas ref={canvasRef} id="pipe-canvas" style={{ width: '100%', height: '100%', display: 'block' }} />
      <div className="pipe-bar"></div>
    </div>
  );
}