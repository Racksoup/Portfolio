import React from 'react';
import './Section0.scss';
import HeaderBG from '../../../images/HeaderBG.png';

const Section0 = () => {
  return (
    <div className='Section0'>
      <div className='Header'>
        <div className='Content'>
          <h2>Connor Rack</h2>
          <h1>Portfolio</h1>
          <div className='LinkBox'>
            <div className='Line'>
              <p>Professional Website -</p>{' '}
              <a href='https://website-design.onrender.com/' target='_blank'>
                https://website-design.onrender.com/
              </a>
            </div>
            <div className='Line'>
              <p>Github -</p>{' '}
              <a href='https://github.com/Racksoup' target='_blank'>
                https://github.com/Racksoup
              </a>
            </div>
          </div>
        </div>
      </div>

      <img src={HeaderBG} alt='Home' />

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
