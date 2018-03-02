import KeyControls from "../lib/KeyControls.js";

const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");

const { width: w, height: h } = canvas;

// Game setup
let x = w / 2;
let y = h / 2;
let color = 0;
const controls = new KeyControls();

function loopy(ms) {
    requestAnimationFrame(loopy);

    // Game logic code
    x += controls.x;
    y += controls.y;
    if (controls.action) {
        color += 10;
        if (color > 360) {
            color -= 360;
        }
    }

    // Draw the rectangle
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
    ctx.fillRect(x, y, 50, 50);
}
requestAnimationFrame(loopy);