"use client";

import React, { useEffect, useState } from "react";

export default function CloudsBackground(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // nothing rendered on server

  return <CloudsBackgroundClient {...props} />;
}

function CloudsBackgroundClient({
  className = "",
  layers = [
    { speed: 120, opacity: 0.18, scale: 1.4, blur: 6 },
    { speed: 90, opacity: 0.24, scale: 1.15, blur: 4 },
    { speed: 60, opacity: 0.32, scale: 1.0, blur: 2 }
  ],
  cloudCount = [6, 5, 4]
}) {
  const [cloudsByLayer, setCloudsByLayer] = useState([]);

  const randPct = (min = -5, max = 105) =>
    Math.round(min + Math.random() * (max - min));

  const makeClouds = (count, layerIndex) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const left = randPct(-5, 105);
      const top = randPct(5, 80);
      const width = 18 + Math.round(Math.random() * 36);
      const key = `c-${layerIndex}-${i}-${Math.random()}`;

      arr.push(
        <div
          key={key}
          className="cloud-shape absolute pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${width}vw`,
            transform: `translateX(-10%)`,
            opacity: 1
          }}
        />
      );
    }
    return arr;
  };

  useEffect(() => {
    setCloudsByLayer(layers.map((_, idx) => makeClouds(cloudCount[idx] ?? 5, idx)));
  }, []);

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />

      {layers.map((layer, idx) => (
        <div
          key={`layer-${idx}`}
          className="cloud-layer absolute inset-0 overflow-hidden"
          style={{
            animation: `pan-${idx} ${layer.speed}s linear infinite`,
            opacity: layer.opacity,
            filter: `blur(${layer.blur}px)`,
            transform: `scale(${layer.scale})`
          }}
        >
          <div className="absolute inset-0">{cloudsByLayer[idx] ?? null}</div>
        </div>
      ))}

      <style jsx>{`
        .cloud-layer {
          background: rgba(0,0,0,0.1) !important; /* visualize the container */
          overflow: visible !important;
          opacity: 1 !important;
        }
        
        .cloud-shape {
          background: red !important;
          opacity: 1 !important;
          width: 40vw !important;
          height: 20vw !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        
        
        

        .cloud-shape::before,
        .cloud-shape::after {
          content: "";
          position: absolute;
          background: inherit;
          border-radius: inherit;
          box-shadow: inherit;
        }

        .cloud-shape::before {
          width: 60%;
          height: 80%;
          top: -28%;
          left: 12%;
        }

        .cloud-shape::after {
          width: 48%;
          height: 70%;
          top: -8%;
          left: 42%;
        }

        @keyframes floaty {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5%) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

        @keyframes pan-0 {
          0% { transform: translateX(-20%); }
          100% { transform: translateX(120%); }
        }

        @keyframes pan-1 {
          0% { transform: translateX(120%); }
          100% { transform: translateX(-20%); }
        }

        @keyframes pan-2 {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(110%); }
        }
      `}</style>
    </div>
  );
}
