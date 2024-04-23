// Import the Triangle, Circle, and Square classes from the 'shapes.js' module.
import { Triangle, Circle, Square } from './shapes.js';

// Describe a test suite named 'Shapes'.
describe('Shapes', () => {
  // Define a test case for the Triangle class.
  test('Triangle should render correctly', () => {
    // Create a new instance of Triangle with specified coordinates and size.
    const triangle = new Triangle(0, 0, 100);
    // Define the expected SVG path string for the triangle.
    const expected = '<path d="M 0 -43.30127018922193 L -50 43.30127018922193 L 50 43.30127018922193 Z" />';
    // Assert that the render method of the triangle instance returns the expected SVG path.
    expect(triangle.render()).toBe(expected);
  });

  // Define a test case for the Circle class.
  test('Circle should render correctly', () => {
    // Create a new instance of Circle with specified center coordinates and radius.
    const circle = new Circle(0, 0, 50);
    // Define the expected SVG circle element string for the circle.
    const expected = '<circle cx="0" cy="0" r="50" />';
    // Assert that the render method of the circle instance returns the expected SVG circle.
    expect(circle.render()).toBe(expected);
  });

  // Define a test case for the Square class.
  test('Square should render correctly', () => {
    // Create a new instance of Square with specified coordinates and size.
    const square = new Square(0, 0, 100);
    // Define the expected SVG rectangle element string for the square.
    const expected = '<rect x="-50" y="-50" width="100" height="100" />';
    // Assert that the render method of the square instance returns the expected SVG rectangle.
    expect(square.render()).toBe(expected);
  });
});

// This code snippet is a set of unit tests for three different shape classes—Triangle, Circle, and Square—which are presumably used to render SVG shapes. 
// Each test case checks if the render method of an instance of these classes returns the correct SVG string representation. 
// The describe function groups the tests into a test suite, and the test function defines individual test cases. The expect function is used to assert that the actual output matches the expected result.