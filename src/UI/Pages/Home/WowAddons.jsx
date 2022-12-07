import React from 'react';
import './Section.scss';
import MediumItem from '../../Components/MediumItem/MediumItem';
import GameRoom from '../../../images/GameRoom.png';
import XPChart from '../../../images/XPChart.png';

const data = [
  {
    title: 'Game Room',
    website: 'https://www.curseforge.com/wow/addons/game-room',
    github: 'https://github.com/Racksoup/ZUI_GameRoom',
    description:
      'Game Suite App for World of Warcraft! Features retro games like Battleships, Asteroids, Snake and more!',
    image: GameRoom,
  },
  {
    title: 'XP Chart',
    website: 'https://www.curseforge.com/wow/addons/xp-chart',
    github: 'https://github.com/Racksoup/ZUI_XPChart',
    description: 'This is where my description goes it goes right here in this place',
    image: XPChart,
  },
];

const WowAddons = () => {
  return (
    <div className='Section'>
      <h3>World of Warcraft Addons</h3>
      <div className='Content'>
        {data.map((x, i) => {
          return <MediumItem data={x} key={i} />;
        })}
      </div>
    </div>
  );
};

export default WowAddons;
