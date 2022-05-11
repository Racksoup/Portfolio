import React from 'react';
import './services.scss';

const Services = ({ Ref }) => {
  return (
    <div className='Services' ref={Ref}>
      <div className='Title'>SERVICES</div>
      <div className='TitleDesc'>
        Lorem ipum dolor sit amet, consecteturr adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dalore magna aliqua. Venenatis a
      </div>
      <div className='Content'>
        <div className='Box-Red'></div>
        <div className='Box-Blue'></div>
        <div className='Box-Green'></div>
      </div>
    </div>
  );
};

export default Services;
