import React, { useState } from 'react';

import { getItem, setItem } from 'clientBrowser/localStorage';

interface ThemeProviderPropTypes {
  children: JSX.Element;
}

function ThemeProvider({ children }: ThemeProviderPropTypes) {
  const [theme, setTheme] = useState<ThemesType>(
    () => getItem('theme') as ThemesType
  );

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setItem('theme', newTheme);
  };

  return (
    <section className={theme}>
      {children}
      <button onClick={toggleTheme} className="fixed top-5 right-5 z-10">
        toggle theme
      </button>
    </section>
  );
}

export default ThemeProvider;
