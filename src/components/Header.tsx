import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo hana">KOEH's Portfolio</div>
        <li className="header__nav hana">
          <AiOutlineMenu className="header__nav-btn" />
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
