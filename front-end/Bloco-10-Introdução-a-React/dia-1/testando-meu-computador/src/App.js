import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

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
        <h2>Pink Floyd Songs</h2>
        <ul>{ pinkFloydMusics.map((music) => Task(music)) }</ul>
      </header>
      <Footer />
    </div>
  );
}

export default App;
