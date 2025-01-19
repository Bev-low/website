import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { useLanguage } from '../context/LanguageContext';

function NavBar() {
  const { language, toggleLanguage } = useLanguage();

  const labels = {
    en: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      hobbies: 'Hobbies',
      toggle: 'English',
    },
    zh: {
      home: '首页',
      projects: '项目',
      experience: '经验',
      hobbies: '爱好',
      toggle: '中文',
    },
  };

  return (
    <nav>
      <div>
        <h1>My Portfolio</h1>
      </div>
      <ul>
        <li>
          <Link to="/">{labels[language].home}</Link>
        </li>
        <li>
          <Link to="/projects">{labels[language].projects}</Link>
        </li>
        <li>
          <Link to="/experience">{labels[language].experience}</Link>
        </li>
        <li>
          <Link to="/hobbies">{labels[language].hobbies}</Link>
        </li>
      </ul>
      <button onClick={toggleLanguage} className="language-toggle">
        {labels[language].toggle}
      </button>
    </nav>
  );
}

export default NavBar;
