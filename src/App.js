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
        <ul id='nav'>
          <li><button>Strona Główna</button></li>
          <li><button>Zbiórki</button></li>
          <li><button>A</button></li>
        </ul>
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
