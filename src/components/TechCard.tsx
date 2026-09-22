import { FaStar } from 'react-icons/fa';
import type { Technology } from '../App';

type TechCardProps = {
  tech: Technology;
  isSelected: boolean;
  onAdd: (tech: Technology) => void;
};

function TechCard({ tech, isSelected, onAdd }: TechCardProps) {
  return (
    <article className="tech-card">
      <div className="tech-card-header">
        <div className="tech-badge">{tech.badge}</div>
        <div className="tech-icon" aria-label={tech.name} title={tech.name}>
          {tech.icon}
        </div>
      </div>

      <div className="tech-main">
        <h3>{tech.name}</h3>
        <p>{tech.description}</p>
      </div>

      <div className="tech-meta-row">
        <div className="tech-meta-item">
          <span className="meta-label">Category</span>
          <span className="meta-value">{tech.category}</span>
        </div>
        <div className="tech-meta-item">
          <span className="meta-label">Difficulty</span>
          <span className="meta-value">{tech.difficulty}</span>
        </div>
        <div className="tech-meta-item rating-inline">
          <span className="meta-label">Rating</span>
          <span className="rating-inline-content">
            <span className="rating-stars" aria-label={`${tech.rating} out of 5 stars`}>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={`${tech.id}-star-${index}`}
                  className={index < Math.round(tech.rating) ? 'star filled' : 'star'}
                />
              ))}
            </span>
            <span className="rating-value">{tech.rating.toFixed(1)}</span>
          </span>
        </div>
      </div>

      <button
        type="button"
        className="stack-button"
        disabled={isSelected}
        onClick={() => onAdd(tech)}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}

export default TechCard;
