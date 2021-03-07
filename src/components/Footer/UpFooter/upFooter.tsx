import React from 'react';
import LearnMoreButton from '../../Button/learnMore';
import RequestDemoButton from '../../Button/requestDemo';
import './upFooter.scss'

const UpFooter = () => {
  return (
    <div className="upfooter">
      <div>
        <h3>Try for free!</h3>
        <p data-testid="upfooter-desc">Get limited 1 week free try our features!</p>
      </div>
      <div className="footer-buttons">
        <LearnMoreButton color="#F063B8"/>
        <RequestDemoButton />
      </div>
    </div>
  )
}

export default UpFooter