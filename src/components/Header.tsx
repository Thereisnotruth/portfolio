import { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { useRecoilState } from 'recoil';

import { modState } from '@atoms/modState';

function Header({ setMarginTop }: any) {
  const [theme, setTheme] = useRecoilState<string>(modState);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const onChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
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
        <div className={`header__nav ${isOpen ? 'header__nav--clicked' : ''}`}>
          <li>
            <ul className="header__controller--pc">
              <button type="button" onClick={onChangeTheme}>
                <MdDarkMode />
              </button>
            </ul>
            <ul>Profile</ul>
            <ul>Skills</ul>
            <ul>Education</ul>
            <ul>Projects</ul>
            <ul className="header__controller">
              <button type="button" onClick={onChangeTheme}>
                <MdDarkMode />
              </button>
            </ul>
          </li>
        </div>
      </div>
    </header>
  );
}

export default Header;
