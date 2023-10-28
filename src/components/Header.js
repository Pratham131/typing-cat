import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon, SvgIcon } from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';
// import { black } from '@mui/material/colors';

const Header = () => {
  return (
    <div className='header'>
      <h1>TypeCat</h1>
      <Icon>KeyboardIcon</Icon>
      <Avatar 
      src="/broken-image.jpg" />
    </div>
  )
}


export default Header