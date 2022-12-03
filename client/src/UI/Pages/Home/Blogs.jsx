import React from 'react';
import './Section.scss';
import MediumItem from '../../Components/MediumItem/MediumItem';

const data = [
  {
    title: 'zzz',
    website: 'www.ballz.ca',
    github: 'githubxx',
    description: 'This is where my description goes it goes right here in this place',
  },
  {
    title: 'zzz',
    website: 'www.ballz.ca',
    github: 'githubxx',
    description: 'This is where my description goes it goes right here in this place',
  },
];

const Blogs = () => {
  return (
    <div className='Section'>
      <h3>Blogs</h3>
      <div className='Content'>
        {data.map((x, i) => {
          return <MediumItem data={x} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
