import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#000033", // Base color as a fallback
        },
        image: "linear-gradient(45deg, #1e3a8a, #0f172a)", // Gradient background
        position: "center",
        repeat: "no-repeat",
        size: "cover",
      },
      particles: {
        number: {
          value: 80, // Slightly reduced count for clarity
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ["#ff7e5f", "#feb47b", "#a8ff78"], // Gradient-inspired particle colors
        },
        links: {
          enable: true,
          color: "#fffbf0", // Light ivory for contrast
          distance: 120,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2, // Smoother movement
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        size: {
          value: { min: 2, max: 5 }, // Slightly smaller size for minimalism
        },
        opacity: {
          value: { min: 0.5, max: 0.8 },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 0.4,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle"], // Add variety to shapes
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Repulsion effect for hover
          },
          onClick: {
            enable: true,
            mode: "bubble", // Bubble effect on click
          },
        },
        modes: {
          repulse: {
            distance: 150, // Push particles away on hover
            duration: 0.3,
          },
          bubble: {
            distance: 200, // Bubbles form at a distance
            size: 8, // Larger size bubbles
            duration: 1,
            opacity: 0.8,
            color: "#ffffff", // White bubble for contrast
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesComponent;
