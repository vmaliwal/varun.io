import React from 'react';
import {
  HeroWrapper,
  RectangleWrapper,
  HeroTextWrapper,
  HeroSketchWrapper,
} from '../elements';
import P5Sketch from './P5Sketch';
import Sketch from '../art/solLeWittSquare';

export default function Hero() {
  return (
    <HeroWrapper>
      <RectangleWrapper color="#3fafb9">
        <HeroTextWrapper>
          <p className="text-primary">
            I am Varun, Software Engineering Leader and Generative Art
            enthusiast.
          </p>
          <p className="text-secondary">
            I write about technology, leadership and random things I make,
            obeserve or react to. Currently I am looking for Engineering Manager
            positions.
          </p>
          <HeroSketchWrapper>
            <P5Sketch art={Sketch} />
            <p>
              Recreating Sol LeWitt's "A Square Divided Horizontally and
              Vertically into Four Equal Parts 1982"
            </p>
          </HeroSketchWrapper>
        </HeroTextWrapper>
      </RectangleWrapper>
    </HeroWrapper>
  );
}
