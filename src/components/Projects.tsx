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
          <div className="projects__project">
            <div className="projects__name hana">{project.name}</div>
            <ImageSlider images={project.images} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
