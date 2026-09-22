import TechCard from './TechCard';
import type { Technology } from '../App';

type TechListProps = {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (tech: Technology) => void;
};

function TechList({ technologies, stack, onAdd }: TechListProps) {
  return (
    <section className="tech-list-wrap">
      <div className="section-heading">
        <h2>
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p>Pick the technologies to build your ideal stack.</p>
      </div>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            isSelected={stack.some((item) => item.id === tech.id)}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}

export default TechList;
