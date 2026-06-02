import { ArrowUpRight } from 'lucide-react';
import { contactCards, localize } from '../data/portfolioData.js';
import SectionTitle from './SectionTitle.jsx';

function Contact({ language, text }) {
  return (
    <article>
      <SectionTitle title={text.pages.contact} />

      <div className="contact-grid">
        {contactCards.map((item) => {
          const Icon = item.icon;
          const cardContent = (
            <>
              <span className="contact-card-icon">
                <Icon size={22} strokeWidth={1.9} />
              </span>
              <span className="contact-card-copy">
                <small>{localize(item.title, language)}</small>
                <strong>{item.value}</strong>
              </span>
              {item.href ? <ArrowUpRight className="contact-arrow" size={18} /> : null}
            </>
          );

          return item.href ? (
            <a
              className="contact-card"
              data-reveal
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              key={localize(item.title, 'en')}
            >
              {cardContent}
            </a>
          ) : (
            <div className="contact-card" data-reveal key={localize(item.title, 'en')}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Contact;
