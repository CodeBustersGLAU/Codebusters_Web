import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#001533",
        },
        image: "linear-gradient(45deg, #1e3a8a, #0f172a)",
        position: "center",
        repeat: "no-repeat",
        size: "cover",
      },
      particles: {
        number: {
          value: 80, // Slightly increased particle count for richness
          density: {
            enable: true,
            area: 900, // Balanced spread
          },
        },
        color: {
          value: ["#8e44ad", "#3498db", "#e74c3c"],
        },
        links: {
          enable: true,
          color: "#cfd8dc",
          distance: 150, // Wider connections
          opacity: 0.4, // Softer link visibility
          width: 0.8, // Slightly thinner links
        },
        move: {
          enable: true,
          speed: 1.5, // Increased speed slightly
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          path: {
            enable: true, // Adds a subtle curve to movement
            delay: {
              value: 0.5,
            },
          },
        },
        size: {
          value: { min: 4, max: 10 }, // Broader size variation
        },
        opacity: {
          value: { min: 0.3, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.8, // Slight fade animation
            minimumValue: 0.2,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "square", "triangle", "polygon"], // Added triangles
          options: {
            polygon: { sides: 4 }, // Diamond shapes
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          repulse: {
            distance: 80, // Subtle repulsion
            duration: 0.3, // Quick response
          },
          bubble: {
            distance: 150,
            size: 15, // Larger bubble sizes
            duration: 2, // Smoother animation
            opacity: 0.9,
            color: "#ffffff",
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
