import { BsPencilFill } from 'react-icons/bs';

import educationJson from '@data/educations.json';

interface Education {
  name: string;
  major: string;
  period: string;
}

function Educations() {
  return (
    <div className="educations">
      <div className="educations__container">
        <div className="educations__title hana">Educations</div>
        {educationJson['educations'].map((education: Education) => (
          <div className="educations__row">
            <BsPencilFill className="educations__icon" />
            <div className="educations__label hana">
              <div>{education.name}</div>
              <div>{education.major}</div>
            </div>
            <div className="educations__content hana">{education.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Educations;
