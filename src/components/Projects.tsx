import { AiOutlineCalendar, AiOutlineSetting } from 'react-icons/ai';
import { ImStack } from 'react-icons/im';
import { FiTool } from 'react-icons/fi';

import ImageSlider from '@components/ImageSlider';
import projectJson from '@data/projects.json';

interface Project {
  name: string;
  period: string;
  skills: Array<string>;
  role: Array<string>;
  summary: string;
  images: Array<string>;
  features: Array<string>;
  reason: Array<string>;
  result: Array<string>;
  review: Array<string>;
}

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__title hana">Projects</div>
        {projectJson.projects.map((project: Project) => (
          <div className="projects__project" key={project.name}>
            <div className="projects__name hana">{project.name}</div>
            <ImageSlider images={project.images} />
            <div className="projects__row">
              <AiOutlineCalendar className="projects__icon" />
              <div className="projects__label hana">개발 기간</div>
              <div className="projects__content hana">{project.period}</div>
            </div>
            <div className="projects__row">
              <ImStack className="projects__icon" />
              <div className="projects__label hana">기술 스택</div>
              <div className="projects__content hana">
                <div className="projects__skills">
                  {project.skills.map((skill: string) => (
                    <span className="projects__skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="projects__row">
              <FiTool className="projects__icon" />
              <div className="projects__label hana">역할</div>
              <div className="projects__content hana">
                <div className="projects__skills">
                  {project.role.map((role: string) => (
                    <span className="projects__skill" key={role}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="projects__row">
              <AiOutlineSetting className="projects__icon" />
              <div className="projects__label hana">주요 기능</div>
              <div className="projects__content hana">
                <div className="projects__feature">
                  {project.features.map((feature: string) => (
                    <div key={feature}>{feature}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="projects__row hana">{project.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
