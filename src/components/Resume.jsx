import { resumeSections } from '../data/portfolioData.js';
import SectionTitle from './SectionTitle.jsx';
import Timeline from './Timeline.jsx';

function Resume({ language, text }) {
  return (
    <article>
      <SectionTitle title={text.pages.resume} />

      <div className="resume-stack">
        {resumeSections.map((section) => (
          <Timeline section={section} language={language} key={section.title.en ?? section.title} />
        ))}
      </div>
    </article>
  );
}

export default Resume;
