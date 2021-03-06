"use strict";

import {MoveDirection} from "../../Enums/MoveDirection";
import {InteractivityDetect} from "../../Enums/InteractivityDetect";
import {IOptions} from "../../Interfaces/Options/IOptions";
import {ShapeType} from "../../Enums/ShapeType";
import {ClickMode} from "../../Enums/Modes/ClickMode";
import {HoverMode} from "../../Enums/Modes/HoverMode";
import {OutMode} from "../../Enums/OutMode";
import {PolygonMaskType} from "../../Enums/PolygonMaskType";
import {DivMode} from "../../Enums/Modes/DivMode";

/**
 * Project's constants
 */
export class Constants {
    /**
     * Particles canvas element class name
     */
    public static readonly canvasClass: string = "tsparticles-canvas-el";

    /**
     * Particles default options
     */
    public static readonly defaultOptions: IOptions = {
        fps_limit: 60,
        interactivity: {
            detect_on: InteractivityDetect.canvas,
            events: {
                onclick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                ondiv: {
                    el: "repulse-div",
                    enable: false,
                    mode: DivMode.repulse,
                },
                onhover: {
                    enable: true,
                    mode: HoverMode.grab,
                    parallax: {
                        enable: false,
                        force: 2,
                        smooth: 10,
                    },
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 200,
                    duration: 0.4,
                    opacity: 1,
                    size: 80,
                },
                connect: {
                    distance: 80,
                    line_linked: {
                        opacity: 0.5,
                    },
                    radius: 60,
                },
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1,
                    },
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#fff",
            },
            line_linked: {
                blink: false,
                color: "#fff",
                consent: false,
                distance: 100,
                enable: true,
                opacity: 1,
                width: 1,
            },
            move: {
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000,
                },
                bounce: false,
                direction: MoveDirection.none,
                enable: true,
                out_mode: OutMode.out,
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                limit: 0,
                value: 400,
            },
            opacity: {
                anim: {
                    enable: false,
                    opacity_min: 0,
                    speed: 2,
                    sync: false,
                },
                random: false,
                value: 1,
            },
            shape: {
                character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400",
                },
                image: {
                    height: 100,
                    replace_color: true,
                    src: "",
                    width: 100,
                },
                polygon: {
                    nb_sides: 5,
                },
                stroke: {
                    color: "#ff0000",
                    width: 0,
                },
                type: ShapeType.circle,
            },
            size: {
                anim: {
                    enable: false,
                    size_min: 0,
                    speed: 20,
                    sync: false,
                },
                random: false,
                value: 20,
            },
        },
        polygon: {
            draw: {
                enable: false,
                lineColor: "#ffffff",
                lineWidth: 0.5,
            },
            move: {
                radius: 10,
            },
            scale: 1,
            type: PolygonMaskType.none,
            url: "",
        },
        retina_detect: false,
    };
}
