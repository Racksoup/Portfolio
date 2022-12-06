import React from 'react';
import './MediumItem.scss';

const MediumItem = (data) => {
  const title = data.data.title;
  const website = data.data.website;
  const github = data.data.github;
  const description = data.data.description;

  return (
    <div className='MediumItem'>
      <h4>{title}</h4>
      <img src='' alt='' />
      <p className='Address'>{website}</p>
      <p className='Github'>{github}</p>
      <p className='Description'>{description}</p>
    </div>
  );
};

export default MediumItem;
