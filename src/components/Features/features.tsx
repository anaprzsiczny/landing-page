import React from 'react';
import CardFeatures from './Card/cardFeatures';
import ImageFeature1 from './Card/CardImageFeatures/CardImageFeature1/imageFeature1';
import ImageFeature2 from './Card/CardImageFeatures/CardImageFeature2/imageFeature2';
import ImageFeature3 from './Card/CardImageFeatures/CardImageFeature3/imageFeature3';
import ImageFeature4 from './Card/CardImageFeatures/CardImageFeature4/imageFeature4';
import './features.scss'

const Features = () => {

  const content = {
    card1: {
      title: 'Search Data',
      text: 'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'
    },
    card2: {
      title: '24 Hours Access',
      text: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.'
    },
    card3: {
      title: 'Print Out',
      text: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.'
    },
    card4: {
      title: 'Security Code',
      text: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.'
    }
  }

  return (
    <div>
      <div className="features-top">
        <p className="features-title" title="features-main-title">
          Features
        </p>
        <p className="features-subtitle" title="features-main-subtitle">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="features">
        <div className="card-features">
          <div className="feature-background1">
            <svg
              width="434"
              height="358"
              viewBox="0 0 434 358"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M44.2904 41.7355C48.3276 17.6466 69.1778 0.00012207 93.6026 0.00012207H383.285C410.899 0.00012207 433.285 22.3859 433.285 50.0001V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.226 1.05018 299.736L44.2904 41.7355Z"
                fill="#68C9BA"
              />
            </svg>
          </div>
          <div className="container-content">
            <div className="feature-image-top">
              <ImageFeature1 />
            </div>
            <div className="feature-content">
              <CardFeatures content={content.card1} />
            </div>
          </div>
        </div>
        <div className="card-features">
          <div className="feature-background2">
            <svg
              width="434"
              height="358"
              viewBox="0 0 434 358"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M44.2894 41.7354C48.3267 17.6465 69.1768 0 93.6017 0H383.284C410.898 0 433.284 22.3858 433.284 50V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.225 1.0492 299.735L44.2894 41.7354Z"
                fill="#9C69E2"
              />
            </svg>
          </div>
          <div className="container-content">
            <div className="feature-image-top">
              <ImageFeature2 />
            </div>
            <div className="feature-content">
              <CardFeatures content={content.card2} />
            </div>
          </div>
        </div>
        <div className="card-features">
          <div className="feature-background3">
            <svg
              width="434"
              height="358"
              viewBox="0 0 434 358"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M44.2904 41.7354C48.3276 17.6465 69.1778 0 93.6026 0H383.285C410.899 0 433.285 22.3858 433.285 50V308C433.285 335.614 410.899 358 383.285 358H50.3624C19.4471 358 -4.05989 330.225 1.05018 299.735L44.2904 41.7354Z"
                fill="#F063B8"
              />
            </svg>
          </div>
          <div className="container-content">
            <div className="feature-image-bottom">
              <ImageFeature3 />
            </div>
            <div className="feature-content">
              <CardFeatures content={content.card3} />
            </div>
          </div>
        </div>
        <div className="card-features">
          <div className="feature-background4">
            <svg
              width="434"
              height="358"
              viewBox="0 0 434 358"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M44.2894 41.7355C48.3267 17.6466 69.1768 0.00012207 93.6017 0.00012207H383.284C410.898 0.00012207 433.284 22.3859 433.284 50.0001V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.226 1.0492 299.736L44.2894 41.7355Z"
                fill="#2D9CDB"
              />
            </svg>
          </div>
          <div className="container-content">
            <div className="feature-image-bottom">
              <ImageFeature4 />
            </div>
            <div className="feature-content">
              <CardFeatures content={content.card4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features