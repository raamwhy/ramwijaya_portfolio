import { Mail, MapPin, Phone } from 'lucide-react';
import { localize, profile } from '../data/portfolioData.js';

function Sidebar({ language, text }) {
  const contactPreview = [
    {
      label: profile.contactLabels.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: profile.contactLabels.phone,
      value: profile.phone,
      href: profile.whatsapp,
      external: true,
      icon: Phone,
    },
    {
      label: profile.contactLabels.location,
      value: profile.location,
      icon: MapPin,
    },
  ];

  return (
    <aside className="sidebar-card">
      <div className="profile-head">
        <div className="avatar-frame">
          <img src={profile.avatar} alt="Ramdhan Wijaya profile placeholder" />
        </div>

        <div className="profile-copy">
          <div className="name-row">
            <h2>{profile.name}</h2>
          </div>
          <div className="role-stack">
            <p className="role-badge">{profile.primaryRole}</p>
            <p className="role-badge secondary">{profile.secondaryRole}</p>
          </div>
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="contact-preview">
        {contactPreview.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="contact-icon">
                <Icon size={18} strokeWidth={1.9} />
              </span>
              <span className="contact-text">
                <small>{localize(item.label, language)}</small>
                <strong>{item.value}</strong>
              </span>
            </>
          );

          return item.href ? (
            <a
              className="contact-row"
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              key={localize(item.label, 'en')}
            >
              {content}
            </a>
          ) : (
            <div className="contact-row" key={localize(item.label, 'en')}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="social-row" aria-label={text.aria.socialLinks}>
        {profile.socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <Icon size={18} strokeWidth={1.9} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
