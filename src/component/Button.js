import React, { useState } from 'react';

function DropButton() {
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
    <div className='ContainerDropdown'>
    <div className="dropdown">
      <button className={`dropbtn ${isOpen1 ? 'open' : ''}`} onClick={toggleDropdown1}>
        Kelas
      </button>
      <div className={`dropdown-content ${isOpen1 ? 'open' : ''}`}>
        <a href="/user-page/">Kelas 10</a>
        <a href="/user-page/">Kelas 11</a>
        <a href="/user-page/">Kelas 12</a>
      </div>
    </div>
    </div>
    </>
  );
}

export default DropButton;