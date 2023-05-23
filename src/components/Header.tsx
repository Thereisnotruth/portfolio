import { useState } from 'react';
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo hana">KOEH's Portfolio</div>
        <button className="header__nav-btn" onClick={handleNavBtnClick}>
          <AiOutlineMenu />
        </button>
      </div>
      <div className={`header__nav ${isOpen ? 'header__nav--clicked' : ''}`}>
        <li className="hana">
          <ul>Profile</ul>
          <ul>Skills</ul>
          <ul>Education</ul>
          <ul>Projects</ul>
        </li>
      </div>
    </div>
  );
}

export default Header;
