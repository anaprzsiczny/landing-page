import React from 'react';
import CardFeatures from './Card/cardFeatures';
import ImageFeature1 from './Card/CardImageFeatures/CardImageFeature1/imageFeature1';
import ImageFeature2 from './Card/CardImageFeatures/CardImageFeature2/imageFeature2';
import ImageFeature3 from './Card/CardImageFeatures/CardImageFeature3/imageFeature3';
import ImageFeature4 from './Card/CardImageFeatures/CardImageFeature4/imageFeature4';

const Features = () => {
  return (
    <div>
      <h3>Page Title</h3>
      <h4>Some of the features and adventures....</h4>
      <CardFeatures />
      <ImageFeature1 />
      <CardFeatures />
      <ImageFeature2 />
      <CardFeatures />
      <ImageFeature3 />
      <CardFeatures />
      <ImageFeature4 />
    </div>
  )
}

export default Features