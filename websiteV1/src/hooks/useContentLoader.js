import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

/**
 * Custom hook to load JSON data for a given page.
 * @param {string} pageName - The name of the page (e.g., 'home').
 */
function useContentLoader(pageName) {
  const { language } = useContext(LanguageContext); // Get the current language
  const [content, setContent] = useState({});

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await import(`../data/${pageName}/${language}.json`);
        setContent(response.default);
      } catch (error) {
        console.error('Failed to load content:', error);
        setContent({});
      }
    };

    loadContent();
  }, [language, pageName]);

  return content;
}

export default useContentLoader;
