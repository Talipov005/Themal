import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import image1 from '../../assets/logo-small.png';
import burger from '../../assets/Burger1.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
    
      navigate(`/search/${text}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className='container'>
      <div className='logo'>
        <img src={image1} alt="Logo" />
      </div>
      <div className='text'>
        <img 
          src={burger} 
          alt="Burger" 
          className="burger-icon" 
          onClick={toggleMenu} 
        />
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link className='Home' to="/">Home</Link>
          <Link className='Home' to="/about">API</Link>
          <input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            type="text" 
            placeholder="Search" 
            onKeyDown={handleKeyDown} 
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
