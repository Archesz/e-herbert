import React, { useState } from 'react';
import './Header.scss'

function CircleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="circle-menu">
      <div className="circle" onClick={handleToggle}></div>
      {isOpen && (
        <ul className="menu">
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default CircleMenu;