import "./App.css"
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <h1>Deploy CI/CD Test!!!!</h1>
	  <p>CI/CD를 구현해서 적용 : GitHub Action이용 </p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
