import React, { createContext, useState, useContext } from 'react';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'zh' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Export the context itself for consumption
export function useLanguage() {
  return useContext(LanguageContext);
}

// Export the context
export { LanguageContext };
