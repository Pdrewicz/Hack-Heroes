import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

import { Zbiorki } from "./components/Zbiorki";
import { Akcje } from "./components/Akcje";
import { StronaGlowna } from "./components/StronaGlowna";

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
          <li><button onClick={() => setNav(<StronaGlowna />)}>Strona Główna</button></li>
          <li><button onClick={() => setNav(<Zbiorki />)}>Zbiórki</button></li>
          <li><button onClick={() => setNav(<Akcje />)}>A</button></li>
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
