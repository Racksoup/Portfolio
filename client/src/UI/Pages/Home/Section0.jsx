import React from 'react';
import './Section0.scss';

const Section0 = () => {
  return (
    <div className='Section0'>
      <div className='Header'>
        <div className='Content'>
          <h2>Connor Rack</h2>
          <h1>Portfolio</h1>
          <div className='LinkBox'>
            <div className='Line'>
              <p>Professional Website -</p> <a href='#'>www.website.com</a>
            </div>
            <div className='Line'>
              <p>Github -</p> <a href='#'>www.github/racksoup.com</a>
            </div>
          </div>
        </div>
      </div>

      <img src='' alt='' />

      <div className='Bottom'>
        <div className='Arrow'>
          <div className='Inner'></div>
        </div>

        <div className='TextBox'>
          <p>I am a dedicated Developer who builds Websites, Games, and Game-Mods</p>
        </div>
      </div>
    </div>
  );
};

export default Section0;
