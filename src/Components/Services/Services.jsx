import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';  
import Services_Data from '../../assets/services_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          // Split the description into a short and long part
          const shortDesc = service.s_desc.split(' ').slice(0, 6).join(' ') + '...'; // First 20 words

          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{expandedService === index ? service.s_desc : shortDesc}</p>
              <div className="services-readmore" onClick={() => handleReadMoreClick(index)}>
                <p>
                  {expandedService === index ? 'Read less' : 'Read more'}
                </p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
