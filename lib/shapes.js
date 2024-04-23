// Export the Triangle class
export class Triangle {
  // Constructor for the Triangle class
  constructor(x, y, side) {
    // The x-coordinate of the center of the triangle
    this.x = x;
    // The y-coordinate of the center of the triangle
    this.y = y;
    // The length of the sides of the triangle
    this.side = side;
  }

  // Method to render the triangle as an SVG path
  render(color) {
    // Calculate the height of the triangle
    const height = (Math.sqrt(3) / 2) * this.side;
    // Create the SVG path for the triangle
    const path = `M ${this.x} ${this.y - height / 2} ` +
                 `L ${this.x - this.side / 2} ${this.y + height / 2} ` +
                 `L ${this.x + this.side / 2} ${this.y + height / 2} ` +
                 `Z`;
    // Set the fill color of the triangle
    const fill = color ? `fill="${color}"` : '';
    // Return the SVG path element
    return `<path d="${path}" ${fill}/>`;
  }
}

// Export the Circle class
export class Circle {
  // Constructor for the Circle class
  constructor(cx, cy, r) {
    // The x-coordinate of the center of the circle
    this.cx = cx;
    // The y-coordinate of the center of the circle
    this.cy = cy;
    // The radius of the circle
    this.r = r;
  }

  // Method to render the circle as an SVG circle
  render(color) {
    // Set the fill color of the circle
    const fill = color ? `fill="${color}"` : '';
    // Return the SVG circle element
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" ${fill}/>`;
  }
}

// Export the Square class
export class Square {
  // Constructor for the Square class
  constructor(x, y, side) {
    // The x-coordinate of the center of the square
    this.x = x;
    // The y-coordinate of the center of the square
    this.y = y;
    // The length of the sides of the square
    this.side = side;
  }

  // Method to render the square as an SVG rectangle
  render(color) {
    // Set the fill color of the square
    const fill = color ? `fill="${color}"` : '';
    // Return the SVG rectangle element
    return `<rect x="${this.x - this.side / 2}" y="${this.y - this.side / 2}" width="${this.side}" height="${this.side}" ${fill}/>`;
  }
}