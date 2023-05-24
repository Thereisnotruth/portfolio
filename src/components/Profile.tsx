import { BsFillPersonFill, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SiVelog } from 'react-icons/si';

import profileJson from '@data/profile.json';

function Profile() {
  return (
    <div className="profile font light">
      <div className="profile__container">
        <div className="profile__title">Profile</div>
        <div className="profile__row">
          <BsFillPersonFill className="profile__icon" />
          <div className="profile__label">이름</div>
          <div className="profile__content">{profileJson.name}</div>
        </div>
        <div className="profile__row">
          <AiOutlineMail className="profile__icon" />
          <div className="profile__label">이메일</div>
          <div className="profile__content">
            <a href={`mailto:${profileJson['e-mail']}`}>{profileJson['e-mail']}</a>
          </div>
        </div>
        <div className="profile__row">
          <SiVelog className="profile__icon" />
          <div className="profile__label">블로그</div>
          <div className="profile__content">
            <a href={profileJson.blog}>{profileJson.blog}</a>
          </div>
        </div>
        <div className="profile__row">
          <BsGithub className="profile__icon" />
          <div className="profile__label">git</div>
          <div className="profile__content">
            <a href={profileJson.git}>{profileJson.git}</a>
          </div>
        </div>
        <div className="profile__row" style={{ borderBottom: 'none' }}>
          {profileJson.description}
        </div>
      </div>
    </div>
  );
}

export default Profile;
