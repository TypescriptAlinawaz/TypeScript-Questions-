"use strict";
//Magicians:Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names.
const magicianNames = ["David Copperfield", "Doug Henning", "Lance Burton", "Ricky Jay", "Mark Wilson"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Call the function to show the  magician's Names.
show_magicians(magicianNames);
