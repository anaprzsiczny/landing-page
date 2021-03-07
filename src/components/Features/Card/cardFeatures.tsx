import React from 'react';
import CardText from './CardText/cardText';
import CardTitle from './CardTitle/cardTitle';
import './cardFeatures.scss'
import {HiOutlineArrowRight} from 'react-icons/hi'

const CardFeatures = (props: any) => {

  const {title, text} = props.content

  return (
    <div className="card-features">
      <CardTitle title={title} />
      <CardText text={text} />
      <a href="#">
        Learn more <HiOutlineArrowRight className="arrow-icon" />
      </a>
    </div>
  );
}

export default CardFeatures