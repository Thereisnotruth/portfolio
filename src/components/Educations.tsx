import { BsPencilFill } from 'react-icons/bs';

import educationJson from '@data/educations.json';

interface Education {
  name: string;
  major: string;
  period: string;
}

function Educations() {
  return (
    <div className="educations font">
      <div className="educations__container">
        <div className="educations__title">Educations</div>
        {educationJson['educations'].map((education: Education, index: number) => (
          <div
            className="educations__row"
            key={index}
            style={index === educationJson['educations'].length - 1 ? { borderBottom: 'none' } : {}}
          >
            <BsPencilFill className="educations__icon" />
            <div className="educations__label">
              <div>{education.name}</div>
              <div>{education.major}</div>
            </div>
            <div className="educations__content">{education.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Educations;
