"use strict";

const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// clear canvas drawing
ctx.clearRect(0, 0, 800, 600);

ctx.fillRect(201, 200, 50, 50);
