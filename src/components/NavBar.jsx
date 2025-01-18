import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

function NavBar() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/">Home</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/experience">Experience</Link> |{' '}
        <Link to="/hobbies">Hobbies</Link>
      </div>
      <div>
        <button onClick={() => switchLanguage('en')}>EN</button>
        <button onClick={() => switchLanguage('ch')}>中文</button>
        <span>Current: {language}</span>
      </div>
    </nav>
  );
}

export default NavBar;
