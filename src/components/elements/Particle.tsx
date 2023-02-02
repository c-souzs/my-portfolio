import React from "react";

import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = React.useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {}, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                particles: {
                    number: {
                    value: 160,
                    density: {
                        enable: true,
                        value_area: 1500
                    }
                    },
                    line_linked: {
                    enable: false,
                    opacity: 0.03
                    },
                    move: {
                    direction: "right",
                    speed: 0.1
                    },
                    size: {
                    value: 1
                    },
                    color:{
                    value: "#0E7CFF"
                    },
                    opacity: {
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.05
                    }
                    }
                },
                interactivity: {
                    events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                    },
                    modes: {
                    push: {
                        particles_nb: 1
                    }
                    }
                },
                retina_detect: true
                }
            }
        />
    )
}

export default Particle;