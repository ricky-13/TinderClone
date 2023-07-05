import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className = 'header'>
        <IconButton>
            <PersonIcon fontSize = 'large' className = 'header__icon' />
        </IconButton>

        <img className='header__logo' src = "https://static.vecteezy.com/system/resources/previews/021/460/424/original/tinder-logo-transparent-free-png.png" alt='nai hora' />

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
        </IconButton>
        {/* sdfsfsdfdsfsf */}
        
    </div>
  )
}

export default Header;
