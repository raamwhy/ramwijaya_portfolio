import { aboutParagraphs, localize, services, skills } from '../data/portfolioData.js';
import SectionTitle from './SectionTitle.jsx';

function About({ language, text }) {
  return (
    <article>
      <SectionTitle title={text.pages.about} />

      <div className="about-copy" data-reveal>
        {aboutParagraphs.map((paragraph) => (
          <p key={localize(paragraph, 'en')}>{localize(paragraph, language)}</p>
        ))}
      </div>

      <section className="content-section" data-reveal>
        <h2 className="section-heading">{text.pages.doing}</h2>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            const title = localize(service.title, language);

            return (
              <div className="service-card" data-reveal key={localize(service.title, 'en')}>
                <div className="service-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{localize(service.description, language)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-section" data-reveal>
        <h2 className="section-heading">{text.pages.skills}</h2>
        <div className="skill-cloud">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <span className="skill-pill" data-reveal key={skill.name}>
                <Icon className="skill-logo" size={18} />
                {skill.name}
              </span>
            );
          })}
        </div>
      </section>
    </article>
  );
}

export default About;
