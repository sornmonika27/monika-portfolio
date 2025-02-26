'use client'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const App = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: Container) => {
        console.log(container);
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    // particlesLoaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "repulse" },
                                // resize: true,
                            },
                            modes: {
                                push: { quantity: 6 },
                                repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#8A2BE2", "#9400D3", "#D8BFD8"], // Purple shades
                            },
                            links: {
                                enable: false, // No lines, just sparkles
                            },
                            move: {
                                direction: "top", // Rising effect
                                enable: true,
                                outModes: { default: "out" },
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                // density: { enable: true, area: 800 },
                                value: 120, // More particles for a richer effect
                            },
                            opacity: {
                                value: { min: 0.3, max: 1 },
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    // minimumValue: 0.3,
                                    sync: false,
                                },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 6 },
                                animation: {
                                    enable: true,
                                    speed: 2,
                                    // minimumValue: 1,
                                    sync: false,
                                },
                            },
                            glow: {
                                enable: true,
                                color: "#8A2BE2",
                                intensity: 0.8,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default App;
