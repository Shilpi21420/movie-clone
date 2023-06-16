import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
//import logo from "../../assets/logo.jpeg"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img  className='header_icon' src='https://cdn.pixabay.com/photo/2021/10/09/12/45/play-button-6694068_1280.png' /></Link>
            <Link to="/movies/popular" className='text'><span>Popular</span></Link>
            <Link to="/movies/top_rated" className='text'><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" className='text'><span>Upcoming</span></Link>
          

        </div>
      
    </div>
  )
}

export default Header



