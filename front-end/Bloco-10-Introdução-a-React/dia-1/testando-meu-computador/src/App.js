import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const pinkFloydMusics = ['Money', 'hey you', 'breath', 'time', 'high hopes']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{ pinkFloydMusics.map((music) => Task(music)) }</ul>
      </header>
    </div>
  );
}

export default App;
