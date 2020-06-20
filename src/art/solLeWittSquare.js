export default function Sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.noFill();
    p5.noLoop();
  };

  p5.draw = () => {
    const width = p5.width - 2;
    const height = p5.height - 2;

    const X = 1,
      Y = 1;

    p5.stroke('#0F0F0F');
    p5.strokeWeight(4);
    p5.square(X, Y, width);

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
    const rectangle1 = Rectangle(0, 0, width / 2);

    const { top, bottom } = rectangle1.pointsOnRectangle(10);

    for (let i = 0; i < top.x.length - 1; i += 1) {
      p5.line(
        top.x[i] || top.x[0],
        top.y[i] || top.y[0],
        bottom.x[i] || bottom.x[0],
        bottom.y[i] || bottom.y[0]
      );
    }

    // rectangle 4
    const rectangle4 = Rectangle(width / 2, 0, width / 2);
    const { left: left4, right: right4 } = rectangle4.pointsOnRectangle(10);

    for (let i = 0; i < left4.y.length - 1; i++) {
      p5.line(
        left4.x[i] || left4.x[0],
        left4.y[i] || left4.y[0],
        right4.x[i] || right4.x[0],
        right4.y[i] || right4.y[0]
      );
    }

    // rectangle 2
    const rectangle2 = Rectangle(0, height / 2, height / 2);

    const {
      left: left2,
      right: right2,
      top: top2,
      bottom: bottom2,
    } = rectangle2.pointsOnRectangle(12.4);

    for (let i = 0; i < top2.x.length - 1; i++) {
      p5.line(
        left2.x[i] || left2.x[0],
        left2.y[i] || left2.y[0],
        top2.x[i] || top2.x[0],
        top2.y[i] || top2.y[0]
      );
    }

    for (let i = 0; i < right2.y.length - 1; i++) {
      p5.line(
        bottom2.x[i] || bottom2.x[0],
        bottom2.y[i] || bottom2.y[0],
        right2.x[i] || right2.x[0],
        right2.y[i] || right2.x[0]
      );
    }

    // rectangle 3
    const rectangle3 = Rectangle(width / 2, height / 2, height / 2);
    let { coordinates: coordinates3 } = rectangle3;

    const {
      top: top3,
      left: left3,
      right: right3,
      bottom: bottom3,
    } = rectangle3.pointsOnRectangle(12.4);

    for (let i = 0, j = right3.y.length - 2; i < top3.x.length - 1; i++, j--) {
      p5.line(
        top3.x[i] || top3.x[0],
        top3.y[i] || top3.y[0],
        right3.x[j] || right3.x[0],
        right3.y[j] || right3.y[0]
      );
    }

    for (
      let i = 0, j = bottom3.x.length - 2;
      i < left3.y.length - 1;
      i++, j--
    ) {
      p5.line(
        left3.x[i] || left3.x[0],
        left3.y[i] || left3.y[0],
        bottom3.x[j] || bottom3.x[0],
        bottom3.y[j] || bottom3.y[0]
      );
    }

    /*
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
    */
  };

  function Rectangle(x, y, sideX, sideY = sideX) {
    return {
      area: area(),
      coordinates: coordinates(),
      diagonalCoordinates: diagonalCoordinates(),
      lengthOfDiagonal: lengthOfDiagonal(),
      pointsOnRectangle,
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

    // Return coordinates of rectangle specified by distance;
    function pointsOnRectangle(distance) {
      const { x1, y1, x2, y2, x3, y3, x4, y4 } = coordinates();

      const x1x4 = _pointsOnLine(x1, y1, x4, y4, distance);
      const x1x2 = _pointsOnLine(x1, y1, x2, y2, distance);
      const x2x3 = _pointsOnLine(x2, y2, x3, y3, distance);
      const x3x4 = _pointsOnLine(x3, y3, x4, y4, distance);

      return {
        top: x1x4,
        left: x1x2,
        bottom: x2x3,
        right: x3x4,
      };
    }

    function _pointsOnLine(x1, y1, x2, y2, step = 1) {
      const x = _range(x1, x2, step);
      const y = _range(y1, y2, step);

      return { x, y };
    }

    function _range(start, end, step = 1) {
      if (start > end) [start, end] = [end, start];

      const a = [start];
      let b = start;
      while (b < end) {
        a.push((b += step));
      }

      return [...a];
    }
  }
}
