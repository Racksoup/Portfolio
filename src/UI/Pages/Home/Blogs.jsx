import React from 'react';
import './Section.scss';
import MediumItem from '../../Components/MediumItem/MediumItem';
import DevBlog from '../../../images/DevBlog.png';
import HistoryBlog from '../../../images/HistoryBlog.png';

const data = [
  {
    title: 'Dev Blog',
    website: 'www.ballz.ca',
    github: 'https://github.com/Racksoup/DevBlog',
    description: "Where I write about cool things in tech and things I've learned along my journey",
    image: DevBlog,
  },
  {
    title: 'History Blog',
    website: 'www.ballz.ca',
    github: 'https://github.com/Racksoup/HistoryBlog',
    description: 'Articles about geo-political history and technology over the last 300 years',
    image: HistoryBlog,
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
