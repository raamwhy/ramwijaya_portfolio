function Navbar({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={activeTab === tab.id ? 'nav-link active' : 'nav-link'}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
