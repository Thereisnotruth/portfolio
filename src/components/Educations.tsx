import { BsPencilFill } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';

import educationJson from '@data/educations.json';
import { modState } from '@atoms/modState';

interface Education {
  name: string;
  major: string;
  period: string;
}

function Educations() {
  const theme = useRecoilValue(modState);
  return (
    <div className={`educations font ${theme}`}>
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
