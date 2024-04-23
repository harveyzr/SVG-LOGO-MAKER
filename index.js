// Import the coloursArray from the colorusArray.js file
import { coloursArray } from './colorusArray.js';

// Import the fs (file system) module for file operations
import fs from 'fs';

// Import the path module for handling and transforming file paths
import path from 'path';

// Get the directory name of the current module
const __dirname = path.resolve();

// Import the inquirer module for creating interactive command line user interface
import inquirer from 'inquirer';

// Import the Triangle, Circle, and Square classes from the shapes.js file in the lib directory
import { Triangle, Circle, Square } from './lib/shapes.js';

// Set the width of the canvas
const canvasWidth = 300;

// Set the height of the canvas
const canvasHeight = 200;

// Use inquirer to prompt the user for inputs
inquirer
  .prompt([
    {
      // The type of the prompt is 'input' which asks the user to type something
      type: 'input',  
      // The name of the input field is 'text'
      name: 'text',
      // The message to display to the user
      message: 'Enter up to three characters:',
      // The validation function to check the user's input
      validate: (input) => input.length <= 3,
    },
    {
      // Another 'input' type prompt
      type: 'input',
      // The name of the input field is 'textColor'
      name: 'textColor',
      // The message to display to the user
      message: 'Enter the text color or keyword (refer to coloursArray.js)):',
      // The validation function to check the user's input
      validate: (input) => {
        // Check if the input is a color name
        const isColorName = coloursArray.includes(input.toLowerCase());
        // Check if the input is a hex code
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        // Return true if the input is a color name or a hex code
        return isColorName || isHexCode;
      },
    },
    {
      // The type of the prompt is 'list' which asks the user to select an option from a list
      type: 'list',
      // The name of the input field is 'shape'
      name: 'shape',
      // The message to display to the user
      message: 'Choose a shape:',
      // The choices for the user to select from
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      // Another 'input' type prompt
      type: 'input',
      // The name of the input field is 'shapeColor'
      name: 'shapeColor',
      // The message to display to the user
      message: 'Enter the shape color (hexadecimal or keyword):',
      // The validation function to check the user's input
      validate: (input) => {
        // Check if the input is a color name
        const isColorName = coloursArray.includes(input.toLowerCase());
        // Check if the input is a hex code
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        // Return true if the input is a color name or a hex code
        return isColorName || isHexCode;
      },
    },
  ])

  // Handle the user's answers
  .then((answers) => {
    // Declare a variable to hold the shape
    let shape;

    // Create a text object with attributes and a render method
    const text = {
      // The attributes of the text
      _attributes: {
        x: canvasWidth / 2,
        y: canvasHeight / 1.35,
        'text-anchor': 'middle',
        fill: answers.textColor,
      },
      // The text to display
      _text: answers.text.toUpperCase(), 
      
      // The render method to create the SVG text element
      render: function() { 
        return ` 
          <text x="${this._attributes.x}" y="${this._attributes.y}" 
                text-anchor="${this._attributes['text-anchor']}"
                fill="${this._attributes.fill}" font-size="${fontSize}">
            ${this._text}
          </text>
        `;
      },
    };

    // Declare a variable to hold the font size
    let fontSize;

    // Switch statement to handle different shapes
    switch (answers.shape) {
      // Case when the shape is a Circle
      case 'Circle':
        // Calculate the radius for the circle
        const circleRadius = Math.min(canvasWidth, canvasHeight) * 0.45;
        // Create a new Circle instance
        shape = new Circle(canvasWidth / 2, canvasHeight / 2, circleRadius);
        // Adjust the y attribute of the text for the circle
        text._attributes.y = canvasHeight / 1.65;
        // Set the font size for the circle
        fontSize = 58;
        break;
      // Case when the shape is a Triangle
      case 'Triangle':
        // Calculate the height for the triangle
        const triangleHeight = Math.min(canvasWidth, canvasHeight) * 1.1;
        // Create a new Triangle instance
        shape = new Triangle(canvasWidth / 2, canvasHeight / 2, triangleHeight);
        // Set the font size for the triangle
        fontSize = 52;
        break;
      // Case when the shape is a Square
      case 'Square':
        // Calculate the size for the square
        const squareSize = Math.min(canvasWidth, canvasHeight) * 0.8;
        // Create a new Square instance
        shape = new Square(canvasWidth / 2, canvasHeight / 2, squareSize);
        // Adjust the y attribute of the text for the square
        text._attributes.y = canvasHeight / 1.65;
        // Set the font size for the square
        fontSize = 60;
        break;
    }

    // Create the SVG data for the shape and text
    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}">
        ${shape.render(answers.shapeColor)}
        ${text.render()}
      </svg>`;

    // Write the SVG data to a file
    fs.writeFileSync(`${__dirname}/logo.svg`, svgData.toString());

    // Log a message to the console
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    // Log any errors to the console
    console.error(error);
  });