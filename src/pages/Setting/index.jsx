import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader/PageHeader';

import './Settings.css';

function Settings() {
  const [theme, setTheme] = useState(
    localStorage.getItem('focus-theme') || 'system'
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light-theme', 'dark-theme');

    if (theme === 'light') {
      root.classList.add('light-theme');
    }

    if (theme === 'dark') {
      root.classList.add('dark-theme');
    }

    localStorage.setItem('focus-theme', theme);
  }, [theme]);

  return (
    <div className="page settingsPage">

      <PageHeader title="Налаштування" />

      <section className="settingsSection">

        <h2>Тема</h2>

        <div className="themeOptions">

          <label className="themeOption">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
            />

            <span>☀️</span>
            <span>Світла</span>
          </label>


          <label className="themeOption">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
            />

            <span>🌙</span>
            <span>Темна</span>
          </label>


          <label className="themeOption">
            <input
              type="radio"
              name="theme"
              value="system"
              checked={theme === 'system'}
              onChange={() => setTheme('system')}
            />

            <span>⚙️</span>
            <span>Системна</span>
          </label>

        </div>

      </section>


      <section className="settingsSection">

        <h2>Про застосунок</h2>

        <Link
          to="/about"
          className="settingsLink"
        >
          Про Focus & Plan →
        </Link>

      </section>


      <section className="settingsSection version">

        <h2>Версія</h2>

        <p>1.0.0</p>

      </section>

    </div>
  );
}

export default Settings;