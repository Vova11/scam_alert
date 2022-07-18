import logo from './logo.svg';
import './App.css';
import Coffee from './Coffee';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Scam Alert
        </h1>
        <button className="btn-light">
          <a href="https://chrome.google.com/webstore/detail/scam-alert/ifpffcplkjdpdgaionjapdnodeaieeek?hl=sk&authuser=0">Chrome Plugin</a>
        </button>
        <br />
        <br />
        <br />
        <br />
        <p>Ochrana práv spotrebiteľa</p>
        <ul>
          <li>Plugin neukladá informácie o histórií navštívených stránok.</li>
          <li>Ukladáme email pre štatistické účely. Stiahnutím pluginu súhlasíte, že môžme uložiť Váš email pre štatistické účely.</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
