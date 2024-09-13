/**
 * Creating Variables
 * Bianca Granata
 * 
 * experimenting with create variables
 */

"use strict";

/**creates the canvas
*/
function setup() {
    createCanvas(480, 480);
}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    // the cheese
    background(255, 255, 0);
    //the hole
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, 100);
    pop();

}