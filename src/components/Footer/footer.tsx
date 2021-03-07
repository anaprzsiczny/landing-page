import React from 'react';
import DownFooter from './DownFooter/downFooter';
import UpFooter from './UpFooter/upFooter';
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <UpFooter />
      <DownFooter />
      <p data-testid="credits" className="footer-credits">© Datawarehouse™, 2020. All rights reserved. 
        Company Registration Number: 21479524.</p>
    </div>
  )
}

export default Footer