// Prevent us from attempting to use variables
// that are not declared
"use strict"

function add(a, b) {
    return a + b;
}

let sum = add(24, 32);
console.log(sum);

function calculateVolume(length, width, height) {
    return length * width * height;
}

let volume = calculateVolume(2, 4, 6);
console.log("Volume of object:", volume);

function greetUser(name) {
    console.log("Hello, " + name + "! Thank you for visiting our website.");
}

greetUser("Kitty Cat");

function sayWhat(name, message = "What?") {
    console.log(name + ", " + message);
}

sayWhat("Karen");
sayWhat("Pikachu", "Huh?");