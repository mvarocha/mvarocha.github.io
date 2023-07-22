import React, { useEffect } from 'react';
import '../style/Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    verifyMarker();
  }, []);

  function verifyMarker() {
    let marker = document.querySelector('.marker')
    const url = (window.location.href).split("/").pop().toLowerCase()
    switch(url){
      case '':
      marker.style.left = '0px';
      marker.style.width = '43.14px';
      break;
    case 'about':
      marker.style.left = '118.14px';
      marker.style.width = '43.65px'
      break;
    case 'projects':
      marker.style.left = '236.79px';
      marker.style.width = '59.2px'
      break;
      default:
        break;
    }
  }

  return (
    <nav>
      <div className="myName">Marcus Rocha</div>
      <div className="navMenu">
        <NavLink to={"/"} onClick={changeMarker.bind(this)}>Home</NavLink>
        <NavLink to={"/about"} onClick={changeMarker.bind(this)}>About</NavLink>
        <NavLink to={"/projects"} onClick={changeMarker.bind(this)}>Projects</NavLink>
        <div className="marker"></div>
      </div>
    </nav>
  )
}

function changeMarker(element) {
  let marker = document.querySelector('.marker')
  const optionClicked = element.target.innerHTML;
  switch (optionClicked) {
    case 'Home':
      marker.style.left = '0px';
      marker.style.width = '43.14px';
      break;
    case 'About':
      marker.style.left = '118.14px';
      marker.style.width = '43.65px'
      break;
    case 'Projects':
      marker.style.left = '236.79px';
      marker.style.width = '59.2px'
      break;
    default:
      break;
  }
}

export default Navbar