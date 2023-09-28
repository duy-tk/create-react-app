import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("https://64ef0a8b219b3e2873c3d8c2.mockapi.io/user")
    .then((response) => {
      const data = response.data;
      data.map((e) => {
        console.log(e.name);
      });
      // console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    
  return (
    <div className="App">
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
  );
}

export default App;
