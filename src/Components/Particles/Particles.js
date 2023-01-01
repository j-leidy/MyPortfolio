import React from "react";
import {loadFull} from "tsparticles"
import Particles from "react-tsparticles";


const ParticlesComponent = ({active}) =>{
    let color = "#000000"
    let color_rest = "#000000"
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    if (active === true){
        color = "#ffffff"
        color_rest = "#000000"
    }
    if (active === false){
        color = "#0A0A0A"
        color_rest = "#ffffff"
    }
    return(
            <Particles 
            id="tsparticles"
            init={particlesInit}
            options = {{
                "fullScreen" :{
                    "enable" : true,
                    "zIndex" : -10,
                },
                "particles": {
                    "number": {
                        "value": 10,
                        "density": {
                            "enable": true,
                            "value_area": 100
                        }
                    },
                    "color": {
                        "value": color_rest
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
                        "value": 5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
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
                        "distance": 100,
                        "color": color_rest,
                        "opacity": 1,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 0.2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": ["grab"]
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
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
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    "color": color,
                    "image": "",
                    "position": "absolute",
                    "repeat": "no-repeat",
                    "size": "cover"
                },
                "style" : {
                    
                }
            }}

            />
    );
};

export default ParticlesComponent;