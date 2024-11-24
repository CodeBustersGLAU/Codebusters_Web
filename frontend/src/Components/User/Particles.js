import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Lightweight version for optimized performance

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#1a1a1a", // Dark background for the tech theme
        },
      },
      particles: {
        number: {
          value: 100, // Moderate particle count for balance
          density: {
            enable: true,
            area: 800, // Density of particles
          },
        },
        color: {
          value: ["#1e90ff", "#00bfff", "#000000"], // Blue shades for a tech and professional look
        },
        links: {
          enable: true, // Enable particle links
          color: "#ffffff", // White links to contrast against dark background
          distance: 150, // Distance for link effect
          opacity: 0.4, // Slight opacity for links
          width: 1.5, // Thicker links for emphasis
        },
        move: {
          enable: true,
          speed: 4, // Faster particle movement
          direction: "none", // Free movement
          random: true, // Randomized movement for fluidity
          straight: false,
          outModes: {
            default: "bounce", // Particles bounce off edges
          },
        },
        size: {
          value: { min: 3, max: 6 }, // Particle size range for visual clarity
        },
        opacity: {
          value: { min: 0.4, max: 0.9 }, // Smooth opacity variation
          animation: {
            enable: true,
            speed: 2, // Smooth opacity animation
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle", // Circular particles for a clean look
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract", // Attraction effect on hover (particles move towards cursor)
          },
          onClick: {
            enable: true,
            mode: "push", // New particles are pushed on click
          },
        },
        modes: {
          attract: {
            distance: 200, // Distance for attraction effect (particles drawn towards cursor)
            duration: 0.4, // Smooth duration for attraction
            factor: 2, // Stronger attraction effect
          },
          push: {
            quantity: 4, // Generate new particles on click
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine); // Initialize particles with slim version for performance
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
        zIndex: -1, // Ensure particles are in the background
        pointerEvents: "none", // Disable interaction with particles
      }}
    />
  );
};

export default ParticlesComponent;
