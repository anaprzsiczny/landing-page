import React from 'react';
import './learnMore.scss'
import CSS from "csstype";

const LearnMoreButton = (props: any) => {
  const styles: CSS.Properties = {
    backgroundColor: props.color,
  };

  return (
    <div style={styles} className="learnMoreButton">
      Learn More
    </div>
  );
}

export default LearnMoreButton