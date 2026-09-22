import { FaTimes } from 'react-icons/fa';
import type { Technology } from '../App';

type SidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

function Sidebar({ stack, onRemove, onRemoveAll }: SidebarProps) {
  return (
    <aside className="stack-sidebar">
      <div className="sidebar-header">
        <h3>Your Stack</h3>
        <span className="stack-count">{stack.length} Technologies Selected</span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-state">
          <p>Your stack is empty.</p>
          <span>Add technologies from the list.</span>
        </div>
      ) : (
        <ul className="stack-list">
          {stack.map((tech) => (
            <li key={tech.id} className="stack-item">
              <div className="stack-item-main">
                <span className="stack-item-icon" aria-hidden="true">{tech.icon}</span>
                <div>
                  <strong>{tech.name}</strong>
                  <small>{tech.category}</small>
                </div>
              </div>
              <button
                type="button"
                className="remove-button"
                aria-label={`Remove ${tech.name} from your stack`}
                onClick={() => onRemove(tech.id)}
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      )}

      <button type="button" className="remove-all-button" onClick={onRemoveAll}>
        Remove All
      </button>
    </aside>
  );
}

export default Sidebar;
