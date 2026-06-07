import { useEffect, useMemo, useState } from 'react';
import { Languages, Moon, Sun } from 'lucide-react';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import useRevealOnScroll from './hooks/useRevealOnScroll.js';
import { uiText } from './data/portfolioData.js';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  useRevealOnScroll(activeTab);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
  }, [language]);

  const text = uiText[language];

  const tabs = useMemo(
    () => [
      { id: 'about', label: text.nav.about },
      { id: 'portfolio', label: text.nav.portfolio },
      { id: 'resume', label: text.nav.resume },
      { id: 'contact', label: text.nav.contact },
    ],
    [text]
  );

  const activePage = useMemo(() => {
    const pages = {
      about: <About language={language} text={text} />,
      resume: <Resume language={language} text={text} />,
      portfolio: <Portfolio language={language} text={text} />,
      contact: <Contact language={language} text={text} />,
    };

    return pages[activeTab] ?? pages.about;
  }, [activeTab, language, text]);

  return (
    <main className="site-shell">
      <div className="portfolio-layout">
        <Sidebar language={language} text={text} />

        <section className="content-card" aria-live="polite">
          <div className="utility-controls" aria-label="Display controls">
            <button
              className="utility-button"
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={text.controls.switchTheme}
              title={text.controls.switchTheme}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              className="utility-button language-button"
              type="button"
              onClick={() => setLanguage((current) => (current === 'en' ? 'id' : 'en'))}
              aria-label={text.controls.switchLanguage}
              title={text.controls.switchLanguage}
            >
              <Languages size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
          <Navbar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="tab-panel" key={activeTab}>
            {activePage}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
