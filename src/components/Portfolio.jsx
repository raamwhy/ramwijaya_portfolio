import { useMemo, useState } from 'react';
import { Eye } from 'lucide-react';
import { localize, projects } from '../data/portfolioData.js';
import SectionTitle from './SectionTitle.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

function Portfolio({ language, text }) {
  const [activeFilter, setActiveFilter] = useState('all');
  useRevealOnScroll(activeFilter);

  const filters = useMemo(
    () => [
      { id: 'all', label: text.filters.all },
      { id: 'machine-learning', label: text.filters.machineLearning },
      { id: 'web-development', label: text.filters.webDevelopment },
      { id: 'mobile-apps', label: text.filters.mobileApps },
    ],
    [text]
  );

  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return orderedProjects;
    }

    return orderedProjects.filter((project) => project.filter === activeFilter);
  }, [activeFilter, orderedProjects]);

  return (
    <article>
      <SectionTitle title={text.pages.portfolio} />

      <div className="portfolio-toolbar" data-reveal aria-label={text.aria.portfolioFilters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={activeFilter === filter.id ? 'filter-button active' : 'filter-button'}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <a
            className="project-card"
            data-reveal
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
          >
            <div className="project-thumb" aria-hidden="true">
              {project.thumbnail ? (
                <img
                  className={
                    project.imageFit === 'contain'
                      ? 'project-image project-image-contain'
                      : 'project-image'
                  }
                  src={project.thumbnail}
                  alt=""
                />
              ) : (
                <div className="api-window">
                  <div className="api-topbar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="api-body">
                    <div className="api-title">
                      <strong>FINARY API</strong>
                      <em>v1</em>
                    </div>
                    <div className="api-row gold" />
                    <div className="api-row wide" />
                    <div className="api-row short" />
                    <div className="endpoint-row">
                      <span>POST</span>
                      <strong>/predict/financial-profile</strong>
                    </div>
                    <div className="endpoint-row muted">
                      <span>GET</span>
                      <strong>/recommend/side-hustle</strong>
                    </div>
                  </div>
                </div>
              )}
              <div className="project-overlay">
                <span className="project-eye">
                  <Eye size={21} strokeWidth={1.9} />
                </span>
              </div>
            </div>

            <div className="project-info">
              <h2>{project.title}</h2>
              <span>{localize(project.category, language)}</span>
            </div>
          </a>
        ))}
      </div>

      <p className="portfolio-more" data-reveal>
        {text.portfolioMore.prefix}{' '}
        <a href={text.portfolioMore.link} target="_blank" rel="noopener noreferrer">
          {text.portfolioMore.cta}
        </a>
        .
      </p>
    </article>
  );
}

export default Portfolio;
