import React from 'react';
import { HeroWrapper, RectangleWrapper, HeroTextWrapper } from '../elements';

export default function Hero() {
  return (
    <HeroWrapper>
      <RectangleWrapper>
        <HeroTextWrapper>
          <p className="text-primary">
            I am Varun, Software Engineer and Generative Art enthusiast.
          </p>
          <p className="text-secondary">
            I write about technology, leadership and random things I make,
            obeserve or react to. Currently I am looking for Engineering Manager
            positions.
          </p>
        </HeroTextWrapper>
      </RectangleWrapper>
    </HeroWrapper>
  );
}
