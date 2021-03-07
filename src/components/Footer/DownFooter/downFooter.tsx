import React from 'react';
import Logo from '../../Logo/logo';
import {FaFacebookF, FaTwitter, FaInstagramSquare} from 'react-icons/fa'
import './downFooter.scss'

const DownFooter = () => {
  return (
    <div className="downFooter">
      <div className="infos">
        <div className="upper-infos">
          <Logo />
          <span data-testid="upper-info-dw" className="dw">
            Data Warehouse
          </span>
        </div>
        <address>
          <p>Warehouse Society, 234</p>
          <p>Bahagia Ave Street PRBW 29281</p>
        </address>
        <p>info@warehouse.project</p>
        <p>1-232-3434 (Main)</p>
      </div>
      <div className="about">
        <span data-testid="down-footer-about">About</span>
        <a href="#">Profile</a>
        <a href="#">Features</a>
        <a href="#">Careers</a>
        <a href="#">DW News</a>
      </div>
      <div className="help">
        <span data-testid="down-footer-help">Help</span>
        <a href="#">Support</a>
        <a href="#">Sign up</a>
        <a href="#">Guide</a>
        <a href="#">Reports</a>
        <a href="#">Q&A</a>
      </div>
      <div className="socialMedia">
        <span data-testid="down-footer-social-media">Social Media</span>
        <FaFacebookF className="social-media" />
        <FaTwitter className="social-media" />
        <FaInstagramSquare className="social-media" />
      </div>
    </div>
  );
}

export default DownFooter