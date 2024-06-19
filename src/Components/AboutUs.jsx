import React,{useContext} from 'react'
import Image from '../assets/man.png'
import { ThemeContext } from './Context/ThemeContext';

function AboutUs() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={`home ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="text">
        <h1><span className='colored'>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      </div>
      <div className="image">
        <img src={Image} alt="man sitting with notebook" srcSet="" />
      </div>
    </div>
  )
}

export default AboutUs
