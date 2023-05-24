import { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';

import { modState } from '@atoms/modState';

function Header({ setMarginTop }: any) {
  const theme = useRecoilValue(modState);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavBtnClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (headerRef.current !== null) {
      setMarginTop(headerRef.current.clientHeight);
    }
  }, []);

  return (
    <header className={`header font ${theme}`} ref={headerRef}>
      <div className="header__content">
        <div className="header__logo">KOEH's Portfolio</div>
        <button className="header__nav-btn" onClick={handleNavBtnClick}>
          <AiOutlineMenu />
        </button>
      </div>
      <div className={`header__nav ${isOpen ? 'header__nav--clicked' : ''}`}>
        <li>
          <ul>Profile</ul>
          <ul>Skills</ul>
          <ul>Education</ul>
          <ul>Projects</ul>
        </li>
      </div>
    </header>
  );
}

export default Header;
