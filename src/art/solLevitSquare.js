export default function Sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.noFill();
    p5.noLoop();
  };

  p5.draw = () => {
    const width = p5.width - 2;
    const height = p5.height - 2;

    p5.stroke('#0F0F0F');
    p5.strokeWeight(4);
    p5.square(1, 1, width);

    // divide square in half

    const x1 = width / 2;
    const y1 = 0;
    const x2 = x1;
    const y2 = height;

    p5.line(x1, y1, x2, y2);

    const y3 = height / 2;
    const x3 = 0;
    const y4 = y3;
    const x4 = width;

    p5.line(x3, y3, x4, y4);

    // rectangle 1
    for (let i = y1 + 10; i < x1; i += 10) {
      p5.line(i, 0, i, height / 2);
    }

    // rectangle 4
    for (let i = y1 + 10; i < x1; i += 10) {
      p5.line(width / 2, i, width, i);
    }

    // rectangle 2
    const rectangle2 = Rectangle(0, height / 2, height / 2);
    let { coordinates } = rectangle2;

    for (let i = 0; i < width / 2; i += 10) {
      p5.line(
        coordinates.x1,
        coordinates.y1 + i,
        coordinates.x1 + i,
        coordinates.y1
      );
    }

    for (let i = 0; i < width / 2; i += 10) {
      p5.line(
        coordinates.x2 + i,
        coordinates.y2,
        coordinates.x4,
        coordinates.y4 + i
      );
    }

    // rectangle 3
    const rectangle3 = Rectangle(width / 2, height / 2, height / 2);
    let { coordinates: coordinates3 } = rectangle3;

    for (let i = 0; i < width / 2; i += 10) {
      p5.line(
        coordinates3.x1 + i,
        coordinates3.y1,
        coordinates3.x3,
        coordinates3.y3 - i
      );
    }

    for (let i = 0; i < width / 2; i += 10) {
      p5.line(
        coordinates3.x1,
        coordinates3.y1 + i,
        coordinates3.x3 - i,
        coordinates3.y3
      );
    }
  };

  function Rectangle(x, y, sideX, sideY = sideX) {
    return {
      area: area(),
      coordinates: coordinates(),
      diagonalCoordinates: diagonalCoordinates(),
      lengthOfDiagonal: lengthOfDiagonal(),
    };

    function area() {
      return sideX * sideY;
    }

    function coordinates() {
      return {
        x1: x,
        y1: y,
        x2: x,
        y2: y + sideY,
        x3: x + sideX,
        y3: y + sideY,
        x4: x + sideX,
        y4: y,
      };
    }

    function diagonalCoordinates() {
      const { x2, y2, x4, y4, x1, y1, x3, y3 } = coordinates();

      return {
        topRight: {
          x1: x2,
          y1: y2,
          x2: x4,
          y2: y4,
        },
        topLeft: {
          x1,
          y1,
          x2: x3,
          y2: y3,
        },
      };
    }

    function lengthOfDiagonal() {
      return p5.sqrt((sideX ^ 2) + (sideY ^ 2));
    }
  }
}
