const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const questions = [
    {
        type:"input",
        name:"logo_text",
        message:"Enter the initials for your logo. (Cannot exceed 3 characters)",
    },
    {
        type:"input",
        name:"text_color",
        message:"Enter desired color",
    },
    {
        type:"list",
        name:"shape",
        message:"What shape do you want your logo to be?",
        choices: [
            "circle",
            "square",
            "triangle",
        ]
    },
    {
        type:"input",
        name:"shape_color",
        message:"What color do you want the shape to be?"
    }
]