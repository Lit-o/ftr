import logo from './assets/pictures/ftr.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to rock and rolla! But check VCS settings
        </p>
        <a href="https://en.wikipedia.org/wiki/Main_Page"
        target="_blank"
        >
          Learn some stuff!
        </a>
      </header>
    </div>
  );
}

export default App;
