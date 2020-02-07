'use strict';

import { pJSContainer } from "./pjscontainer";

export class pJSRetina {
    pJSContainer: pJSContainer;
    isRetina: boolean;

    constructor(pJSContainer: pJSContainer) {
        this.pJSContainer = pJSContainer;
        this.isRetina = false;
    }

    init() {
        let pJS = this.pJSContainer;
        let options = pJS.options;

        if (options.retina_detect && window.devicePixelRatio > 1) {
            pJS.canvas.pxratio = window.devicePixelRatio;
            this.isRetina = true;
        }
        else {
            pJS.canvas.pxratio = 1;
            this.isRetina = false;
        }

        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
        
        options.particles.size.value = options.particles.size.value * pJS.canvas.pxratio;
        options.particles.size.anim.speed = options.particles.size.anim.speed * pJS.canvas.pxratio;
        options.particles.move.speed = options.particles.move.speed * pJS.canvas.pxratio;
        options.particles.line_linked.distance = options.particles.line_linked.distance * pJS.canvas.pxratio;
        options.interactivity.modes.grab.distance = options.interactivity.modes.grab.distance * pJS.canvas.pxratio;
        options.interactivity.modes.bubble.distance = options.interactivity.modes.bubble.distance * pJS.canvas.pxratio;
        options.particles.line_linked.width = options.particles.line_linked.width * pJS.canvas.pxratio;
        options.interactivity.modes.bubble.size = options.interactivity.modes.bubble.size * pJS.canvas.pxratio;
        options.interactivity.modes.repulse.distance = options.interactivity.modes.repulse.distance * pJS.canvas.pxratio;
    }
}