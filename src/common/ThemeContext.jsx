import {createContext,useEffect,useContext,useState} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    
  };
  return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = { 
  children: PropTypes.node
}