import React from 'react';
import './requestDemo.scss'
import { HiOutlineArrowRight } from "react-icons/hi";

const RequestDemoButton = () => {
  return (
    <div className="requestDemoButton">
      Request Demo <HiOutlineArrowRight className="arrow-icon" />
    </div>
  );
}

export default RequestDemoButton