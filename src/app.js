"use strict";

const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

// clear canvas drawing
ctx.clearRect(0, 0, 800, 600);

// drawing rectangle and filling color in created rectangle
ctx.fillStyle = "#f00";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#0f0";
ctx.fillRect(201, 200, 50, 50);
