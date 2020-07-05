export default function Sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.noFill();
    p5.noLoop();
  };

  p5.draw = () => {
    p5.background(0);
    p5.stroke(255);

    const margin = 0.1;
    const x = p5.width * margin;
    const y = p5.height * margin;

    let w = p5.width - 2 * x;
    let h = p5.height - 2 * y;

    const rectangle = new Rectangle(x, y, w, h);
    rectangle.draw();
  };

  // function drawLine(pointA, pointB) {
  //   p5.line(pointA[0], pointA[1], pointB[0], pointB[1]);
  // }

  function Rectangle(x, y, width, height) {
    return {
      centerCoordinates,
      coordinates,
      draw,
    };

    function centerCoordinates(midpoints = {}) {
      const midpointMapping = {
        ab: 'p',
        bc: 'q',
        cd: 'r',
        da: 's',
        ba: 'p',
        cb: 'q',
        dc: 'r',
        ad: 's',
      };

      const calculateMidpoint = (point1, point2) => {
        let [kA, pointA] = point1;
        let [kB, pointB] = point2;

        const edge = `${kA}${kB}`;

        midpoints[midpointMapping[edge]] = pointCoordinatesOnLine(
          pointA,
          pointB,
          0.5
        );

        return point2;
      };

      const coordinatesArray = Object.entries(coordinates());
      const sideDA = [
        coordinatesArray[0],
        coordinatesArray[coordinatesArray.length - 1],
      ];

      [...coordinatesArray, ...sideDA].reduce((point1, point2) =>
        calculateMidpoint(point1, point2)
      );

      return midpoints;
    }

    function coordinates() {
      const w = x + width;
      const h = y + height;

      return {
        a: [x, y],
        b: [w, y],
        c: [w, h],
        d: [x, h],
      };
    }

    function draw() {
      p5.rect(x, y, width, height);
    }
  }

  // find coordinates of a point on line at distance k
  function pointCoordinatesOnLine(pointA, pointB, k) {
    const x = pointA[0] + k * (pointB[0] - pointA[0]);
    const y = pointA[1] + k * (pointB[1] - pointA[1]);

    return [x, y];
  }
}
