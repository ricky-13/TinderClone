import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className = 'header'>
        <IconButton>
            <PersonIcon fontSize = 'large' className = 'header__icon' />
            {/* installed material ui package and getting specific icons from it */}
        </IconButton>
        {/* icon button to make the person icon clickable */}
        <Link to = "/addCard/">
          <img className='header__logo' src = "https://static.vecteezy.com/system/resources/previews/021/460/424/original/tinder-logo-transparent-free-png.png" alt='nai hora' />
        </Link>
        

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
        {/* icon button to make it clickable */}
        
    </div>
  )
}

export default Header;
