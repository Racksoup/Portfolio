import React from 'react';
import './about.scss';

import HeaderBG from '../../../images/HeaderBG.png';

const About = ({ Ref }) => {
  return (
    <div className='About' ref={Ref}>
      <div className='Title'>ABOUT</div>
      <div className='Contents'>
        <img className='Img' src={HeaderBG} />
        <div className='Text'>
          FDSFD fdsfds fdsfds fdsafdsafd fdsfdf ere wr d sfd sfds fsdf dsfFDSFD fdsfds fdsfds
          fdsafdsafd fdsfdf ere wr d sfd sfds fsdf dsfFDSFD fdsfds fdsfds fdsafdsafd fdsfdf ere wr d
          sfd sfds fsdf dsfFDSFD fdsfds fdsfds fdsafdsafd fdsfdf ere wr d sfd sfds fsdf dsfFDSFD
          fdsfds fdsfds fdsafdsafd fdsfdf ere wr d sfd sfds fsdf dsfFDSFD fdsfds fdsfds fdsafdsafd
          fdsfdf ere wr d sfd sfds fsdf dsfFDSFD fdsfds fdsfds fdsafdsafd fdsfdf ere wr d sfd sfds
          fsdf dsfFDSFD fdsfds fdsfds fdsafdsafd fdsfdf ere wr d sfd sfds fsdf dsfFDSFD fdsfds
          fdsfds fdsafdsafd fdsfdf ere wr d sfd sfds fsdf dsfFDSFD fdsfds fdsfds fdsafdsafd fdsfdf
          ere wr d sfd sfds fsdf dsf
        </div>
      </div>
    </div>
  );
};

export default About;
