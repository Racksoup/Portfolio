import React, { useState, useEffect } from 'react';
import './Navbar.scss';

import { Link } from 'react-router-dom';
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  let TopMiddleStyle = {
    border: 'none',
  };

  if (searchActive) {
    TopMiddleStyle.border = 'solid rgb(185, 126, 67) 0.05rem';
  }

  return (
    <div className='Navbar'>
      <div className='Top'>
        <Link to='/' className='Link'>
          <h1 className='TopLeft'></h1>
        </Link>
        <div className='TopMiddle' style={TopMiddleStyle}>
          <button className='DropdownButton'>
            All
            <div className='DropdownBox'>
              <div className='DropdownItem'>123</div>
              <div className='DropdownItem'>abc</div>
              <div className='DropdownItem'>xyz</div>
            </div>
          </button>
          <input
            type='text'
            className='Search'
            onClick={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
          <button className='SearchButton'>
            <FontAwesomeIcon icon={faSearch} className='Icon' />
          </button>
        </div>
        <div className='TopRight'>
          <Link className='Link' to='/cart'>
            <button className='Icon'>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </Link>
          <Link className='Link' to='/user-login'>
            <button className='Icon'>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Link>
        </div>
      </div>
      <div className='Bottom'></div>
    </div>
  );
};

export default Navbar;
