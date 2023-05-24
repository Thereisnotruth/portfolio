import { AiOutlineCopyright, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiVelog } from 'react-icons/si';
import profileJson from '@data/profile.json';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href={profileJson.git}>
          <AiOutlineGithub />
        </a>
        <a href={profileJson.blog}>
          <SiVelog />
        </a>
        <a href={profileJson.linkedIn}>
          <AiFillLinkedin />
        </a>
        <div className="footer__copyright">
          <AiOutlineCopyright className="footer__copyright-icon" />
          2023. KOEH. all rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
