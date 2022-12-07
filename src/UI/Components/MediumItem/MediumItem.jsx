import React from 'react';
import './MediumItem.scss';

const MediumItem = (data) => {
  const title = data.data.title;
  const website = data.data.website;
  const github = data.data.github;
  const description = data.data.description;
  const image = data.data.image;

  return (
    <div className='MediumItem'>
      <h4>{title}</h4>
      <img src={image} alt='website-image' />
      <p className='Address'>{website}</p>
      <p className='Github'>{github}</p>
      <p className='Description'>{description}</p>
    </div>
  );
};

export default MediumItem;
