import { localize } from '../data/portfolioData.js';

function Timeline({ section, language }) {
  const SectionIcon = section.icon;

  return (
    <section className="timeline-section">
      <div className="timeline-heading" data-reveal>
        <span className="timeline-section-icon">
          <SectionIcon size={20} strokeWidth={1.9} />
        </span>
        <h2>{localize(section.title, language)}</h2>
      </div>

      <ol className="timeline-list">
        {section.items.map((item) => (
          <li
            className="timeline-item"
            data-reveal
            key={`${localize(section.title, 'en')}-${localize(item.title, 'en')}`}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <h3>{localize(item.title, language)}</h3>
              {item.subtitle ? (
                <p className="timeline-subtitle">{localize(item.subtitle, language)}</p>
              ) : null}
              <div className="timeline-meta">
                <span>{localize(item.date, language)}</span>
                {item.location ? <span>{localize(item.location, language)}</span> : null}
              </div>
              {item.description ? <p>{localize(item.description, language)}</p> : null}
              {item.bullets ? (
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={localize(bullet, 'en')}>{localize(bullet, language)}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
