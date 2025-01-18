import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

/**
 * A hook to load JSON data for a given page/section and current language.
 * @param {string} pageName - e.g. 'home', 'projects', etc.
 * @returns {object} The JSON content (or empty object if not loaded yet).
 */
export default function useContentLoader(pageName) {
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState({});

  useEffect(() => {
    // Build path to relevant JSON file
    const filePath = `/src/data/${pageName}/${language}.json`;
    
    import(/* @vite-ignore */ filePath)
      .then((module) => {
        setContent(module.default);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);
        setContent({});
      });
  }, [pageName, language]);

  return content;
}
