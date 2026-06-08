import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 2,
          },
          color: {
            value: "#38bdf8",
          },
          opacity: {
            value: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;