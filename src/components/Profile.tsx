import { BsFillPersonFill, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { SiVelog } from 'react-icons/si';

import profileJson from '@data/profile.json';

function Profile() {
  console.log(profileJson);
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__title hana">Profile</div>
        <div className="profile__row">
          <BsFillPersonFill className="profile__icon" />
          <div className="profile__label hana">이름</div>
          <div className="profile__content hana">{profileJson.name}</div>
        </div>
        <div className="profile__row">
          <AiOutlineMail className="profile__icon" />
          <div className="profile__label hana">이메일</div>
          <div className="profile__content hana">{profileJson['e-mail']}</div>
        </div>
        <div className="profile__row">
          <SiVelog className="profile__icon" />
          <div className="profile__label hana">블로그</div>
          <div className="profile__content hana">
            <a href={profileJson.blog}>{profileJson.blog}</a>
          </div>
        </div>
        <div className="profile__row">
          <BsGithub className="profile__icon" />
          <div className="profile__label hana">git</div>
          <div className="profile__content hana">
            <a href={profileJson.git}>{profileJson.git}</a>
          </div>
        </div>
        <div className="profile__row hana">{profileJson.description}</div>
      </div>
    </div>
  );
}

export default Profile;
