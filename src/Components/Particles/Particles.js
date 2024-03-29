import React from "react";
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles";


const ParticlesComponent = ({ active, entered }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": entered ? -15 : 15,
                },
                "particles": {
                    "number": {
                        "value": entered ? 20 : 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": active ? "#ffffff" : entered ? "#0A0A0A" : "#ffffff"
                    },
                    "shape": {
                        "type": "none",
                        "options": {
                            "sides": 1
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 2,
                            "size_min": 0.5,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 200,
                        "color": active ? "#000000" : entered ? "#ffffff" : "#000000",
                        "opacity": 1,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": entered ? 0.3 : 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": entered,
                            "rotateX": 600,
                            "rotateY": 600
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": !entered,
                            "mode": ["repulse"]
                        },
                        "onclick": {
                            "enable": !entered,
                            "mode": "remove"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 200,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 5
                        },
                        "repulse": {
                            "distance": 100
                        },
                        "push": {
                            "particles_nb": 50
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "smooth": true,
                "fpsLimit": 120,
                "background": {
                    "color": active ? "#ffffff" : entered ? "#0A0A0A" : "#ffffff",
                    "image": "",
                    "position": "absolute",
                    "repeat": "no-repeat",
                    "size": "cover"
                },
                "style": {
                    "transition": "1s all ease",
                    "width": "100%",
                    "height": "100%",
                    "maxWidth": "100%"
                }
            }}

        />
    );
};

export default ParticlesComponent;