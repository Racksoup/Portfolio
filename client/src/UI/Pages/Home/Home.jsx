import React from 'react';
import Section0 from './Section0.jsx';
import Websites from './Websites.jsx';
import WowAddons from './WowAddons.jsx';
import Blogs from './Blogs.jsx';

const Home = () => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'Center',
        justifyContent: 'Center',
      }}
    >
      <Section0 />
      <Websites />
      <WowAddons />
      <Blogs />
    </div>
  );
};

export default Home;
