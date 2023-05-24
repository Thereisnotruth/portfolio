import { TbBrowserCheck } from 'react-icons/tb';
import { BiServer } from 'react-icons/bi';
import { TbCertificate } from 'react-icons/tb';
import { SlPeople } from 'react-icons/sl';
``;

import skillJson from '@data/skills.json';

function Skills() {
  return (
    <div className="skills font">
      <div className="skills__container">
        <div className="skills__title">Skills</div>
        <div className="skills__row">
          <TbBrowserCheck className="skills__icon" />
          <div className="skills__label">Frontend</div>
          <div className="skills__content">
            {skillJson.frontend.map((value: string) => (
              <span className="skills__item" key={value}>
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="skills__row">
          <BiServer className="skills__icon" />
          <div className="skills__label">Backend</div>
          <div className="skills__content">
            {skillJson.backend.map((value: string) => (
              <span className="skills__item" key={value}>
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="skills__row">
          <TbCertificate className="skills__icon" />
          <div className="skills__label">Certificate</div>
          <div className="skills__content">
            {skillJson.certificate.map((value: string) => (
              <span className="skills__item" key={value}>
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="skills__row" style={{ borderBottom: 'none' }}>
          <SlPeople className="skills__icon" />
          <div className="skills__label">Collaborate</div>
          <div className="skills__content">
            {skillJson.collaborate.map((value: string) => (
              <span className="skills__item" key={value}>
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
