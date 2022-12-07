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
      <a href={website} target='_blank'>
        <h4>{title}</h4>
      </a>
      <a href={website} target='_blank'>
        <img src={image} alt='website-image' />
      </a>
      <a href={website} target='_blank'>
        <p className='Address'>{website}</p>
      </a>
      <a href={github} target='_blank'>
        <p className='Github'>{github}</p>
      </a>
      <p className='Description'>{description}</p>
    </div>
  );
};

export default MediumItem;
