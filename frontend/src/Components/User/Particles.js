import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Lightweight version for optimized performance

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: "#060516", // Dark background for the tech theme
        }, 
      },
      particles: {
        number: { value: 150, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 9.620472365193136,
          direction: "top-left",
          random: true,
          straight: true,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 1122.388442605866,
            rotateY: 1202.559045649142
          }
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 105.56403676876612, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
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
