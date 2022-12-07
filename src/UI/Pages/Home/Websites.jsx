import React from 'react';
import './Section.scss';
import MediumItem from '../../Components/MediumItem/MediumItem';
import PandaNFTs from '../../../images/PandaNFTs.png';
import StefanoFamilyPizzeria from '../../../images/StefanosFamilyPizzeria.png';
import FitnessStore from '../../../images/FitnessStore.png';
import PetStore from '../../../images/PetStore.png';

const siteData = [
  {
    title: "Panda NFT's",
    website: 'https://nft-website.onrender.com/',
    github: 'https://github.com/Racksoup/NTF_Site',
    description: 'NFT Exchange Website',
    image: PandaNFTs,
  },
  {
    title: "Stefano's Family Pizzeria",
    website: 'https://stefanos-family-pizzeria.onrender.com/',
    github: 'https://github.com/Racksoup/StefanosFamilyPizzeria',
    description: 'Pizzeria Business Website',
    image: StefanoFamilyPizzeria,
  },
  {
    title: 'Fitness Store',
    website: 'https://fitness-store.onrender.com/',
    github: 'https://github.com/Racksoup/FitnessStore',
    description: 'Fitness and Exercise Equipment Online-Store',
    image: FitnessStore,
  },
  {
    title: 'Pet Store',
    website: 'https://pet-store.onrender.com/',
    github: 'https://github.com/Racksoup/PetStore',
    description: 'Pet Food, Toys, and Supplies',
    image: PetStore,
  },
];

const Websites = () => {
  return (
    <div className='Section'>
      <h3>Websites</h3>
      <div className='Content'>
        {siteData.map((x, i) => {
          return <MediumItem data={x} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Websites;
