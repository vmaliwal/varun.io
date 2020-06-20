import React from 'react';
import {
  HeroWrapper,
  RectangleWrapper,
  HeroTextWrapper,
  HeroSketchWrapper,
} from '../elements';
import P5Sketch from './P5Sketch';
import Sketch from '../art/solLevitSquare';

export default function Hero() {
  return (
    <HeroWrapper>
      <RectangleWrapper color="#3fafb9">
        <HeroTextWrapper>
          <p className="text-primary">
            I am Varun, Software Engineer and Generative Art enthusiast.
          </p>
          <p className="text-secondary">
            I write about technology, leadership and random things I make,
            obeserve or react to. Currently I am looking for Engineering Manager
            positions.
          </p>
          <HeroSketchWrapper>
            <P5Sketch art={Sketch} />
          </HeroSketchWrapper>
        </HeroTextWrapper>
      </RectangleWrapper>
    </HeroWrapper>
  );
}
