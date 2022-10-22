import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

import { Zbiorki } from "./components/Zbiorki";

function App() {
  const [theme, setTheme] = useState("dark");
  const [nav, setNav] = useState(<Zbiorki />);

  function toggleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="App" id={theme}>
      <header>
        <button id='themeButton' onClick={toggleTheme}></button>
      </header>
      <div id='container'>
        <div style={{ marginTop: 50 }}></div>
        {nav}
      </div>
    </div>
  );
}

export default App;
