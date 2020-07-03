export default function Sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(300, 300);
    p5.noFill();
    p5.noLoop();
  };

  p5.draw = () => {
    p5.background(0);
    p5.stroke(255);

    // leave 10% margin on all sides
    const margin = 0.1;
    const x = p5.width * margin;
    const y = p5.height * margin;

    // adjust width & height based on margin
    let w = p5.width - 2 * x;
    let h = p5.height - 2 * y;

    p5.rect(x, y, w, h);
  };
}
