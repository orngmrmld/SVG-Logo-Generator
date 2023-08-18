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

function init(){
    inquirer.prompt(questions)
    .then(function(answers) {
        if(answers.shape === 'circle'){
            const circle = new Circle(answers.shape_color)
            writeToFile('circle-logo.svg', createSVG(answers.logo_text, answers.text_color, circle.render()))
        } else if (answers.shape === 'triangle'){
            const triangle = new Triangle(answers.shape_color)
            writeToFile('triangle-logo.svg', createSVG(answers.logo_text, answers.text_color, triangle.render()))
        } else if (answers.shape === 'square'){
            const square = new Square(answers.shape_color)
            writeToFile('square-logo.svg', createSVG(answers.logo_text, answers.text_color, square.render()))
        } else {
            console.log("Choose a valid shape.");
        }
    
    });
};

function createSVG(logo_name, text_color, logo_shape) {
    return `<svg version="1.1" width="350" height="350" xmlns="http://www.w3.org/2000/svg">
    ${logo_shape}
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${text_color}">${logo_name}</text>
    </svg>
    `;
};

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
    console.log("Generated logo.svg");
};

init();