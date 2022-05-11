import React, { useState } from 'react';
import './projects.scss';

import HeaderBG from '../../../images/HeaderBG.png';

const Projects = ({ Ref }) => {
  const [view, setView] = useState(0);

  const View = () => {
    switch (view) {
      case 0:
        return <View0 />;
      case 1:
        return <View1 />;
      case 2:
        return <View2 />;
      case 3:
        return <View3 />;
      case 4:
        return <View4 />;
    }
  };

  return (
    <div className='Projects' ref={Ref}>
      <div className='Title'>PORTFOLIO</div>
      <div className='Content'>
        <div className='Nav'>
          <div className='Btn' onClick={() => setView(0)}>
            All
          </div>
          <div className='Btn' onClick={() => setView(1)}>
            Resturant
          </div>
          <div className='Btn' onClick={() => setView(2)}>
            Law
          </div>
          <div className='Btn' onClick={() => setView(3)}>
            Ecommerce
          </div>
          <div className='Btn' onClick={() => setView(4)}>
            Beauty & Salon
          </div>
        </div>
        <View />
      </div>
    </div>
  );
};

const View0 = () => {
  return (
    <div className='Websites'>
      <div className='Website'>
        <img className='Img' src={HeaderBG} />
        <div className='Label'>Stefano's Family Pizzeria</div>
      </div>
      <div className='Website'>
        <img className='Img' src={HeaderBG} />
        <div className='Label'>Stefano's Family Pizzeria</div>
      </div>
      <div className='Website'>
        <img className='Img' src={HeaderBG} />
        <div className='Label'>Stefano's Family Pizzeria</div>
      </div>
      <div className='Website'>
        <img className='Img' src={HeaderBG} />
        <div className='Label'>Stefano's Family Pizzeria</div>
      </div>
      <div className='Website'>
        <img className='Img' src={HeaderBG} />
        <div className='Label'>Stefano's Family Pizzeria</div>
      </div>
      <div className='Website'>
        <img className='Img' src={HeaderBG} />
        <div className='Label'>Stefano's Family Pizzeria</div>
      </div>
    </div>
  );
};
const View1 = () => {
  return <div>hi 1</div>;
};
const View2 = () => {
  return <div>hi 2</div>;
};
const View3 = () => {
  return <div>hi 3</div>;
};
const View4 = () => {
  return <div>hi 4</div>;
};

export default Projects;
