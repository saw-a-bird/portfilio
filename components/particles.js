import Particles from 'react-particles'
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import ParticlesJSON from '../public/json/particles.json'
import particleCSS from '../styles/particles.module.css'

const ParticleArea = () => {
  const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
      console.log(container);
  }, []);

  return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className={particleCSS.particleArea}
          params={ ParticlesJSON }
      />
  );
};

export default ParticleArea